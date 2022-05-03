<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <counter/>
  <square/>
  <buttons/>
  <colours/>
</template>

<script>

export default {
  name: 'HomeView',
  components:{
    'counter': require('@/components/contador.vue').default,
    'square': require('@/components/potencia.vue').default,
    'buttons': require('@/components/botones.vue').default,
    'colours': require('@/components/colores.vue').default
  }
}
</script>

<style>
  div{
    margin-bottom: 10px;
  }

  .counter{
    font-size: 80px;
  }

  .buttons button{
    font-size: 40px;
    margin: 0 10px;
    width: 100px;
  }
</style>