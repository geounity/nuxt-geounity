<template lang="pug">
  v-container
    v-layout(v-if="logged" justify-center wrap)
      v-flex(xs12)
        h1.dispaly-1.mb-2.text-xs-center Creación de nueva encuesta
      v-flex(xs12 md6)
        v-form( class="pa-1" style="border:1px solid red" )
          v-text-field( v-model="formNewPoll.title" label="Título de la encuesta (opcional)" max-length="100" outline)
          v-switch( v-model="formNewPoll.public" :label="formNewPoll.public?'Privado':'Publico'")
          v-btn(@click.prevent="save" color="success" block) Guardar encuesta
      v-flex(xs12 md6 style="border:1px solid blue")
        h2.text-xs-center {{formNewPoll.title}}
        h3.caption Para comunidad: {{community}} ({{formNewPoll.public?'Privado':'Publico'}})
    v-layout(v-else)
      v-flex(xs12)
        h2.title Debe registrarse para crear una nueva encuesta
</template>

<script>
export default {
  data () {
    return {
      formNewPoll: {
        title: '',
        public: true,
        community: '',
        questions: [{
          type: '', // [Binario, Numerico, Radio, Checkbox]
          content: '',
          nextQuestion: '' // La sigueinte pregunta en funcion de la respuesta anterior
        }]
      }
    }
  },
  computed: {
    logged () {
      return this.$store.state.authId
    }
  },
  methods: {
    save () {
      alert('Formulario enviado')
    }
  }
}
</script>
