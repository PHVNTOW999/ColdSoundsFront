<template>
  <div class="albumCart rounded-lg">
    <div class="albumCart__cover">
      <img class="albumCart__cover-img" :src="album.cover">
    </div>
    <div class="albumCart__info text-center">
      <p class="truncate underline">{{ album.name }}</p>
      <p class="truncate underline">{{ album.singers }}</p>
      <p class="truncate">{{ album.featuring }}</p>
      <p class="truncate">{{ single.type }} - {{ single.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "albumCart",
  props: {
    album: Object
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
