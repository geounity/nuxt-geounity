<template lang='pug'>
  main
    //- v-img(src='/acuerdo.jpg' alt='Acuerdo')
    //- h1.title.dark.text-xs-center Mediación digital
    div(v-if="!logged")
      h3.heading.text-xs-center.block ¿A cuál comunidad perteneces?
      select-community
    div(v-else)
      h1 Bienvenido!

</template>

<script>
import firebase from '~/plugins/firebase'
import selectCommunity from '~/components/forms/selectCommunity'

export default {
  name: 'index',
  components: { selectCommunity },

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
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.commit('signIn')
      } else {
        this.$store.commit('signOut')
      }
    })
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

