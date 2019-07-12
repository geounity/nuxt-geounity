<template lang="pug">
  section
    h2.display-2 Datos del usuario
    p Nombre: {{name}}
    p Email: {{email}}
    p Url de la foto: {{photoUrl}}
    p Emial: {{emailVerified}}
    p Uid: {{uid}}
</template>

<script>

import firebase from '~/plugins/firebase'

var user = firebase.auth().currentUser
var name, email, photoUrl, uid, emailVerified

if (user != null) {
  name = user.displayName
  email = user.email
  photoUrl = user.photoURL
  emailVerified = user.emailVerified
  uid = user.uid
}

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log('Sign-in provider: ' + profile.providerId)
    console.log('  Provider-specific UID: ' + profile.uid)
    console.log('  Name: ' + profile.displayName)
    console.log('  Email: ' + profile.email)
    console.log('  Photo URL: ' + profile.photoURL)
  })
}

export default {
  data () {
    return {
      name,
      email,
      photoUrl,
      emailVerified,
      uid
    }
  }
}
</script>
