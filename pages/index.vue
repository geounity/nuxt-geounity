<template lang='pug'>
  main
    //- v-img(src='/acuerdo.jpg' alt='Acuerdo')
    //- h1.title.dark.text-xs-center Mediación digital
    h3.heading.text-xs-center.block ¿A cuál comunidad perteneces?
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
  }
}
</script>

<style scoped>
main{
  border: 1px solid red;
}
.heading{
  background-color: #444;
  color: #fff;
  padding: 1rem;
}
</style>

