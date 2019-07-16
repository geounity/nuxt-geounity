<template lang='pug'>
  main
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
      v-card
        v-card-title
          p Puede empezar con estas tareas:
          ul
            li Crear una nueva encuesta
            li Abrir un nuevo debate
            li Participar en un objetivo en común
            li Mirar información de otras comunidades
            li Actualizar mi perfil de usuario

</template>

<script>

import selectCommunity from '~/components/forms/selectCommunity'

export default {
  name: 'index',
  components: { selectCommunity },
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

