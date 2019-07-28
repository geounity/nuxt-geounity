<template lang="pug">
  .map-container(class="text-align-center")
    #world-map(:style="height")
</template>

<script>

if (process.browser) {
  window.jQuery = require('jquery')
  var $ = window.jQuery
  require('jvectormap')
  require('~/static/map-world')
}
export default {
  name: 'worldmap',
  computed: {
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'height:200px'
        case 'md': return 'height:400px'
        default: return 'height:500px'
      }
    }
  },
  mounted () {
    this.drawMap()
  },
  methods: {
    drawMap () {
      let self = this
      $(document).ready(function () {
        $('#world-map').vectorMap({
          map: 'world_mill',
          backgroundColor: '#246d7b',
          onRegionClick (e, code) {
            self.$emit('selectedCountry', code)
            self.$store.dispatch('FETCH_COUNTRY', code)
          }
        })
      })
    }
  }
}
</script>

