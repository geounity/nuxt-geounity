import fb from '~/plugins/firebase'

const userService = {}

userService.createWithEmail = (email, password, username) => {
  fb.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      res.user.updateProfile({
        displayName: username
      })
      const conf = {
        url: 'http://localhost:3000'
      }
      res.user.sendEmailVerification(conf).catch(e => {
        console.error(e)
      })
      fb.auth().signOut()
    })
    .catch(e => {
      console.error(e)
    })
}
userService.authWithGoogle = () => {
  const provider = new fb.auth.GoogleAuthProvider()
  fb.auth().signInWithPopup(provider)
    .then((res) => {
      var token = res.credential.accessToken
      var user = res.user
      console.log('Token: ', token)
      console.log('user: ', user)
      return true
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // The email of the user's account used.
      var email = error.email
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential
      console.log(errorCode, '-', errorMessage, '-', email, '-', credential)
      return false
    })
}
userService.authWithFacebook = () => {
  const provider = new fb.auth.FacebookAuthProvider()
  fb.auth().signInWithPopup(provider)
    .then((res) => {
      console.log('RESPUESTA: ', res)
      return true
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // The email of the user's account used.
      var email = error.email
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential
      console.log(errorCode, '-', errorMessage, '-', email, '-', credential)
      return false
    })
}

export default userService
