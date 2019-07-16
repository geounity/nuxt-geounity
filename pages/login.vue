<template lang="pug">
  v-container
    v-layout(justify-center wrap)
      v-flex(xs9 sm6 lg4 xl3)
        form-login
      v-flex(xs12 sm6 lg4 xl3)
        no-ssr
          firebase-ui
</template>

<script>
import FirebaseUi from '~/components/firebaseui'
import FormLogin from '~/components/forms/signin'

export default {
  name: 'login',
  components: { FirebaseUi, FormLogin },
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
