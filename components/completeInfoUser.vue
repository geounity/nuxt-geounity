<template lang="pug">
  v-form
    v-layout( justify-space-around align-center wrap )
      v-flex(xs12)
        h2.title.text-xs-center.my-5 Queremos saber un poco mas sobre ti
      v-flex(xs3 class="text-xs-center")
        figure
          v-img(
            :src="downloadURL?downloadURL:'https://firebasestorage.googleapis.com/v0/b/geounity.appspot.com/o/images%2Fdefault-user.png?alt=media&token=9f3d602d-692a-457f-aca0-37afc2f052fb'",
            style="margin:1rem auto"
            width="250px"
          )
        v-btn(
          v-if="!loading",
          @click.once="selectFile"
        ) Subir una foto
          v-icon(right aria-hidden="true") add_a_photo
        input(
          id="files",
          type="file",
          name="file",
          ref="uploadInput",
          accept="image/*",
          :multiple="false",
          @change="detectFiles($event)"
        )
        v-progress-circular(
          v-if="loading",
          :size="100",
          :width="15",
          :rotate="360",
          :value="progressUpload",
          color="primary"
        ) {{progressUpload}} %
        div(v-if="downloadURL")
          v-btn(
            class="ma-0",
            dark
            small
            color="error"
            @click.once="deleteImage()"
          ) Borrar imagen
      v-flex(xs3)
        v-text-field(
          v-model="formInfo.name"
          label="Nombre"
          solo
        )
        v-text-field(
          v-model="formInfo.lastName"
          label="Apellido"
          solo
        )
      v-flex(xs3)
        v-date-picker(v-model="formInfo.birthDate" color="green lighten-1")
      v-flex(xs11)
        v-btn( @click="save" color="primary" block) Guardar
    v-layout( justify-center wrap )
      v-flex(xs12)
        h2.title.text-xs-center.my-3 Previsualización del la caja de comentarios
      v-flex(class="text-xs-center")
        v-card(width="500px" style="margin:0 auto" class="elevation-4")
          v-layout(justify-start)
            v-flex
              v-avatar(v-if="downloadURL" size="48")
                img(:src="downloadURL")
            v-flex
              h2.title {{formInfo.name}} {{formInfo.lastName}}
          v-layout
            v-flex(xs12)
              p Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
            
</template>

<script>
export default {
  data () {
    return {
      formInfo: {
        fileName: '',
        name: '',
        lastName: '',
        birthDate: ''
      }
    }
  },
  computed: {
    downloadURL () {
      return this.$store.state.user.photoURL
    },
    loading () {
      return this.$store.state.loading
    },
    progressUpload () {
      return this.$store.state.progressUpload
    }
  },
  methods: {
    save () {
      console.log('Ponele que la imagen se haya enviado')
    },
    selectFile () {
      this.$refs.uploadInput.click()
    },
    detectFiles (e) {
      let fileList = e.target.files || e.dataTransfer.files
      Array.from(Array(fileList.length).keys()).map(x => {
        this.upload(fileList[x])
      })
    },
    upload (file) {
      this.$store.commit('LOADING_ON')
      this.formInfo.fileName = file.name
      this.$store.dispatch('UPLOAD_IMAGE_USER', file)
    },
    deleteImage () {
      this.$store.commit('LOADING_ON')
      this.$store.dispatch('DELETE_IMAGE_USER', this.formInfo.fileName)
        .then(() => {
          this.$store.commit('LOADING_OFF')
          this.$store.commit('DELETE_IMAGE_USER')
        })
        .catch((e) => {
          console.error(`file delete error occured: ${e}`)
        })
    }
  }
}
</script>

<style scoped>
.progress-bar{
  margin: 10px 0
}
input[type="file"]{
  position: absolute;
  clip: rect(0,0,0,0)
}
</style>
