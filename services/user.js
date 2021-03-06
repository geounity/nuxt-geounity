import { auth } from '~/plugins/firebase'

const userService = {}

userService.createWithEmail = (email, password, username) => {
  return auth.createUserWithEmailAndPassword(email, password)
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
      auth.signOut()
    })
    .catch(e => {
      console.error(e)
    })
}
userService.updatePassword = (user, newPassword) => {
  user.updatePassword(newPassword)
    .then(() => {
      console.log('Contraseña actualizada!')
    })
    .catch((error) => {
      console.log('Error: ')
      console.log(error)
    })
}
userService.sendPasswordResetEmail = (emailAddress) => {
  return auth.sendPasswordResetEmail(emailAddress)
    .then(() => {
      console.log('Se ha enviado un email para recuperar la contraseña')
    })
    .catch((error) => {
      console.log('Error: ')
      console.log(error)
    })
}
// userService.authWithGoogle = () => {
//   const provider = new firebase.auth.GoogleAuthProvider()
//   // El metodo de redirect se prefiere en los dispositivos moviles
//   return firebase.auth().signInWithPopup(provider)
//     .then((res) => {
//       // var token = res.credential.accessToken
//       // var user = res.user
//       console.log('Respuesta: ')
//       console.log(res)
//     })
//     .catch(function (error) {
//       // Handle Errors here.
//       var errorCode = error.code
//       var errorMessage = error.messagnupge
//       // The email of the user's account used.
//       var email = error.email
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential
//       console.log(errorCode, '-', errorMessage, '-', email, '-', credential)
//     })
// }
// userService.authWithFacebook = () => {
//   const provider = new firebase.auth.FacebookAuthProvider()
//   firebase.auth().signInWithPopup(provider)
//     .then((res) => {
//       console.log('RESPUESTA: ', res)
//       return true
//     })
//     .catch(function (error) {
//       // Handle Errors here.
//       var errorCode = error.code
//       var errorMessage = error.message
//       // The email of the user's account used.
//       var email = error.email
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential
//       console.log(errorCode, '-', errorMessage, '-', email, '-', credential)
//       return false
//     })
// }
export default userService
