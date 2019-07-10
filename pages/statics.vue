<template lang="pug">
  empty-page(page="encuestas").mt-3
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
