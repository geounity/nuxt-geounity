
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
          v-stepper-content(step="1" class="pa-0 text-xs-center")
            v-btn(v-if="geocommunity.length !== 1" @click="selectCountry" class="my-3") Volver a seleccionar un país
            h2.title.text-xs-center Seleccione una comunidad
            world-map(v-if="geocommunity.length === 1" @selectedCountry="handleSelectedCountry")
            v-select(
              v-else-if="geocommunity.length >= 3"
              v-model="selectedState"
              :items="states"
              style="max-width:400px; margin:0 auto"
              label='Seleccione su comunidad'
              @change="selectState"
              solo
            )
            //- template(v-else-if="geocommunity.length === 3")
            //-   argentina-map(v-if="country.code === 'AR'")
            //- template(v-else)
            //-   h2.title Otro mapa u en su defecto un input select
            v-btn(color="success" @click="step = 2" block) Continue
          v-stepper-content(step="2")
            v-layout( justify-center wrap)
              v-flex( xs11 sm6 md5 class="my-2")
                form-new-user(@nextStep="step = 3; signupWithEmail = true")
              v-flex( xs11 sm6 md5 offset-md1)
                firebase-ui(@nextStep="step = 3; signupWithEmail = false")
          v-stepper-content(step="3" class="pa-0")
            v-alert(type="success" :value="signupWithEmail" dismissible) Hemos enviado un correo de confirmación a tu casilla de email.
            complete-info-user
</template>
<script>
  import WorldMap from '~/components/maps/World.vue'
  // import ArgentinaMap from '~/components/maps/Argentina.vue'
  import formNewUser from '~/components/forms/signup.vue'
  import FirebaseUi from '~/components/firebaseui.vue'
  import CompleteInfoUser from '~/components/forms/completeInfoUser.vue'

  export default {
    name: 'signup',
    // components: { WorldMap, FirebaseUi, CompleteInfoUser },
    components: { CompleteInfoUser, WorldMap, formNewUser, FirebaseUi },
    data () {
      return {
        errors: '',
        step: 1,
        signupWithEmail: false,
        states: [],
        selectedState: ''
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
    methods: {
      handleSelectedCountry (code) {
        this.$store.dispatch('FETCH_STATES', code)
          .then((states) => {
            this.states = states.data.map((state) => {
              return state.state
            })
          })
      },
      selectCountry () {
        while (this.geocommunity.length > 1) {
          this.$store.commit('DELETE_LAST_GEOCOMMUNITY')
        }
      },
      selectState () {
        this.$store.commit('UPDATE_GEOCOMMUNITY', { name: this.selectedState, level: 4 })
      }
    },
    beforeMount () {
      if (this.geocommunity.length === 3) {
        this.$store.dispatch('FETCH_STATES', this.geocommunity[2].code)
          .then((states) => {
            this.states = states.data.map((state) => {
              return state.state
            })
          })
      }
    }
  }
</script>
