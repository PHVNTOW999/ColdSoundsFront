<template>
  <div>
    <div class="flex justify-between w-100">
      <singleCart v-for="(single, i) in SINGLES"
                  :data="single"
                  :key="i" />
    </div>
    <div class="flex justify-between w-100">
      <albumCart v-for="(album, i) in ALBUMS"
                  :data="album"
                  :key="i" />
    </div>
  </div>
</template>

<script>
import SingleCart from "~/components/carts/SingleCart.vue";
import {mapGetters} from "vuex";
import AlbumCart from "~/components/carts/AlbumCart.vue";

export default {
  name: "Home",
  components: {AlbumCart, SingleCart},
  computed: {
    ...mapGetters({
      SINGLES: "main/SINGLES",
      ALBUMS: 'main/ALBUMS'
    }),
  },
  created() {
    this.$store.dispatch('main/GET_SINGLES')
    this.$store.dispatch('main/GET_ALBUMS')
  }
}
</script>

<style scoped>

</style>
