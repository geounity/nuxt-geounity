<template lang="pug">
  v-bottom-nav(
    :active.sync="bottomNav"
    :value="true"
    fixed
    color="transparent"
    app
  )
    v-btn(
      color="teal"
      flat
      value="home"
    )
      span Home
      v-icon home
    v-btn(
      color="teal"
      flat
      value="communities"
    )
      span Communities
      v-icon $vuetify.icons.community
    v-btn(
      color="teal"
      flat
      value="statics"
    )
      span Statics
      v-icon $vuetify.icons.chart
    v-btn(
      color="teal"
      flat
      value="debates"
    )
      span Debates
      v-icon $vuetify.icons.debate
    v-btn(
      color="teal"
      flat
      value="aims"
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

