<template>
  <div class="albumCart rounded-lg">
    <div class="albumCart__cover">
      <img class="albumCart__cover-img" :src="data.cover">
    </div>
    <div class="albumCart__info text-center">
      <p class="truncate underline">{{ data.name }}</p>
      <p class="truncate underline">{{ data.singers }}</p>
      <p class="truncate">{{ data.featuring }}</p>
      <p class="truncate">{{ data.type }} - {{ data.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "albumCart",
  props: {
    data: Object
  }
}
</script>

<style scoped>
.albumCart {
  width: 200px;
  height: 275px;
  color: #fff;
  background-color: #000;
}
.albumCart__cover-img {
  border-radius: 0.5rem 0.5rem 0 0;
}
.albumCart__info {
  padding: 0 5px 0 5px;
  height: 74px;
}
</style>
