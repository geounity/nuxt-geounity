<template lang="pug">
  v-card
    v-card-title {{static.title}}
    v-card-text {{static.description}}
    v-card-text
      chart
    v-card-actions
      v-btn(color="success") Algunos botones
      v-btn(color="info") {{static.author}}
      v-btn(color="warning") Otro mas
</template>
<script>
import Chart from '~/components/Chart.vue'
export default {
  name: 'StaticCard',
  props: {
    static: Object
  },
  components: { Chart }
}
</script>
