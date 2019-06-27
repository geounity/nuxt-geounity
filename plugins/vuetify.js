import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import Vuetify, {
  VApp, // required
  VAlert,
  VAvatar,
  VBreadcrumbs,
  VBottomNav,
  VBtn,
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
    'community': 'fas fa-users',
    'chart': 'fas fa-chart-line',
    'debate': 'far fa-dot-circle',
    'aim': 'far fa-lightbulb',
    'github': 'fab fa-github',
    'facebook': 'fab fa-facebook',
    'instagram': 'fab fa-instagram'
  }
})
