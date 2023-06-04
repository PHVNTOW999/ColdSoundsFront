<template>
  <Home />
</template>

<script>
import Home from "~/pages/Home.vue";
import Header from "~/components/Header.vue";

export default {
  name: 'IndexPage',
  components: {
    Home,
    Header,
  },
}
</script>

<style>
html {
  //width: 100%;
  //height: 100%;
  background-image: url('./assets/img/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  //overflow: hidden;
}
</style>
