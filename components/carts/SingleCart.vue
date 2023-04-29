<template>
  <div class="singleCart rounded-lg">
    <div class="singleCart__cover">
      <div class="singleCart__cover-icons absolute">
        <b-icon
          icon="play"
          size="is-large"
          type="is-primary">
        </b-icon>
        <b-icon
          icon="heart"
          size="is-small"
          type="is-primary">
        </b-icon>
      </div>
      <img class="singleCart__cover-img" :src="data.cover">
    </div>
    <div class="singleCart__info text-center">
      <p class="truncate underline" @click="singleLink">{{ data.name }}</p>
      <p class="truncate underline">{{ data.singers }}</p>
      <p class="truncate">{{ data.featuring }}</p>
      <p class="truncate">{{ data.type }} - {{ data.date }}</p>
    </div>
  </div>
</template>

<script>
import single from "~/pages/Single.vue";

export default {
  name: "SingleCart",
  props: {
    data: Object
  },
  methods: {
    singleLink() {
      console.log('gg')
      this.$router.push({ path: '/single:id', component: single, params: { id: this.data.slug_id } })
    }
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
