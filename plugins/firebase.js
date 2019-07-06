import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyAdV9qDKcKwad6PFTsarIJtFJ4RMAIlL40',
    authDomain: 'geounity.firebaseapp.com',
    databaseURL: 'https://geounity.firebaseio.com',
    projectId: 'geounity',
    storageBucket: 'geounity.appspot.com',
    messagingSenderId: '675273107835',
    appId: '1:675273107835:web:7c2f7e1f2f6ab909'
  }
  firebase.initializeApp(config)
}

export default firebase
