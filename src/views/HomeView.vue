<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <div class="counter" :style="{ color: $store.state.ID_Color }">
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
  <div>
    <input
      v-model="CountColor"
      placeholder="Ingresa un color"
      type="text"
    >
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  computed: {
    CountColor:{
      get(){
        return this.$store.state.ID_Color
      },set(inputColor){
        this.$store.commit('setColor', inputColor)
      }
    }
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