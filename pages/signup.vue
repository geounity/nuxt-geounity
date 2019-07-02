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
        v-form
          h3.title En que lugar del mundo estas?
          v-select(
            :items="continents"
            label="Continent"
            v-model="selectedContinent"
            background-color="#eee"
            dense
            full-width
            @change="getByContinent"
          )
          v-select(
            :items="countries"
            label="Country"
            :disabled="countries.length === 0"
            :loading="loading"
          )

      v-stepper-content(step="2")
        v-form(v-model="valid" ref="form")
          v-text-field(
            v-model="form.email"  
            :rules="emailRules"
            label="Correo electronico"
            placeholder="e-mail"
            type="email"
            name="email"
            required
          )
          v-text-field(
            v-model="form.username"
            :rules="userRules"
            :counter="15"
            label="Nombre de usuario"
            placeholder="username"
            name="username"
            required
          )
          v-text-field(
            v-model="form.password"
            label="Contraseña"
            placeholder="insert password"
            name="password"
            type="password"
          )
        v-btn(:disabled="!valid" color="success" @click="validate") Continue        
        v-btn(flat) Cancel

      v-stepper-content(step="3")
        v-card(
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        )

        v-btn(color="primary" @click="step = 1") Continue
        
        v-btn(flat) Cancel
    
</template>

<script>
  import countryService from '~/plugins/countries'
  export default {
    name: 'signup',
    data () {
      return {
        step: 1,
        errors: '',
        valid: false,
        form: {
          email: '',
          username: '',
          password: ''
        },
        userRules: [
          v => !!v || 'User is required',
          v => /^[0-9a-zA-Z]+$/.test(v) || 'User should be aphanumeric',
          v => v.length <= 15 || 'User must be less than 15 characters',
          v => v.length >= 3 || 'User must be more than 3 characters'
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
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
      getByContinent () {
        this.loading = !this.loading
        countryService.getByContinent(this.selectedContinent).then(res => {
          this.countries = res.map(country => country.name)
        })
        this.loading = !this.loading
      },
      validate () {
        console.log('Formulario enviado')
        if (this.$refs.form.validate()) {
          this.valid = !this.valid
          this.step++
        } else {
          console.log('Formulario INVALIDO!')
        }
      }
    }
  }
</script>