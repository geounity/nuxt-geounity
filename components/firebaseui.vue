<template>
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
  import { auth, authProviders } from '~/plugins/firebase'
  
  export default {
    name: 'userLogin',
    data () {
      return {
      }
    },
    mounted () {
      let self = this
      let uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          authProviders.Google,
          authProviders.Facebook,
          authProviders.Twitter,
          authProviders.Github
        ],
        tosUrl: '/politics',
        privacyPolicyUrl: '/privacy-policy',
        callbacks: {
          signInSuccessWithAuthResult: function () {
            console.log('signInSuccessWithAuthResult')
            self.$emit('nextStep')
          },
          uiShown: function () {
            console.log('uiShown')
          }
        }
      }
      if (process.browser) {
        let firebaseui = require('firebaseui')
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
        ui.start('#firebaseui-auth-container', uiConfig)
      }
    }
  }
</script>
<style src="~/node_modules/firebaseui/dist/firebaseui.css"></style>
