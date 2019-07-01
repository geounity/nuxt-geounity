<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <h1>Comunidad Global</h1>
    </v-flex>
    <v-flex xs12 sm6 d-flex>
      <v-select
        :items="continents"
        label="Continent"
        v-model="selectedContinent"
        background-color="#eee"
        dense
        full-width
        @change="getByContinent"
      ></v-select>
    </v-flex>
    <v-flex xs12 sm6 d-flex>
      <v-select
        :items="countries"
        label="Country"
        :disabled="!countries"
        :loading="loading"
      ></v-select>
    </v-flex>
  </v-layout>
</template>

<script>
import countryService from '~/plugins/countries'

const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export default {
  name: 'index',

  data () {
    return {
      loading: false,
      continents,
      selectedContinent: '',
      countries: ''
    }
  },

  methods: {
    getByContinent () {
      this.loading = !this.loading
      countryService.getByContinent(this.selectedContinent).then(res => {
        this.countries = res.map(country => country.name)
      })
      this.loading = !this.loading
    },
    search () {
      countryService.search().then(res => {
        const arr = res.map(country => country.name)
        console.log(arr)
      })
    }
  }
}
</script>
