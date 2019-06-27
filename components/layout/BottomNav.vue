<template lang="pug">
  v-bottom-nav(
    :active.sync="bottomNav"
    :value="true"
    fixed
    dark
    app
  )
    v-btn(
      color="teal"
      flat
      value="home"
      nuxt
      to='/'
    )
      span Home
      v-icon home
    v-btn(
      color="teal"
      flat
      value="communities"
      nuxt
      to='/communities'
    )
      span Communities
      v-icon $vuetify.icons.community
    v-btn(
      color="teal"
      flat
      value="statics"
      nuxt
      to='/statics'
    )
      span Statics
      v-icon $vuetify.icons.chart
    v-btn(
      color="teal"
      flat
      value="debates"
      nuxt
      to='/debates'
    )
      span Debates
      v-icon $vuetify.icons.debate
    v-btn(
      color="teal"
      flat
      value="aims"
      nuxt
      to='/aims'
    )
      span Aims
      v-icon $vuetify.icons.aim
    
</template>

<script>
export default {
  name: 'bottomNav',
  data () {
    return {
      bottomNav: 'home'
    }
  }
}
</script>

