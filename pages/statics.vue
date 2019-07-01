<template lang="pug">
  div
    h1 Estadísticas
    gu-static-card(
      v-for="s in statics"
      :key="s.id"
      :static="s"
    )
</template>

<script>
import GuStaticCard from '~/components/cards/StaticCard.vue'
import EmptyPage from '~/components/empty/EmptyPage.vue'

export default {
  components: { GuStaticCard, EmptyPage },
  data () {
    return {
      statics: [
        {
          id: 1,
          title: 'Nivel de educacion',
          author: 'seba',
          description: 'Alguna descripcion media corta que solo sirva para rellenar contenido'
        },
        {
          id: 2,
          title: 'Partido político',
          author: 'seba',
          description: 'Alguna otra descripcion distinta a la anterior.'
        },
        {
          id: 3,
          title: 'Titulo tres',
          author: 'seba',
          description: 'Descripcion'
        }
      ]
    }
  }
}
</script>
