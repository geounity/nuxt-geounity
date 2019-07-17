<template lang="pug">
  v-breadcrumbs(:items="items" divider="<" small light)
</template>

<script>
export default {
  name: 'breadcrumbs',
  data () {
    return {
    }
  },
  computed: {
    items () {
      var items = []
      this.$store.state.geocommunity.map((i) => {
        items.push({
          text: i.name,
          disabled: false,
          href: '/'
        })
      })
      return items
    }
  }
}
</script>
