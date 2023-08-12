<template>
  <div>
      <Home />
  </div>
</template>

<script>
import Home from "~/pages/Home.vue";

export default {
  name: 'IndexPage',
  components: {
    Home,
  },
  mounted() {
    this.$store.commit('user/CHECK_LS_AUTH', JSON.parse(localStorage.getItem('user')))
    setTimeout(() => {
      this.$store.dispatch('user/GET_PLAYLISTS', this.$store.state.user.email)
    }, 500)
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
