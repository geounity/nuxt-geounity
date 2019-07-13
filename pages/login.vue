<template lang="pug">
  v-container
    v-layout(justify-center wrap)
      v-flex(xs9 sm6 lg4 xl3)
        form-login
      v-flex(xs12 sm6 lg4 xl3)
        firebaseui
</template>

<script>
import firebaseui from '~/components/firebaseui'
import formLogin from '~/components/forms/signin'

export default {
  name: 'login',
  components: { firebaseui, formLogin },
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
