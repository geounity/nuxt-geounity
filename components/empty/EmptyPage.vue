<template lang="pug">
  .empty_state
    h3 No hay {{page}} en esta comunidad
    template(v-if="!logged")
      p Para crear una {{page}} registrate
      v-btn( nuxt to="/signup" color="success") Registrarte
    template(v-else)
      p Se el primero en crear una encuesta para tu comunidad
      v-btn( nuxt to="/poll/new" color="primary" ) Crear encuesta
</template>

<script>
export default {
  name: 'emptyPage',
  props: ['page'],
  data () {
    return {
    }
  },
  computed: {
    logged () {
      return this.$store.state.authId
    }
  }
}
</script>


<style lang="stylus">
  body,html{
    height: 100% !important;
  }

  *{
    font-family: 'Lato';
  }

  .empty_state{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h3{
      margin: 8px 0px;
      text-align: center;
      font-weight: normal;
    }
    p{
      font-size: 14px;
      margin: 0px;
      color: #999;
      text-align: center;
    }
  }
</style>
