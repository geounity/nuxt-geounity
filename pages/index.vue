<template lang='pug'>
  main
    gu-breadcrumbs(v-if="logged")
    v-layout(v-if="!logged" class="blue-grey darken-4" justify-center wrap)
      v-flex(xs12 md5 style="color:#fff")
        h1(:class="fontSize").font-weight-bold.mt-1.text-xs-center Somos Comunidad Global Online        
        ul.text-xs-center.pa-0.mb-3(style="list-style:none")
          li
            h3.heading Cantidad de habitantes
            span 7,718,325,301
          li
            h3.heading Cantidad de paises
            span 194
        h3.text-xs-center.heading.my-1(v-if="geocommunity.length>1") Continente {{geocommunity[1].name}}
        h3.text-xs-center.heading.my-1(v-if="geocommunity.length>2") Pais {{geocommunity[2].name}}
        h3.text-xs-center.heading.my-1(v-else) Seleccione un país
        v-img(:src="geocommunity[geocommunity.length-1].flag" style="margin:0 auto" width="170px")
      v-flex(xs12 md7 class="text-xs-center mt-3")
        world-map
        h6.caption(style="background-color:#fff; margin:0 auto; width:200px; position:relative; bottom:1.5rem") Puede seleccionar un país del mapa
    v-container( v-if="geocommunity.length>2" text-xs-center )
      v-layout(justify-center)
        v-flex(xs12)
          h2.display-2 Comunidad {{geocommunity[2].name}}
          p Mostrar información relacionada con {{geocommunity[2].name}}
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
  }
}
</script>
