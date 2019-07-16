<template>
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
  import { auth, authProviders } from '~/plugins/firebase'
  
  var uiConfig = {
    signInSuccessUrl: '/',
    signInFlow: 'popup',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      authProviders.Google,
      authProviders.Facebook,
      authProviders.Twitter,
      authProviders.Github,
      authProviders.Email
    ],
    tosUrl: '/politics',
    privacyPolicyUrl: '/privacy-policy',
    callbacks: {
      sugnInSuccessWithAuthResult: function () {
        console.log('signInSuccessWithAuthResult')
      },
      uiShown: function () {
        console.log('uiShown')
      }
    }
  }
  
  export default {
    name: 'userLogin',
    data () {
      return {
      }
    },
    mounted () {
      if (process.browser) {
        let firebaseui = require('firebaseui')
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
        ui.start('#firebaseui-auth-container', uiConfig)
      }
    }
  }
</script>
<style src="~/node_modules/firebaseui/dist/firebaseui.css"></style>
