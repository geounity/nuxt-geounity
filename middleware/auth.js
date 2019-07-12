import firebase from '~/plugins/firebase'
export default function ({ store }) {
  // If the user is not authenticated
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('Usuario logeado')
      console.log('User')
      console.log('-------------------')
      console.log(user)
      store.commit('signIn', user)
    } else {
      console.log('Usuario NO logeado')
      store.commit('signOut')
    }
  })
}
