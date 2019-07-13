<template lang="pug">
  v-toolbar( color="#8e44ad" fixed dense dark app )
    v-toolbar-title
      a( nuxt to="/" class="font-weight-black") {{title}}
    v-spacer
    v-toolbar-items.hidden-sm-and-down
      v-btn( nuxt :to="item.to" exact :key="i" v-for="(item, i) in items" flat ) {{item.title}}
    v-spacer
    v-toolbar-items
      v-btn( v-if="!logged" nuxt to="/login" small flat class="font-weight-black") Login
      v-btn( v-if="!logged" nuxt to="/signup" color="success" small class="font-weight-black") Registrate
      v-btn( v-if="logged" nuxt to="/ego" small flat) Ego
      v-btn( v-if="logged" small flat @click="signOut") close
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  name: 'toolbar',
  data () {
    return {
      textSesion: 'Login',
      to: '/login',
      title: 'Geounity',
      items: [
        { icon: 'home', title: 'Home', to: '/' },
        { icon: '$vuetify.icons.chart', title: 'Statics', to: '/statics' },
        { icon: '$vuetify.icons.debate', title: 'Debates', to: '/debates' },
        { icon: '$vuetify.icons.aim', title: 'Aims', to: '/aims' },
        { icon: '$vuetify.icons.community', title: 'Communities', to: '/communities' }
      ]
    }
  },
  computed: {
    logged () {
      return this.$store.state.user.logged
    }
  },
  beforeMount () {
    const user = firebase.auth().currentUser
    if (user) {
      let payload = {
        logged: true,
        username: user.displayName,
        email: user.email,
        verified: user.emailVerified
      }
      this.$store.commit('setUser', payload)
    } else {
      this.$store.commit('signOut')
    }
  },
  methods: {
    signOut () {
      firebase.auth().signOut()
      this.$store.commit('signOut')
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: white
}
</style>

