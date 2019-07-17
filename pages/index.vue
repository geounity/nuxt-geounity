<template lang='pug'>
  main
    v-container(text-xs-center)
      gu-breadcrumbs(v-if="logged")
      v-layout(v-if="!logged" wrap)
        v-flex(xs12 md6)
          select-community
        v-flex(xs12 md6)
          h1.display-2.text-xs-center.mt-3 Somos Comunidad Global
          h2.title.text-xs-center Llamado a la Consciencia planetaria
          h3 Cantidad de habitantes: xxx
          h3 Cantidad de paises: xxx
          h3 Cantidad de idiomas: xxx
          h3 Cantidad de religiones: xxx
          v-layout(justify-center)
            v-flex(xs12 md4)
              h4 Polls
            v-flex(xs12 md4)        
              h4 Debates
            v-flex(xs12 md4)
              h4 Aims
      div(v-else)
        h1(class="text-xs-center my-5") Bienvenido!
        h3 Puede empezar con estas tareas:
        v-layout( justify-center )
          v-flex(xs12 md4)
            p Crear una nueva encuesta
            v-btn( nuxt to="/poll/new" color="primary") Crear encuesta
          v-flex(xs12 md4)
            p Abrir un nuevo debate
            v-btn( nuxt to="/debate/new" color="secondary") Crear debate
          v-flex(xs12 md4)
            p Participar en un objetivo en común
            v-btn( nuxt to="aim/new" color="info") Crear objetivo
</template>

<script>

import guBreadcrumbs from '~/components/Breadcrumbs.vue'
import selectCommunity from '~/components/forms/selectCommunity'

export default {
  name: 'index',
  components: { selectCommunity, guBreadcrumbs },
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
    logged () {
      return this.$store.state.authId
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>

