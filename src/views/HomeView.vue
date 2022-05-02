<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <div class="counter">
    {{ $store.state.counter }}
  </div>
  <div class="buttons">
    <button @click="$store.commit('addCount')">+</button>
    <button @click="$store.commit('dropCount')">-</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView'
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