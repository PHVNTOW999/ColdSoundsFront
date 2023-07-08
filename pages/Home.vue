<template>
  <div>
    <div class="flex justify-between w-100">
      <SongCart v-for="(single, i) in SINGLES"
                  :data="single"
                  :key="i" />
    </div>
    <div class="flex justify-between w-100">
      <SongCart v-for="(album, i) in ALBUMS"
                  :data="album"
                  :key="i" />
    </div>
  </div>
</template>

<script>
import SongCart from "~/components/carts/SongCart.vue";
import {mapGetters} from "vuex";

export default {
  name: "Home",
  components: { SongCart },
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
