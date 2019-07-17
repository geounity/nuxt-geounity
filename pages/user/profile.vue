<template lang="pug">
  v-container
    v-layout( justify-center wrap)
      v-flex(xs12)
        v-img(:src="user.photoURL" width="300")
      v-flex(xs12)
        h2.heading Hola {{ user.username }}
      v-flex(xs12)
        h2.heading Tu email: {{ user.email }}
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    user () { return this.$store.state.user }
  }
}
</script>

