<template lang="pug">
  v-form
    h3.title.text-xs-center.mb-3 En que lugar del mundo estas?
    v-layout(column justify-center align-center)
      v-flex(xs12)
        h2.caption.text-xs-center.bg-color NIVEL 1
        h1.headline.mb-4 Comunidad Global
      v-flex(xs12 sm6)
        h2.caption.text-xs-center.bg-color NIVEL 2
        v-select(
          :items="continents"
          label="Continent"
          v-model="selectedContinent"
          full-width
        )
      //- If select continent show countries with in.
      v-flex(xs12 sm6)
        h2.caption.text-xs-center.bg-color NIVEL 3
        v-select(
          :items="countries"
          label="Country"
          v-model="selectedCountry"
          :disabled="disabled"
          :loading="loading"
          full-width
        )
      v-flex(xs12 sm6)
        p #[strong Mis comunidades:] Comunidad Global{{this.selectedContinent?', '+this.selectedContinent+'.':'.'}}
      v-flex(xs12 sm6 d-flex v-if="showbtn")
        v-btn( nuxt to="/signup" color="success")
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
      continents: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Artico y Antartida'],
      selectedContinent: this.$store.state.community.name,
      countries: [],
      selectedCountry: ''
    }
  },

  watch: {
    async selectedContinent (continent) {
      this.loading = !this.loading
      this.countries = await communityService.getAllByContinent(continent).then(res => res.map(country => country.name))
      this.loading = !this.loading
      this.disabled = false
      this.$store.commit('updateCommunity', { name: this.selectedContinent })
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

<style>
.bg-color{
  background-color: #209cee;
  color: white;
  display: block;
}
</style>
