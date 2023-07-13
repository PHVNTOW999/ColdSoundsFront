<template>
  <div>
    <TheHeader />
    <Nuxt />
    <ThePlayer />
  </div>
</template>

<script>
import TheHeader from "~/components/Header/TheHeader.vue";
import ThePlayer from "~/components/ThePlayer.vue";

export default {
  name: 'layout',
  components: {
    TheHeader,
    ThePlayer
  }
}
</script>
