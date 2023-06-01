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
      <p class="truncate underline" @click="modalActive = true">
          {{ data.name }}
        <modelCart :data="data" :active="modalActive">
          <template v-slot:name>
            {{ data.name }}
          </template>
        </modelCart>
      </p>
      <p class="truncate underline">
        <span v-for="artist in data.artists" :key="artist.slug_id">{{ artist.name }}</span>
      </p>
      <p class="truncate" v-if="data.feat.length">{{ data.feat }}</p>
      <p class="truncate">{{ data.format }} - {{ data.date }}</p>
    </div>
  </div>
</template>

<script>
import single from "~/pages/Single/_id.vue";
import ModelCart from "~/components/carts/modelCart.vue";

  export default {
    name: "SingleCart",
    components: { ModelCart },
    props: { data: Object },
    data() {
      return {
        modalActive: false,
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
