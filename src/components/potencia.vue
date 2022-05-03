<template>
  <div class="square">
    {{ $store.state.counter }}
    <sup>2</sup> =
    {{ $store.getters.sqr }}
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>