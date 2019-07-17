<template lang="pug">
  v-form
    v-layout(column justify-center align-center)
      v-flex(v-if="showMap" xs12 sm6).full-width
        #map-continents
          ul.continents
            li.c1: a(href='#Africa' rel="nofollow") Africa
            li.c2: a(href='#Asia' rel="nofollow") Asia
            li.c3: a(href='#Oceania' rel="nofollow") Oceania
            li.c4: a(href='#Europe' rel="nofollow") Europe
            li.c5: a(href='#Americas' rel="nofollow") Norte America
            li.c6: a(href='#Americas' rel="nofollow") Sur America
        p(class="text-xs-center mb-2") Toca sobre un continente
      v-flex(v-else xs12 sm6).text-xs-center
        h2.caption CONTINENTES
        v-select(
          :items='continents'
          label='Continent'
          v-model='selectedContinent'
          solo
        )
      v-flex(xs12 sm6).text-xs-center
        h2.caption PAISES
        v-select(
          :items='countries'
          label='Paises'
          :placeholder="placeholder"
          v-model='selectedCountry'
          :disabled='disabled'
          :loading='loading'
          solo
        )
      v-flex(xs12 sm6).text-xs-center
        v-alert(:value="error" type="error") {{ error }}
      p(class="text-xs-center") #[strong Mis comunidades:] Comunidad Global{{this.selectedContinent?', ' + this.selectedContinent:''}}{{this.selectedCountry?', ' + this.selectedCountry: ''}}.
      v-flex(v-if='showbtn' xs12)
        v-btn( nuxt to='/signup' color='success' class="px-5")
          strong Unete
      v-flex(xs12 sm6)
</template>
<script>
import apiGeounity from '~/plugins/api'

export default {
  name: 'selectCommunity',
  props: {
    showbtn: { type: Boolean, required: false, default: true },
    showMap: { type: Boolean, required: false, default: true }
  },
  data () {
    return {
      placeholder: 'Toca sobre un continente',
      error: '',
      loading: false,
      disabled: true,
      continents: ['Asia', 'Africa', 'Europe', 'Norte America', 'Sur America', 'Oceania', 'Polos'],
      selectedContinent: '',
      countries: [],
      selectedCountry: ''
    }
  },
  async mounted () {
    let l = this.geocommunity.length
    if (l > 1) {
      this.selectedContinent = this.geocommunity[1].name
    }
    if (l > 2) {
      this.selectedCountry = this.geocommunity[2].name
    }
    // CSSMap;
    let self = this
    window.$(document).ready(function () {
      window.$('#map-continents').CSSMap({
        'size': 650,
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
      this.loading = true
      try {
        let result = await apiGeounity.get(`${newVal}/countries`)
        this.countries = result.data.map((item) => item.name)
      } catch (e) {
        this.error = `Error: ${e}`
      }
      console.log('COUNTRIES')
      console.log(this.countries)
      this.placeholder = `Paises de ${newVal}`
      this.loading = false
      this.disabled = false
      this.$store.commit('UPDATE_GEOCOMMUNITY', { name: newVal, level: 2 })
    },
    selectedCountry (newVal) {
      this.$store.commit('UPDATE_GEOCOMMUNITY', { name: newVal, level: 3 })
    }
  }
}
</script>

<style scoped>
a{
  color: transparent;
  text-decoration: none;
}
li{
  list-style: none;
}
p{
  margin: 0;
  padding: 0;
}
.caption{
  background-color: #209cee;
  color: white;
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
