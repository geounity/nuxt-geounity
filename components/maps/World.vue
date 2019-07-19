<template lang="pug">
  .map-container(class="text-align-center")
    #world-map(style="height:400px")
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

