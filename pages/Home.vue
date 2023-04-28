<template>
  <div>
    <Header />
    Home
    <singleCart :single="single" />
  </div>
</template>

<script>
import SingleCart from "~/components/carts/SingleCart.vue";

export default {
  name: "Home",
  components: {SingleCart},
  data() {
    return {
      single: {
        cover: 'https://media.pitchfork.com/photos/63222b2752d4bd45efccbadf/1:1/w_600/Yeat.jpg',
        name: 'AftërLyfe',
        singers: 'Yeat',
        featuring: null,
        date: 'February 24, 2023'
      }
    }
  }
}
</script>

<style scoped>

</style>
