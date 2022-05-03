<template>
  <div class="buttons">
    <button @click="$store.dispatch('add_random_number')">+</button>
    <button @click="$store.dispatch('drop_random_number')">-</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>