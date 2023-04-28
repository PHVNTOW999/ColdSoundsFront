<template>
  <div class="singleCart">
    <div class="singleCart__cover">
      <img :src="single.cover">
    </div>
    <div class="singleCart__info">
      <p>{{ single.name }}</p>
      <p>{{ single.singers }}</p>
      <p>{{ single.featuring }}</p>
      <p>{{ single.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleCart",
  props: {
    single: Object
  }
}
</script>

<style scoped>

</style>
