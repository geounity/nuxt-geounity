<template>
  <v-app>

    <gu-toolbar></gu-toolbar>
    <div>
      <v-alert value="true" type="warning" class="mt-5">Estamos en modo desarrollo</v-alert>
    </div>
    <gu-breadcrumbs></gu-breadcrumbs>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <gu-bottom-nav class="hidden-md-and-up"></gu-bottom-nav>

  </v-app>
</template>

<script>
  import GuToolbar from '~/components/layout/Toolbar.vue'
  import GuBottomNav from '~/components/layout/BottomNav.vue'
  import GuBreadcrumbs from '~/components/Breadcrumbs.vue'
  export default {
    components: { GuBottomNav, GuToolbar, GuBreadcrumbs },
    data () {
      return {
        miniVariant: false,
        right: true,
        rightDrawer: false
      }
    }
  }
</script>
