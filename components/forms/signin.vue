<template lang="pug">
  v-form(v-model="value" ref="form" lazy-validation class="my-1")
    h2(heading class="text-xs-center") Iniciar sesión
    v-text-field(
      v-model="formLogin.email"  
      :rules="emailRules"
      label="Correo electronico"
      type="email"
      name="email"
      solo
      required
    )
    v-text-field(
      v-model="formLogin.password"
      :rules="passRules"
      label="Contraseña"
      placeholder="insert password"
      name="password"
      type="password"
      solo
      required
    )
    v-btn(:disabled="!value" color="success" block @click="loginHandlerSubmit" @keyup.enter="loginHandlerSubmit") Iniciar sesión
</template>

<script>
export default {
  data () {
    return {
      value: true,
      formLogin: {
        email: '',
        password: ''
      },
      checkbox: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passRules: [
        v => !!v || 'Password is required',
        v => v.length <= 256 || 'Password must be less than 256 characters',
        v => v.length >= 6 || 'Password must be more than 6 characters'
      ]
    }
  },
  methods: {
    loginHandlerSubmit () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('SIGN_IN', {
          email: this.formLogin.email,
          password: this.formLogin.password
        })
          .then(res => {
            this.$store.dispatch('FETCH_AUTH_USER')
            console.log('RESPUESTA')
            console.log(res)
          })
          .catch(function (error) {
            var errorCode = error.code
            var errorMessage = error.message
            console.error(errorCode, errorMessage)
          })
      } else {
        console.log('Formulario Invalido!')
      }
    }
  }
}
</script>

