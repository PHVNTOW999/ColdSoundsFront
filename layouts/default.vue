<template>
  <div>
    <TheHeader />
    <Nuxt />
    <ThePlayer />
  </div>
</template>

<script>
import Home from "~/pages/Home.vue";
import TheHeader from "~/components/TheHeader.vue";
import ThePlayer from "~/components/ThePlayer.vue";

export default {
  name: 'layout',
  components: {
    TheHeader,
    ThePlayer
  }
}
</script>
