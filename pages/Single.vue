<template>
  <div>
    <Header />
    <div class="singlePage">
      <div class="singlePage__cover">
        <img class="singlePage__cover-img" src="">
      </div>
      <div class="singlePage__name">
        {{ this.$route.query.id || 'Non' }}
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
  props: {
    data: Object,
  }
}
</script>

<style scoped>

</style>
