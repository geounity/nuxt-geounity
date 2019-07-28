<template lang='pug'>
  main
    gu-breadcrumbs(v-if="logged")
    v-layout(v-if="!logged" class="blue-grey darken-4" justify-center wrap)
      v-flex(xs12 class="text-xs-center")
        world-map
      v-flex(xs12 style="color:#fff")
        h1(v-text="communitySelected" :class="fontSize").font-weight-bold.text-xs-center
        ul.text-xs-center.pa-0.list_subheading
          li(v-if="geocommunity.length>2")
            h3.body-2 Total de habitantes
            span.title {{populationTotal}}
          li
            h3.body-2 Cantidad de {{geocommunity.length===1?'paises':geocommunity[geocommunity.length - 1].division_name}}
            span.title {{geocommunity.length===1?243:geocommunity[2].cant_states}}
        h3.text-xs-center.heading.my-1(v-if="geocommunity.length>1") Continente {{geocommunity[1].name}}
        h3.text-xs-center.heading.my-1(v-if="geocommunity.length>2") Pais {{geocommunity[2].country}}
        h3.text-xs-center.heading.my-1(v-else) Seleccione un país
        v-img(v-if="geocommunity.length>2" :src="geocommunity[2].flag" style="margin:0 auto" width="170px")
</template>

<script>
import { mapGetters } from 'vuex'

import guBreadcrumbs from '~/components/Breadcrumbs.vue'
import WorldMap from '~/components/maps/World.vue'

export default {
  name: 'index',
  components: { WorldMap, guBreadcrumbs },
  head: {
    title: 'Geounity',
    meta: [
      {
        hid: 'description', name: 'description', content: 'Estudio de comunidades. Moderación de debates. Objetivos en comun.'
      }
    ]
  },
  data () {
    return {
      communitySelected: 'Somos Comunidad Global Online',
      populationTotal: 'Calculando...'
    }
  },
  computed: {
    ...mapGetters([
      'geocommunity'
    ]),
    logged () {
      return this.$store.state.authId
    },
    fontSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'display-1'
        case 'sm': return 'display-2'
        default: return 'display-3'
      }
    }
  },
  mounted () {
    this.$store.dispatch('GET_POPULATION_TOTAL')
      .then((res) => {
        this.populationTotal = res.data.total
      })
  },
  watch: {
    geocommunity (newVal) {
      this.communitySelected = newVal[2].name
      this.populationTotal = newVal[2].population
    }
  }
}
</script>

<style lang="stylus" scoped>
.list_subheading {
  display: flex;
  justify-content center
  list-style:none;
  li {
    flex: auto;
    max-width 200px;
  }
}
</style>
