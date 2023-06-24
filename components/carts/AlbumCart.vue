<template>
  <div class="albumCard rounded-lg">
    <div class="albumCard__cover flex items-center">
      <div class="albumCard__cover-icons absolute">
        <div class="w-full flex flex-col items-center">
          <div class="play_btn" @click="play()">
            <b-icon
              icon="play"
              size="is-large"
              type="is-primary">
            </b-icon>
          </div>
          <div class="fav_btn">
            <b-icon
              class="w-full"
              icon="heart"
              size="is-small"
              type="is-primary">
            </b-icon>
          </div>
        </div>
      </div>
      <img class="albumCard__cover-img" :src="data.cover">
    </div>
    <div class="albumCard__info text-center">
      <p class="truncate underline" @click="modalActive = true">
        {{ data.name }}
      </p>
      <p class="truncate underline">
        <span v-for="artist in data.artists" :key="artist.slug_id">{{ artist.name }}</span>
      </p>
      <div class="truncate" v-if="data.feats.length">
        <span v-for="feat in data.feats" :key="feat.uuid">{{ feat.name }}</span>
      </div>
<!--      <p class="truncate">{{ data.format }} - {{ data.date }}</p>-->
    </div>
  </div>
</template>

<script>

export default {
  name: "AlbumCard",
  props: { data: Object },
  data() {
    return {
      modalActive: false,
    }
  },
  methods: {
    play() {
      this.$store.commit('player/SET_ENV', this.data)
      this.$store.commit('player/SET_TRACK', this.data.files[0])
    }
  }
}
</script>

<style scoped>
.albumCard {
  width: 200px;
  height: 275px;
  color: #fff;
  background-color: #000;
}
.albumCard__cover-icons {
  width: 200px;
}
.albumCard__cover-img {
  border-radius: 0.5rem 0.5rem 0 0;
}
.albumCard__info {
  padding: 0 5px 0 5px;
  height: 74px;
}
</style>
