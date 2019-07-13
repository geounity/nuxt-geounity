<template lang="pug">
  .empty_state
    h3 No hay {{page}} en esta comunidad
    p Para crear una {{page}} registrate
    v-btn( nuxt to="/" color="success") Registrarte
</template>

<script>
export default {
  name: 'emptyPage',
  props: ['page']
}
</script>


<style lang="stylus">
  body,html{
    height: 100%;
  }

  *{
    font-family: 'Lato';
  }

  .empty_state{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h3{
      margin: 8px 0px;
      text-align: center;
      font-weight: normal;
    }
    p{
      font-size: 14px;
      margin: 0px;
      color: #999;
      text-align: center;
    }
    button{
      outline: none;
      border:  none;
      border-radius: 3px;
      padding: 8px 8px;
      margin: 20px auto auto auto;
      max-width: 200px;
      background: #348AC7;
      color: white;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      font-size: 12px;
      
    }
  }
</style>
