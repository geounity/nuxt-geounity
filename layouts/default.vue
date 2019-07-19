<template>
  <v-app>
    <gu-toolbar></gu-toolbar>
    <v-content>
      <v-alert :value="alert" type="warning">Version beta</v-alert>
      <nuxt />
    </v-content>
    <gu-footer></gu-footer>
    <gu-bottom-nav class="hidden-md-and-up"></gu-bottom-nav>
  </v-app>
</template>

<script>
  import { auth } from '~/plugins/firebase'
  import guToolbar from '~/components/layout/Toolbar.vue'
  import guBottomNav from '~/components/layout/BottomNav.vue'
  import guFooter from '~/components/layout/Footer.vue'
  export default {
    components: { guBottomNav, guToolbar, guFooter },
    data () {
      return {
        alert: false
      }
    },
    beforeMount () {
      const self = this
      auth.onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          console.log('USER LOGEADO')
          console.log(user)
          var username = user.displayName
          var email = user.email
          var emailVerified = user.emailVerified
          var photoURL = user.photoURL
          var phoneNumber = user.phoneNumber
          user.getIdToken().then(function (accessToken) {
            self.$store.dispatch('FETCH_AUTH_USER')
            self.$store.commit('SET_USER', {
              username,
              email,
              emailVerified,
              photoURL,
              accessToken,
              phoneNumber
            })
          })
        } else {
          console.log('NO LOGIN')
        }
      })
    }
  }
</script>
