<template lang="pug">
  v-breadcrumbs(:items="items" divider="<" small light)
</template>

<script>
export default {
  name: 'breadcrumbs',
  data: () => ({
    items: [
      {
        text: 'America del Sur',
        disabled: false,
        href: 'America-del-Sur'
      },
      {
        text: 'Argentina',
        disabled: false,
        href: 'Argentina'
      },
      {
        text: 'Buenos Aires',
        disabled: false,
        href: 'Buenos Aires'
      },
      {
        text: 'La Plata',
        disabled: false,
        href: 'La Plata'
      }
    ]
  })
}
</script>
