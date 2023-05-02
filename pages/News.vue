<template>
  <div>
    <Header />
    news page
    <div class="flex justify-between w-100">
<!--      <singleCart v-for="(single, i) in news"-->
<!--                  :data="single"-->
<!--                  :key="i" />-->
      {{ this.$store.getters["pages/test"] }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "News",
  computed: {
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      doneCount: 'pages/test'
    })
  },
  // methods: {
  //   ...mapActions(
  //     {
  //       GET_SINGLES:'pages/GET_SINGLES',
  //     }
  //   ),
  // },
  // created() {
  //   this.GET_SINGLES()
  // }
}
</script>

<style scoped>

</style>
