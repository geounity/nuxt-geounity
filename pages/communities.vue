<template lang="pug">
  section
    h1 Comunidades
    v-layout(xs12 wrap justify-center).text-xs-center
      v-flex
        v-card(nuxt to="/communities?type=geographics").pa-3.my-1.elevation-4
          h2.title Geográficas
          p.subheading Continentes, naciones, provincias, municipios, etc.
      v-flex
        v-card(nuxt to="/communities?type=business").pa-3.my-1.elevation-4
          h2.title Empresariales
          p.subheading Negocios, mercados, organizaciones, cooperativas, etc.
      v-flex
        v-card(nuxt to="/communities?type=ideologics").pa-3.my-1.elevation-4
          h2.title Ideológicas
          p.subheading Religiones, partidos políticos, equipos de futbol, etc.
</template>
