<template>
  <v-app>

    <gu-toolbar></gu-toolbar>
    
    <v-content>
      <v-alert :value="alert" type="warning">Estamos en modo desarrollo</v-alert>
      <gu-breadcrumbs v-if="logged"></gu-breadcrumbs>
      
      <nuxt />
      
      <gu-footer></gu-footer>
    </v-content>

    <gu-bottom-nav class="hidden-md-and-up"></gu-bottom-nav>

  </v-app>
</template>

<script>
  import guToolbar from '~/components/layout/Toolbar.vue'
  import guBottomNav from '~/components/layout/BottomNav.vue'
  import guBreadcrumbs from '~/components/Breadcrumbs.vue'
  import guFooter from '~/components/layout/Footer'
  export default {
    components: { guBottomNav, guToolbar, guBreadcrumbs, guFooter },
    data () {
      return {
        logged: false,
        alert: false,
        miniVariant: false,
        right: true,
        rightDrawer: false
      }
    }
  }
</script>
