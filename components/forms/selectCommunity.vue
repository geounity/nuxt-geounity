<template lang="pug">
  v-form
    v-layout(column justify-center align-center)
      v-flex(xs12).full-width.text-xs-center
        h2.caption NIVEL 1
        h1.title Comunidad Global
      v-flex(xs12 sm6).full-width
        h2.caption.text-xs-center NIVEL 2
        #map-continents
          ul.continents
            li.c1: a(href='#africa' @click='selectContinent') Africa
            li.c2: a(href='#asia' @click='selectContinent') Asia
            li.c3: a(href='#australia' @click='selectContinent') Australia
            li.c4: a(href='#europe' @click='selectContinent') Europe
            li.c5: a(href='#north-america' @click='selectContinent') North America
            li.c6: a(href='#south-america' @click='selectContinent') South America
      //- If select continent show countries with in.
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
        p #[strong Mis comunidades:] Comunidad Global{{this.selectedContinent?', '+this.selectedContinent+'.':'.'}}
      v-flex(xs12 sm6 d-flex v-if='showbtn')
        v-btn( nuxt to='/signup' color='success')
          strong Unete
</template>
<script>
import communityService from '~/plugins/community'

export default {
  name: 'selectCommunity',
  props: {
    showbtn: { type: Boolean, required: false, default: true }
  },
  data () {
    return {
      loading: false,
      disabled: true,
      selectedContinent: this.$store.state.community.name,
      countries: [],
      selectedCountry: ''
    }
  },
  mounted: () => {
    // CSSMap;
    window.$('#map-continents').CSSMap({
      'size': 540,
      'mapStyle': 'vintage',
      'tooltips': 'floating-top-center',
      'responsive': 'auto',
      'tapOnce': true
    })
    // END OF THE CSSMap;
  },
  methods: {
    selectContinent (continent) {
      console.log('selectContinent')
      console.log(continent)
      // this.loading = !this.loading
      // this.countries = await communityService.getAllByContinent(continent).then(res => res.map(country => country.name))
      // this.loading = !this.loading
      // this.disabled = false
      // this.$store.commit('updateCommunity', { name: this.selectedContinent })
    },
    search () {
      communityService.search().then(res => {
        const arr = res.map(country => country.name)
        console.log(arr)
      })
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
