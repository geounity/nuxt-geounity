<template lang="pug">
  .empty_state(class="mt-5")
    h3 Error al encontrar la página
    v-btn( nuxt to="/" color="success") Volver al inicio
</template>

<script>
export default {
  name: 'errorPage'
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
    top: -20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    i{
      margin: auto;
      margin-bottom: 0px;
      font-size: 90px;
      color: #ccc;
    }
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
      width: 50%;
      max-width: 200px;
      background: #348AC7;
      color: white;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      font-size: 12px;
      
    }
  }
</style>
