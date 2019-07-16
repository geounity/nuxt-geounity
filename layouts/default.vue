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
    asyncData ({ store }) {
      let user = auth.currentUser
      if (user) {
        console.log('USER LOGEADO')
        console.log(user)
        store.dispatch('FETCH_AUTH_USER')
      } else {
        console.log('NO LOGIN')
      }
    },
    data () {
      return {
        alert: false
      }
    },
    computed: {
      logged () { return this.$store.state.authId }
    },
    beforeCreate () {
      // if (this.$store.state.authId) {
      //   this.$store.dispatch('FETCH_USER', { id: this.$store.state.authId })
      // }
    }
  }
</script>
