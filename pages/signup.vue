<template lang="pug">
  v-layout(justify-center)
    v-flex(lg10)
      v-alert(value="true" color="info" class="my-3" dismissible)
        h3 Se uno de los pimeros usuarios en registrarse
      v-stepper(v-model="step" alt-labels)
        v-stepper-header
          v-stepper-step(:complete="step > 1" step="1" editable color="#246d7b") Tu comunidad
          v-divider
          v-stepper-step(:complete="step > 2" step="2") Registra tu usuario
          v-divider
          v-stepper-step(:complete="step > 3" step="3") Información complementaria
        v-stepper-items(class="mt-2")
          v-stepper-content(step="3" class="pa-0")
            h2.title Seleccione una comunidad
            world-map(v-if="geocommunity.length === 1")
            //- template(v-else-if="geocommunity.length === 3")
            //-   argentina-map(v-if="country.code === 'AR'")
            //- template(v-else)
            //-   h2.title Otro mapa u en su defecto un input select
            v-btn(color="success" @click="step = 2" block) Continue         
          v-stepper-content(step="2")
            v-layout( justify-center wrap)
              v-flex( xs11 sm6 md5 class="my-2")
                form-new-user(@nextStep="step = 3")
              v-flex( xs11 sm6 md5 offset-md1)
                firebase-ui
          v-stepper-content(step="1" class="pa-0")
            v-alert(type="success" value="signupWithEmail" dismissible) Hemos enviado un correo de confirmación a tu casilla de email.
            complete-info-user
</template>
<script>
  import WorldMap from '~/components/maps/World.vue'
  import ArgentinaMap from '~/components/maps/Argentina.vue'
  import formNewUser from '~/components/forms/signup.vue'
  import FirebaseUi from '~/components/firebaseui.vue'
  import CompleteInfoUser from '~/components/completeInfoUser.vue'

  export default {
    name: 'signup',
    components: { WorldMap, ArgentinaMap, formNewUser, FirebaseUi, CompleteInfoUser },
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
      },
      country () {
        return this.$store.state.country
      }
    },
    beforeMount () {
      if (this.geocommunity.length > 2) {
        console.log('Ponermas opciones como para seleccionar provincias')
      }
    }
  }
</script>
