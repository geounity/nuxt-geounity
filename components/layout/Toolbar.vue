<template lang="pug">
  v-toolbar( color="#8e44ad" fixed dark app )
    v-toolbar-title(v-text="title")
    v-spacer
    v-toolbar-items.hidden-sm-and-down
      v-btn( nuxt :to="item.to" exact :key="i" v-for="(item, i) in items" flat ) {{item.title}}
    v-toolbar-items(v-if="!logged")
      v-btn( nuxt to="/signin" small flat) Login
      v-btn( nuxt to="/signup" small flat)
        strong Registrate
    v-toolbar-items(v-if="logged")
      v-btn(@click="signOut") Cerrar sesión
</template>

<script>
import userService from '~/plugins/user'
export default {
  name: 'toolbar',
  data () {
    return {
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
  beforeMount () {
    const isAuth = userService.isAuth()
    if (isAuth) {
      this.$store.commit('signIn')
      console.log('signIn')
    } else {
      this.$store.commit('signOut')
      console.log('signOut')
    }
  },
  computed: {
    logged () {
      return this.$store.state.user.logged
    }
  },
  methods: {
    signOut () {
      this.$store.commit('signOut')
    }
  }
}
</script>
