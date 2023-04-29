<template>
  <div>
    <Header />
    <div class="flex justify-between w-100">
      <singleCart v-for="(single, i) in singles"
                  :data="single"
                  :key="i" />
    </div>
  </div>
</template>

<script>
import SingleCart from "~/components/carts/SingleCart.vue";

export default {
  name: "Home",
  components: {SingleCart},
  computed: {
    singles() {
      return this.$store.state.user.singles
    }
  }
}
</script>

<style scoped>

</style>
