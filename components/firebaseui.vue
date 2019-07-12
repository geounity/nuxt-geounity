<template>
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase'
  import firebaseui from 'firebaseui'
  
  var uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    tosUrl: 'politics',
    privacyPolicyUrl: function () {
      window.location.assign('privacy')
    }
  }
  var ui = new firebaseui.auth.AuthUI(firebase.auth())
  
  export default {
    name: 'userLogin',
    data () {
      return {
      }
    },
    mounted () {
      ui.start('#firebaseui-auth-container', uiConfig)
    }
  }
</script>
