<template lang="pug">
  v-toolbar( color="#8e44ad" fixed dark app )
    v-toolbar-title(v-text="title")
    v-spacer
    v-toolbar-items.hidden-sm-and-down
      v-btn( nuxt :to="item.to" exact :key="i" v-for="(item, i) in items" v-text="item.title" flat )
    v-toolbar-items
      v-btn( nuxt to="/signin" small flat) Login
      v-btn( nuxt to="/signup" small flat) <strong>Registrate</strong>
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
