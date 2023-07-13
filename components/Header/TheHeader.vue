<template>
  <div class="header flex justify-between">
    <Playlists />
    <Nav />
    <Auth />

  </div>
</template>

<script>

import ModalSongCart from "~/components/carts/ModalSongCart.vue";
import Auth from "~/components/Header/Auth.vue";
import Nav from "~/components/Header/Nav.vue";
import Playlists from "~/components/Header/Playlists.vue";

export default {
  name: "Header",
  components: {Playlists, Auth, Nav, ModalSongCart},
}
</script>

<style scoped>
.header {
  color: #fff;
  background-color: black;
}
</style>
