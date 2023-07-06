<template>
  <div>
<!--      <TheHeader />-->
      <Home />
<!--      <ThePlayer />-->
  </div>
</template>

<script>
import Home from "~/pages/Home.vue";
import TheHeader from "~/components/TheHeader.vue";
import ThePlayer from "~/components/ThePlayer.vue";

export default {
  name: 'IndexPage',
  components: {
    Home,
    TheHeader,
    ThePlayer
  },
  mounted() {
    this.$store.commit('user/CHECK_LS_AUTH', JSON.parse(localStorage.getItem('user')))
  }
}
</script>

<style>
html {
  //width: 100%;
  //height: 100%;
  background-image: url('../assets/img/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  //overflow: hidden;
}
</style>
