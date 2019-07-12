<template lang="pug">
  v-bottom-nav(
    :active.sync="bottomNav"
    :value="true"
    color="#fff"
    style="border-top:1px solid grey"
    fixed
    app
  )
    v-btn(
      color="teal"
      flat
      value="home"
      nuxt
      to='/'
      class="fix-minwidth"
    )
      span Home
      v-icon home
    v-btn(
      color="teal"
      flat
      value="communities"
      nuxt
      to='/communities'
      class="fix-minwidth"
    )
      span Communities
      v-icon $vuetify.icons.community
    v-btn(
      color="teal"
      flat
      value="statics"
      nuxt
      to='/statics'
      class="fix-minwidth"
    )
      span Statics
      v-icon $vuetify.icons.chart
    v-btn(
      color="teal"
      flat
      value="debates"
      nuxt
      to='/debates'
      class="fix-minwidth"
    )
      span Debates
      v-icon $vuetify.icons.debate
    v-btn(
      color="teal"
      flat
      value="aims"
      nuxt
      to='/aims'
      class="fix-minwidth"
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

<style scoped>
.fix-minwidth{
  min-width: 50px !important;
}
</style>
