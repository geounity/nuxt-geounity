<template lang="pug">
  empty-page(page="encuestas").mt-3
</template>

<script>

import { mapGetters } from 'vuex'

import GuStaticCard from '~/components/cards/StaticCard.vue'
import EmptyPage from '~/components/empty/EmptyPage.vue'

export default {
  name: 'staticPage',
  components: { GuStaticCard, EmptyPage },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'statics'
    ])
  }
}
</script>
