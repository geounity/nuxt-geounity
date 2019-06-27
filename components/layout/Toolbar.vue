<template lang="pug">
  v-toolbar( fixed app )
    v-toolbar-title(v-text="title")
    v-spacer
    v-toolbar-items.hidden-sm-and-down
      v-btn( flat  nuxt :to="item.to" :key="i" v-for="(item, i) in items" exact v-text="item.title" )
    v-toolbar-items
      v-btn( nuxt to="/signin" color="success" small flat) Login
      v-btn( nuxt to="/signup" color="success" small) Registrarse
</template>

<script>
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
  }
}
</script>
