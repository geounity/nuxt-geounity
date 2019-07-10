<template lang="pug">
  v-stepper(v-model="step")
    v-stepper-header
      v-stepper-step(:complete="step > 1" step="1" editable) Registra tu usuario

      v-divider

      v-stepper-step(:complete="step > 2" step="2") Tu comunidad

      v-divider

      v-stepper-step(:complete="step > 3" step="3") Información complementaria

    v-stepper-items
      v-stepper-content(step="1")
        v-layout( justify-center row wrap)
          v-flex( xs12 sm7 md5 lg4 )
            select-community(:showbtn="false", :index="false")
            v-btn(color="success" @click="step = 2" block) Continue        

      v-stepper-content(step="2")
        v-alert(value="true" type="warning") Esta app esta en modo experimental. Si crea un usuario nuevo es bajo su propio riesgo.
        v-alert(value="true" type="info") Estamos trabajando para usted.
        v-layout( justify-center row wrap)
          v-flex( xs12 sm7 md5 lg4 class="my-3")
            form-new-user(@nextStep="step = 3")
          v-flex(xs5 class="mr-2")
            v-btn(color="white" block @click="authGoogle") con Google
            v-btn(color="info" block @click="authFacebook") con Facebook

      v-stepper-content(step="3")
        v-alert(type="success" value="signupWithEmail" class="mb-5") Hemos enviado un correo de confirmación a tu casilla de email.
        v-btn(nuxt to="/" color="primary" block) Continue
    
</template>

<script>
  import selectCommunity from '~/components/forms/selectCommunity'
  import userService from '~/plugins/user'
  import formNewUser from '~/components/forms/newUser'

  export default {
    name: 'signup',
    components: { selectCommunity, formNewUser },
    data () {
      return {
        errors: '',
        step: 1,
        signupWithEmail: true
      }
    },
    computed: {
      continents () {
        return this.$store.state.continents
      },
      countries () {
        return this.$store.state.countries
      },
      loading () {
        return this.$store.state.loading
      }
    },
    methods: {
      authGoogle () {
        userService.authWithGoogle()
          .then(() => {
            this.signupWithEmail = false
            this.step++
          })
      },
      authFacebook () {
        userService.authWithFacebook()
          .then(() => {
            this.signupWithEmail = false
            this.step++
          })
      }
    }
  }
</script>
