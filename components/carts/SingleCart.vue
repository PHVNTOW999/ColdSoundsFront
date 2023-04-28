<template>
  <div class="singleCart rounded-lg">
    <div class="singleCart__cover">
      <img class="singleCart__cover-img" :src="single.cover">
    </div>
    <div class="singleCart__info text-center">
      <p class="truncate underline">{{ single.name }}</p>
      <p class="truncate underline">{{ single.singers }}</p>
      <p class="truncate">{{ single.featuring }}</p>
      <p class="truncate">{{ single.date }}</p>
    </div>
  </div>
<!--  AftërLyAftërLyfeAftërLyfefe1-->
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
.singleCart {
  width: 200px;
  height: 275px;
  color: #fff;
  background-color: #000;
}
.singleCart__cover-img {
  border-radius: 0.5rem 0.5rem 0 0;
}
.singleCart__info {
  padding: 0 5px 0 5px;
  height: 74px;
}
</style>
