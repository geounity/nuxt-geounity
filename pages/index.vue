<template lang='pug'>
  main
    h1 Bienvenidos
    select-community

</template>

<script>
import selectCommunity from '~/components/forms/selectCommunity'
import * as firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyAdV9qDKcKwad6PFTsarIJtFJ4RMAIlL40',
  authDomain: 'geounity.firebaseapp.com',
  databaseURL: 'https://geounity.firebaseio.com',
  projectId: 'geounity',
  storageBucket: 'geounity.appspot.com',
  messagingSenderId: '675273107835',
  appId: '1:675273107835:web:0ab98a3dc514cdf2'
}
firebase.initializeApp(firebaseConfig)
let email = 'me@sebastiancardoso.com'
let password = 'hola1234'
firebase.auth().createUserWithEmailAndPassword(email, password).catch(
  function (error) {
  // Handle Errors here.
    console.log('error: ', error)
  })
export default {
  name: 'index',
  components: { selectCommunity },

  data () {
    return {
    }
  },

  computed: {
  },

  methods: {
  }
}
</script>
