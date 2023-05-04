<template>
  <div>
    <div class="flex justify-between w-100">
      <singleCart v-for="(single, i) in NEWS"
                  :data="single"
                  :key="i" />
    </div>
  </div>
</template>

<script>
import SingleCart from "~/components/carts/SingleCart.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Home",
  components: {SingleCart},
  computed: {
    ...mapGetters({
      NEWS: "pages/SINGLES",
    }),
    singles() {
      return this.$store.state.user.singles
    }
  },
  methods: {
    // ...mapActions(['pages/GET_SINGLES'])
    async getNews() {
      await this.$store.dispatch('pages/GET_SINGLES')
    }
  },
  created() {
    this.getNews()
  }
}
</script>

<style scoped>

</style>
