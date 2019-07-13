<template lang="pug">
  v-layout(justify-center)
    v-flex(lg5)
      v-stepper(v-model="step")
        v-alert(value="true" color="info" dismissible)
          h3 Se uno de los pimeros usuarios
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
            v-layout( justify-center column row wrap)
              v-flex( xs11 sm6 md4 lg3 class="my-2")
                form-new-user(@nextStep="step = 3")
              v-flex(class="text-xs-center")
                span ------------------------------ o ------------------------------
              firebaseui
          v-stepper-content(step="3")
            v-alert(type="success" value="signupWithEmail" class="mb-5") Hemos enviado un correo de confirmación a tu casilla de email.
            v-btn(nuxt to="/" color="primary" block) Continue    
</template>
<script>
  import selectCommunity from '~/components/forms/selectCommunity'
  import formNewUser from '~/components/forms/signup'
  import firebaseui from '~/components/firebaseui'

  export default {
    name: 'signup',
    components: { selectCommunity, formNewUser, firebaseui },
    data () {
      return {
        errors: '',
        step: 1,
        signupWithEmail: true
      }
    },
    computed: {
      geocommunity () {
        return this.$store.state.geocommunity
      },
      loading () {
        return this.$store.state.loading
      }
    },
    beforeMount () {
      if (this.geocommunity.length > 2) {
        this.step++
      }
    }
  }
</script>