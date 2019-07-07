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
        select-community(:showbtn="false")
        v-btn(color="success" @click="step = 2" block) Continue        

      v-stepper-content(step="2")
        v-form(v-model="value" ref="form" lazy-validation)
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
          v-checkbox(
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Acepto los Terminos y Condiciones"
            required
          )
 
        v-btn(:disabled="!value" color="success" block @click="validate") Continue        
        v-btn(color="transparent" block @click="authGoogle") con Google
        v-btn(color="info" block @click="authFacebook") con Facebook
        v-btn(flat) Cancel

      v-stepper-content(step="3")
        

        v-btn(color="primary" @click="saveData") Continue
        
        v-btn(flat) Cancel
    
</template>

<script>
  import selectCommunity from '~/components/forms/selectCommunity'
  import userService from '~/plugins/user'

  export default {
    name: 'signup',
    components: { selectCommunity },
    data () {
      return {
        errors: '',
        value: true,
        checkbox: false,
        step: 1,
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
      validate () {
        console.log('Formulario enviado')
        if (this.$refs.form.validate()) {
          console.log('Formulario valido')
          userService.createWithEmail(this.form.email, this.form.password, this.form.username)
          this.step++
        } else {
          console.log('Formulario INVALIDO!')
        }
      },
      authGoogle () {
        userService.authWithGoogle()
          .then(() => this.step++)
      },
      authFacebook () {
        userService.authWithFacebook()
          .then(() => this.step++)
      }
    }
  }
</script>
