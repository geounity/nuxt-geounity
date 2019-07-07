<template lang='pug'>
  main
    #map-continents
      ul.continents
        li.c1: a(href='#africa') Africa
        li.c2: a(href='#asia') Asia
        li.c3: a(href='#australia') Australia
        li.c4: a(href='#europe') Europe
        li.c5: a(href='#north-america') North America
        li.c6: a(href='#south-america') South America
    v-img(src='/acuerdo.jpg' alt='Acuerdo')
      h1.title.dark.text-xs-center Mediación digital
    select-community

</template>

<script>
import selectCommunity from '~/components/forms/selectCommunity'

export default {
  name: 'index',
  components: { selectCommunity },

  data () {
    return {
    }
  },

  mounted: () => {
    // CSSMap;
    window.$('#map-continents').CSSMap({
      'size': 320,
      'tooltips': 'floating-top-center',
      'responsive': 'auto'
    })
    // END OF THE CSSMap;
  }
}
</script>

<style scoped>
main{
  border: 1px solid red;
}
.title{
  background-color: #444;
  color: #fff;
  padding: 1rem;
}
</style>

