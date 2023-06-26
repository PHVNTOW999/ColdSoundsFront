<template>
  <div class="singleCart rounded-lg">

    <div class="singleCart__cover flex items-center">
      <div class="singleCart__cover-icons absolute">
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
      <img class="singleCart__cover-img" :src="data.cover || data.album.cover">
    </div>

    <div class="singleCart__info text-center">
      <p class="truncate underline" @click="modalActive = true">
          {{ data.name }}
      </p>
      <p class="truncate underline">
        <span v-for="artist in data.artists" :key="artist.slug_id">{{ artist.name }}</span>
      </p>
      <p class="truncate underline" v-if="data.feats.length">
        <span v-for="feat in data.feats" :key="feat.slug_id">{{ feat.name }}</span>
      </p>
      <p class="truncate">{{ data.format }} - {{ data.date }}</p>
    </div>

    <b-modal v-model="modalActive" close-button-aria-label="Close" full-screen>
      <div class="modalWin">
        <div class="modalWin__info">
          <div class="modalWin__cover">
            <img class="modalWin__cover-img" :src="data.cover || data.album.cover">
          </div>
          <div class="modalWin__name">
            <h1>{{ data.name }}</h1>
          </div>
          <div class="modalWin__artists">
            <p class="truncate underline">
              <span v-for="artist in data.artists" :key="artist.slug_id">{{ artist.name }}</span>
            </p>
          </div>
          <div class="modalWin__feats">
            <p class="truncate underline" v-if="data.feats.length">
              <span v-for="feat in data.feats" :key="feat.slug_id">{{ feat.name }}</span>
            </p>
          </div>
          <div class="modalWin__date">
            <p class="truncate">{{ data.format }} - {{ data.date }}</p>
          </div>
        </div>
        <div class="modalWin__audio">
          <SingleUnit :data="data" />
        </div>
      </div>
    </b-modal>

  </div>
</template>

<script>

  export default {
    name: "SingleCart",
    props: { data: Object },
    data() {
      return {
        modalActive: false,
      }
    },
    methods: {
      play() {
        this.$store.commit('player/SET_ENV', null)
        this.$store.commit('player/SET_TRACK', null)

        this.$store.commit('player/SET_TRACK', this.data)
      }
    }
}
</script>

<style lang="scss" scoped>
.singleCart {
  width: 200px;
  height: 275px;
  color: #fff;
  background-color: #000;
}
.singleCart__cover-icons {
  width: 200px;
}
.singleCart__cover-img {
  border-radius: 0.5rem 0.5rem 0 0;
}
.singleCart__info {
  padding: 0 5px 0 5px;
  height: 74px;
}
.modalWin {
  background-color: black;
  &__info {
    width: 200px;
    max-width: 200px;
  }
}
</style>
