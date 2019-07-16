<template lang="pug">
  v-toolbar( color="#8e44ad" dense dark app )
    v-toolbar-title
      a( nuxt to="/" class="font-weight-black") {{title}}
    v-spacer
    v-toolbar-items.hidden-sm-and-down
      v-btn( nuxt :to="item.to" exact :key="i" v-for="(item, i) in items" flat ) {{item.title}}
    v-spacer
    v-toolbar-items
      v-btn( v-if="!logged" nuxt to="/login" small flat class="font-weight-black") Login
      v-btn( v-if="!logged" nuxt to="/signup" color="success" small class="font-weight-black") Registrate
      v-menu( v-if="logged" left bottom )
        template( v-slot:activator="{ on }")
          v-btn( icon v-on="on" )
            v-icon mdi-dots-vertical
        v-list
          v-list-item(@click="() => {}")
            v-list-item-title( nuxt to="/ego" small flat) Ego
            v-list-item-title( small flat @click="signOut") Cerrar sesión
</template>

<script>
import { auth } from '~/plugins/firebase'
export default {
  name: 'toolbar',
  data () {
    return {
      to: '/login',
      title: 'Geounity',
      items: [
        { icon: '$vuetify.icons.chart', title: 'Statics', to: '/statics' },
        { icon: '$vuetify.icons.debate', title: 'Debates', to: '/debates' },
        { icon: '$vuetify.icons.aim', title: 'Aims', to: '/aims' },
        { icon: '$vuetify.icons.community', title: 'Communities', to: '/communities' }
      ]
    }
  },
  computed: {
    logged () { return this.$store.state.authId }
  },
  methods: {
    signOut () {
      auth.signOut().then(() => {
        this.$store.commit('SIGN_OUT')
      }).catch(e => {
        console.log('No se puedo cerrar la secion. Error: ')
        console.log(e)
      })
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

