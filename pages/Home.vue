<template>
  <div>
    <Header />
    <div class="flex justify-between w-100">
      <singleCart v-for="(single, i) in singles" :single="single" :key="i" />
    </div>
  </div>
</template>

<script>
import SingleCart from "~/components/carts/SingleCart.vue";

export default {
  name: "Home",
  components: {SingleCart},
  data() {
    return {
      singles: [
        {
          cover: 'https://media.pitchfork.com/photos/63222b2752d4bd45efccbadf/1:1/w_600/Yeat.jpg',
          name: 'AftërLyfe',
          singers: 'Yeat',
          featuring: null,
          date: 'February 24, 2023'
        },
        {
          cover: 'https://media.pitchfork.com/photos/626be39b8eeb4ac0c1275b4e/master/w_1280%2Cc_limit/Future-I-Never-Liked-You-2022.jpeg',
          name: 'I Never Liked You',
          singers: 'Future',
          featuring: null,
          date: 'April 29, 2022'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
