<template lang='pug'>
  main
    v-layout(v-if="!logged" wrap)
      v-flex(xs12).full-width.text-xs-center
        h1.display-1.mt-2 Somos Comunidad Global
      v-flex(xs12 md6)
        select-community
      v-flex(xs12 md6)
        h1 Llamado a la Consciencia planetaria
        h3 Cantidad de habitantes: xxx
        ul
          li Polls
          li Debates
          li Aims
          li Points of view
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
    mmeta: [
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
      return this.$store.state.user.logged
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>

