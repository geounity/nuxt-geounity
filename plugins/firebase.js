import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
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

export const authProviders = {
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  Facebook: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  Twitter: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  Github: firebase.auth.GithubAuthProvider.PROVIDER_ID
}

export const auth = firebase.auth()
export const db = firebase.database()
export const store = firebase.firestore()
