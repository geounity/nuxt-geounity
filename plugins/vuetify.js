import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import Vuetify, {
  VApp, // required
  VAlert,
  VAvatar,
  VBreadcrumbs,
  VBottomNav,
  VBtn,
  VCard,
  VIcon,
  VNavigationDrawer,
  VFooter,
  VToolbar
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAlert,
    VAvatar,
    VBreadcrumbs,
    VBottomNav,
    VBtn,
    VCard,
    VIcon,
    VNavigationDrawer,
    VFooter,
    VToolbar
  },
  directives: {
    Ripple
  },
  iconfont: 'fa',
  icons: {
    'aim': 'far fa-lightbulb',
    'chart': 'fas fa-chart-line',
    'community': 'fas fa-users',
    'debate': 'far fa-dot-circle',
    'facebook': 'fab fa-facebook',
    'google': 'fab fa-google',
    'instagram': 'fab fa-instagram',
    'share': 'fas fa-share-alt'
  }
})
