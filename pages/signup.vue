<template lang="pug">
  v-layout(justify-center)
    v-flex(lg6)
      v-alert(value="true" color="info" class="my-3" dismissible)
        h3 Se uno de los pimeros usuarios en registrarse
      v-stepper(v-model="step")
        v-stepper-header
          v-stepper-step(:complete="step > 1" step="1" editable) Tu comunidad

          v-divider

          v-stepper-step(:complete="step > 2" step="2") Registra tu usuario

          v-divider

          v-stepper-step(:complete="step > 3" step="3") Información complementaria
        v-stepper-items(class="mt-2")
          v-stepper-content(step="1")
            v-layout( justify-center row wrap)
              v-flex( xs12 sm7 md5 )
                select-community(:showbtn="false", :showMap="false")
                v-btn(color="success" @click="step = 2" block) Continue        

          v-stepper-content(step="2")
            v-layout( justify-center wrap)
              v-flex( xs11 sm6 md5 class="my-2")
                form-new-user(@nextStep="step = 3")
              v-flex( xs11 sm6 md5 offset-md1)
                firebase-ui
          v-stepper-content(step="3")
            v-alert(type="success" value="signupWithE mail" class="mb-5") Hemos enviado un correo de confirmación a tu casilla de email.
            v-btn(nuxt to="/" color="primary" block) Continue    
</template>
<script>
  import selectCommunity from '~/components/forms/selectCommunity'
  import formNewUser from '~/components/forms/signup'
  import FirebaseUi from '~/components/firebaseui'

  export default {
    name: 'signup',
    components: { selectCommunity, formNewUser, FirebaseUi },
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
        console.log('Ponermas opciones como para seleccionar provincias')
      }
    }
  }
</script>