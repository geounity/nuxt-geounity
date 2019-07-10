<template lang="pug">
  v-form
    v-layout(column justify-center align-center)
      v-flex(xs12).full-width.text-xs-center
        h2.caption NIVEL 1
        h1.title Comunidad Global
      v-flex(xs12 sm6).full-width
        h2.caption.text-xs-center NIVEL 2
        div(v-if='index')          
          #map-continents
            ul.continents
              li.c1: a(href='#Africa' rel="nofollow") Africa
              li.c2: a(href='#Asia' rel="nofollow") Asia
              li.c3: a(href='#Oceania' rel="nofollow") Oceania
              li.c4: a(href='#Europe' rel="nofollow") Europe
              li.c5: a(href='#Americas' rel="nofollow") North America
              li.c6: a(href='#Americas' rel="nofollow") South America
        v-select(
          v-else
          :items='continents'
          label='Continent'
          v-model='selectedContinent'
          full-width
        )
      v-flex(xs12 sm6).full-width.text-xs-center
        h2.caption NIVEL 3
        v-select(
          :items='countries'
          label='Country'
          v-model='selectedCountry'
          :disabled='disabled'
          :loading='loading'
          full-width
        )
        
      v-flex(xs12 sm6)
        p #[strong Mis comunidades:] Comunidad Global{{this.selectedContinent?', ' + this.selectedContinent:''}}{{this.selectedCountry?', ' + this.selectedCountry: ''}}.
      v-flex(xs12 sm6 d-flex v-if='showbtn')
        v-btn( nuxt to='/signup' color='success')
          strong Unete
</template>
<script>
import communityService from '~/plugins/community'

export default {
  name: 'selectCommunity',
  props: {
    showbtn: { type: Boolean, required: false, default: true },
    index: { type: Boolean, required: false, default: true }
  },
  data () {
    return {
      loading: false,
      disabled: true,
      continents: ['Asia', 'Africa', 'Americas', 'Europe', 'Oceania', 'Polos'],
      selectedContinent: '',
      countries: [],
      selectedCountry: ''
    }
  },
  async mounted () {
    let l = this.geocommunity.length
    if (l > 1) {
      this.selectedContinent = this.geocommunity[1].name
      console.log('Continente: ' + this.geocommunity[1].name)
    }
    if (l > 2) {
      this.selectedCountry = this.geocommunity[2].name
      console.log('Pais: ' + this.geocommunity[2].name)
    }
    // CSSMap;
    let self = this
    window.$(document).ready(function () {
      window.$('#map-continents').CSSMap({
        'size': 850,
        onClick: function (listItem) {
          self.selectedContinent = listItem[0].textContent
        }
      })
      // END OF THE CSSMap;
    })
  },
  computed: {
    geocommunity () {
      return this.$store.state.geocommunity
    }
  },
  watch: {
    async selectedContinent (newVal) {
      this.loading = !this.loading
      if (newVal === 'South America') {
        this.countries = ['Argentina', 'Bolivia', 'Brasil', 'Colombia', 'Chile', 'Ecuador', 'Guyana', 'Guyana francesa', 'Paraguay', 'Peru', 'Surinam', 'Venezuela', 'Uruguay']
      } else if (newVal === 'North America') {
        this.countries = await communityService.getAllByContinent('Americas').then(res => res)
      } else {
        this.countries = await communityService.getAllByContinent(newVal).then(res => res)
      }
      this.loading = !this.loading
      this.disabled = false
      this.$store.commit('updateCommunity', { name: newVal, level: 1 })
    },
    search () {
      communityService.search().then(res => {
        const arr = res.map(country => country.name)
        console.log(arr)
      })
    },
    selectedCountry (newVal) {
      this.$store.commit('updateCommunity', { name: newVal, level: 2 })
    }
  }
}
</script>

<style scoped>
.continents{
  border: 2px solid red;
}
a{
  color: transparent;
  text-decoration: none;
}
li{
  list-style: none;
}
.caption{
  background-color: #209cee;
  color: white;
  display: block;
  margin: 0;
}
.full-width{
  width: 100%;
}
.title{
  padding-top: .5rem;
  padding-bottom: .5rem;
}
</style>
