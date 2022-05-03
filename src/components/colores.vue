<template>
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

</style>