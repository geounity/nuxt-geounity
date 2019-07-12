<template lang="pug">
  v-container
    v-layout(justify-center)
      v-flex
        v-form(v-model="value" ref="form" lazy-validation class="my-1")
          h2(heading class="text-xs-center") Iniciar sesión
          v-text-field(
            v-model="form.email"  
            :rules="emailRules"
            label="Correo electronico"
            type="email"
            name="email"
            solo
            required
          )
          v-text-field(
            v-model="form.password"
            :rules="passRules"
            label="Contraseña"
            placeholder="insert password"
            name="password"
            type="password"
            solo
            required
          )
          v-btn(:disabled="!value" color="success" block @click="validate" @keyup.enter="validate") Iniciar sesión
        hr
        firebaseui
</template>

<script>
import firebase from '~/plugins/firebase'
import firebaseui from '~/components/firebaseui'

export default {
  name: 'login',
  components: { firebaseui },
  data () {
    return {
      value: true,
      checkbox: false,
      form: {
        email: '',
        password: ''
      },
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
    validate () {
      if (this.$refs.form.validate()) {
        firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(res => {
            this.$store.commit('signIn', res.user)
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
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
