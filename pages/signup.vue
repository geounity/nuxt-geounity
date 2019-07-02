<template lang="pug">
  v-stepper(v-model="e1")
    v-stepper-header
      v-stepper-step(:complete="e1 > 1" step="1") Registra tu usuario

      v-divider

      v-stepper-step(:complete="e1 > 2" step="2") Tu comunidad

      v-divider

      v-stepper-step(:complete="e1 > 3" step="3") Información complementaria

    v-stepper-items
      v-stepper-content(step="1")
        form(v-model="valid" lazy-validation)
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

      v-stepper-content(step="2")
        v-card(
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        )

        v-btn(color="primary" @click="e1 = 3") Continue
        
        v-btn(flat) Cancel

      v-stepper-content(step="3")
        v-card(
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        )

        v-btn(color="primary" @click="e1 = 1") Continue
        
        v-btn(flat) Cancel
    
</template>

<script>
  export default {
    name: 'signup',
    data () {
      return {
        e1: 0,
        errors: '',
        valid: false,
        form: {
          email: '',
          username: '',
          password: ''
        },
        userRules: [
          v => !!v || 'User is required',
          v => v.length <= 15 || 'User must be less than 15 characters',
          v => v.length >= 3 || 'User must be more than 3 characters'
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
      }
    },
    methods: {
      submit () {
        console.log('Formulario enviado')
      }
    }
  }
</script>