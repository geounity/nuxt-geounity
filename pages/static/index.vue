<template lang="pug">
  div
    h3.title Statics
    div(v-for="(item, index) in statics" :key="index")
      h2.subheading
        nuxt-link(:to="`/static/${item.id}`") {{item.titulo}}
</template>

<script>
export default {
  data () {
    return {
      statics: [
        { id: 1, titulo: 'Titulo #1' },
        { id: 2, titulo: 'Titulo #2' },
        { id: 3, titulo: 'Titulo #3' },
        { id: 4, titulo: 'Titulo #4' }
      ]
    }
  }
}
</script>
