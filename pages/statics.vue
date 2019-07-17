<template lang="pug">
  v-container
    v-layout
      v-flex
        v-card( v-for="(s, i) in statics" :key="i")
          p {{ s }}
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
