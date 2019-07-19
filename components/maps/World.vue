<template lang="pug">
  .map-container(class="text-align-center")
    #world-map(:style='fontSize')
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
    fontSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'height:300px'
        default: return 'height:400px'
      }
    }
  },
  mounted () {
    this.drawMap()
  },
  methods: {
    drawMap () {
      let self = this
      $('#world-map').vectorMap({
        map: 'world_mill',
        backgroundColor: '#246d7b',
        onRegionClick (e, code) {
          self.$store.dispatch('FETCH_COUNTRY', code)
        }
      })
    }
  }
}
</script>

