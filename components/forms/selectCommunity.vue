<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12)
      h1 Comunidad Global
    v-flex(xs12 sm6 d-flex)
      v-select(
        :items="continents"
        label="Continent"
        v-model="selectedContinent"
        background-color="#eee"
        dense
        full-width
      )
    //- If select continent show countries with in.
    v-flex(xs12 sm6 d-flex)
      v-select(
        :items="countries"
        label="Country"
        v-model="selectedCountry"
        :disabled="disabled"
        :loading="loading"
      )
    v-flex(xs12 sm6 d-flex)
      v-btn( nuxt to="/signup?community=1" color="success")
        strong Unete
</template>

<script>
import communityService from '~/plugins/community'

export default {
  data () {
    return {
      loading: false,
      disabled: true,
      continents: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
      selectedContinent: '',
      countries: [],
      selectedCountry: ''
    }
  },

  watch: {
    async selectedContinent (continent) {
      this.loading = !this.loading
      let nameCountries = ''
      await communityService.getAllByContinent(continent).then(res => {
        nameCountries = res.map(country => country.name)
      })
      this.loading = !this.loading
      this.disabled = false
      this.countries = nameCountries
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
