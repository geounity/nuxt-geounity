<template lang="pug">
  v-footer(dark height="auto" class="brown darken-4")
    v-layout(justify-center)
      v-card(flat tile class="brown darken-4 white--text text-xs-center")
        v-card-text
          v-btn(
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
          )
            v-icon(size="24px") {{ icon }}
        v-card-text(class="white--text pt-0")
          p(style="color:#64DD17") Geounity app es una sistema de moderación y estudio para comunidades o empresas. Creamos acuerdos e identificamos concflictos entre los diferentes puntos de vista. Y organizamos objetivos en común para una comundiad en específico.

        v-divider

        v-card-text(class="white--text")
          span &copy;2019 #[strong Geounity]
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-linkedin',
        'fab fa-twitter',
        'fab fa-instagram',
        'fab fa-facebook'
      ]
    })
  }
</script>
