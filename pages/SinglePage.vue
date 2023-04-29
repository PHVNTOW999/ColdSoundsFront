<template>
  <div>
    <Header />
    <div class="singlePage">
      <div class="singlePage__cover">
        <img class="singlePage__cover-img" src="">
      </div>
      <div class="singlePage__name">
        {{ single.cover }}
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
  name: "SinglePage",
  props: {
    single: Object
  }
}
</script>

<style scoped>

</style>
