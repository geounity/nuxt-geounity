<template lang="pug">
  .map-container(class="text-align-center")
    #argentina-map(style="height:600px")
</template>

<script>

if (process.browser) {
  window.jQuery = require('jquery')
  var $ = window.jQuery
  require('jvectormap')
  require('~/static/map-argentina')
}
export default {
  name: 'worldmap',
  mounted () {
    this.drawMap()
  },
  methods: {
    drawMap () {
      // let self = this
      $(document).ready(function () {
        $('#argentina-map').vectorMap({
          map: 'ar_mill',
          backgroundColor: '#246d7b',
          onRegionClick (e, code) {
            // self.$store.dispatch('FETCH_COUNTRY', code)
            console.log('codigo de la provincia')
            console.log(code)
          }
        })
      })
    }
  }
}
</script>

