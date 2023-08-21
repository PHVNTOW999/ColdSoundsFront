<template>
  <div class="audioUnit flex justify-between">
    <div class="audioUnit__play" v-if="data.cover || data.album.cover">
      <img :src="data.cover.file || data.album.cover.file" @click="play()">
    </div>
    <div class="audioUnit__name">
      {{ data.name }}
    </div>
    <div class="audioUnit__artists">
      <p class="truncate underline">
        <span v-for="artist in data.artists" :key="artist.slug_id">{{ artist.name }}</span>
      </p>
    </div>
    <div class="audioUnit__feats">
      <p class="truncate underline" v-if="data.feats">
        <span v-for="feat in data.feats" :key="feat.slug_id">{{ feat.name }}</span>
      </p>
    </div>
    <div class="audioUnit__func"></div>
    <div class="audioUnit__time">
      <p class="truncate">{{ data.format }} - {{ data.date }}</p>
    </div>
<!--    <audio ref="unit_audio">-->
<!--      <source :src="data.files" type='audio/wav' />-->
<!--      <source :src="data.files" type='audio/mp3' />-->
<!--    </audio>-->
  </div>
</template>

<script>
export default {
  name: "AudioUnit",
  props: { data: Object },
  methods: {
    // diraction() {
    //   return this.$refs.unit_audio
    // },
    play() {
      this.$store.commit('player/SET_ENV', null)
      this.$store.commit('player/SET_TRACK', null)

      this.$store.commit('player/SET_ENV', this.data)
      this.$store.commit('player/SET_TRACK', this.data)
    }
  }
}
</script>

<style scoped>
.audioUnit {
  width: 100%;
  height: 50px;
  .audioUnit__play {
    width: 50px;
    height: 50px;
  }
}
</style>
