<template lang="pug">
  main
    h1 Bienvenidos
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

  computed: {
  },

  methods: {
  }
}
</script>
