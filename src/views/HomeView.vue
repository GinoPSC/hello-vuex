<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <div class="counter">
    {{ $store.state.counter }}
  </div>
  <div class="square">
    {{ $store.state.counter }}
    <sup>2</sup> =
    {{ $store.getters.sqr }}
  </div>
  <div class="buttons">
    <button @click="$store.dispatch('add_random_number')">+</button>
    <button @click="$store.dispatch('drop_random_number')">-</button>
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