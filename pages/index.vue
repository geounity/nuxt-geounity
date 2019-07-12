<template lang='pug'>
  main
    div(v-if="!logged")
      h3.heading.text-xs-center.block ¿A cuál comunidad perteneces?
      select-community
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
.heading{
  background-color: #444;
  color: #fff;
  padding: 1rem;
}
</style>

