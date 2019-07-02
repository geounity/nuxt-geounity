<template lang="pug">
  div
    empty-page(page="encuestas").mt-3
    gu-static-card(
      v-for="s in statics"
      :key="s.id"
      :static="s"
    )
</template>

<script>

import GuStaticCard from '~/components/cards/StaticCard.vue'
import EmptyPage from '~/components/empty/EmptyPage.vue'

export default {
  name: 'staticPage',
  components: { GuStaticCard, EmptyPage },
  data () {
    return {
    }
  }
}
</script>
