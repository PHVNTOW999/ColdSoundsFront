<template>
  <Home />
</template>

<script>
import Home from "~/pages/Home.vue";

export default {
  name: 'IndexPage',
  components: {
    Home
  },
}
</script>

<style>
html {
  width: 100%;
  height: 100%;
  background-image: url('./assets/img/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 0 10px 0 10px;
}
</style>
