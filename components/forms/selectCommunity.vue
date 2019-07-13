<template lang="pug">
  v-form    
    v-layout(column justify-center align-center)
      v-flex(xs12).full-width.text-xs-center
        h2.caption NIVEL 1
        h1.title.my-2 Comunidad Global
      v-flex(xs12 sm6).full-width
        h2.caption.text-xs-center NIVEL 2
        div(v-if='index')
          p(class="text-xs-center") Toca sobre un continente
          #map-continents
            ul.continents
              li.c1: a(href='#Africa' rel="nofollow") Africa
              li.c2: a(href='#Asia' rel="nofollow") Asia
              li.c3: a(href='#Oceania' rel="nofollow") Oceania
              li.c4: a(href='#Europe' rel="nofollow") Europe
              li.c5: a(href='#Americas' rel="nofollow") Norte America
              li.c6: a(href='#Americas' rel="nofollow") Sur America
        v-select(
          v-else
          :items='continents'
          label='Continent'
          v-model='selectedContinent'
          solo
        )
      v-flex(xs12 sm6).text-xs-center
        h2.caption NIVEL 3
        v-select(
          :items='countries'
          label='Paises'
          :placeholder="placeholder"
          v-model='selectedCountry'
          :disabled='disabled'
          :loading='loading'
          solo
        )
      p(class="text-xs-center") #[strong Mis comunidades:] Comunidad Global{{this.selectedContinent?', ' + this.selectedContinent:''}}{{this.selectedCountry?', ' + this.selectedCountry: ''}}.
      v-flex(v-if='showbtn' xs12)
        v-btn( nuxt to='/signup' color='success' class="px-5")
          strong Unete
      v-flex(xs12 sm6)
</template>
<script>
import communityService from '~/services/community'

export default {
  name: 'selectCommunity',
  props: {
    showbtn: { type: Boolean, required: false, default: true },
    index: { type: Boolean, required: false, default: true }
  },
  data () {
    return {
      placeholder: 'Toca sobre un continente',
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
      this.loading = !this.loading
      if (newVal === 'Sur America') {
        this.countries = ['Argentina', 'Bolivia', 'Brasil', 'Colombia', 'Chile', 'Ecuador', 'Guyana', 'Guyana francesa', 'Paraguay', 'Peru', 'Surinam', 'Venezuela', 'Uruguay']
      } else if (newVal === 'Norte America') {
        this.countries = ['Anguila', 'Antigua y Barbuda', 'Aruba', 'Bahamas', 'Barbados', 'Belize', 'Bermuda', 'Bonaire, Sint Eustatius and Saba', 'Estados Unidos', 'Canada', 'Islas caiman', 'Costa rica', 'Cuba', 'Dominicana', 'El Salvador', 'Honduras', 'Jamaica', 'Martinique', 'Panama', 'Puerto Rico', 'Trinidad y tobago']
      } else {
        this.countries = await communityService.getAllByContinent(newVal).then(res => res)
      }
      this.placeholder = `Paises de ${newVal}`
      this.loading = !this.loading
      this.disabled = false
      this.$store.commit('updateCommunity', { name: newVal, level: 1 })
    },
    selectedCountry (newVal) {
      this.$store.commit('updateCommunity', { name: newVal, level: 2 })
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
