<template>
  <v-app>
    <gu-toolbar></gu-toolbar>
    <v-content>
      <v-alert :value="alert" type="warning">Version beta</v-alert>
      <gu-breadcrumbs v-if="logged"></gu-breadcrumbs>
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
  import guBreadcrumbs from '~/components/Breadcrumbs.vue'
  import guFooter from '~/components/layout/Footer'
  export default {
    components: { guBottomNav, guToolbar, guBreadcrumbs, guFooter },
    data () {
      return {
        alert: false
      }
    },
    computed: {
      logged () { return this.$store.state.authId }
    },
    beforeCreate () {
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
          var uid = user.uid
          var phoneNumber = user.phoneNumber
          var providerData = user.providerData
          user.getIdToken().then(function (accessToken) {
            self.$store.dispatch('FETCH_AUTH_USER')
            self.$store.commit('SET_USER', {
              username,
              email,
              emailVerified,
              photoURL,
              uid,
              accessToken,
              phoneNumber,
              providerData
            })
          })
        } else {
          console.log('NO LOGIN')
        }
      })
    }
  }
</script>
