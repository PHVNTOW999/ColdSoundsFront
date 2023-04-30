<template>
  <div>
    <Header />
    <div class="singlePage">
      <div class="singlePage__cover">
        <img class="singlePage__cover-img w-1/4" :src="this.single.cover">
      </div>
      <div class="singlePage__name">
        {{ this.single.name }}
      </div>
      <div class="singlePage__stats">

      </div>
      <div class="singlePage__singerCart">
        ghhg
      </div>
      <div class="singlePage__featCart">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "single",
  computed: {
    id() {
      return this.$route.params.id
    },
    single() {
      return this.$store.state.user.singles[this.id]
    }
  }
}
</script>

<style scoped>

</style>
