<template>
  <div class="songCart rounded-lg">

    <div class="songCart__cover flex items-center">
      <div class="songCart__cover-icons absolute">
        <div class="w-full flex flex-col items-center">
          <div class="play_btn" @click="play()">
            <b-icon
              v-if="this.$store.state.player.env.uuid === this.data.uuid && this.$store.state.player.play"
              icon="pause"
              size="is-large"
              type="is-primary">
            </b-icon>
            <b-icon
              v-else
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
      <img class="songCart__cover-img" :src="data.cover || data.album.cover">
    </div>

    <div class="songCart__info text-center">
      <p class="truncate underline" @click="modalActive = true">
          {{ data.name }}
      </p>
      <p class="truncate underline">
        <router-link :to="`/artist/${artist.uuid}`" v-for="artist in data.artists" :key="artist.uuid">{{ artist.name }}</router-link>
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
            <h1>Artists: </h1>
            <p class="truncate underline">
              <span v-for="artist in data.artists" :key="artist.slug_id">{{ artist.name }}</span>
            </p>
          </div>
          <div class="modalWin__feats">
            <h1>Feats: </h1>
            <p class="truncate underline" v-if="data.feats.length">
              <span v-for="feat in data.feats" :key="feat.slug_id">{{ feat.name }}</span>
            </p>
          </div>
          <div class="modalWin__date">
            <h1>Release date: </h1>
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

  import SingleUnit from "~/components/SingleUnit.vue";

  export default {
    name: "SongCart",
    props: { data: Object },
    components: { SingleUnit },
    data() {
      return {
        modalActive: false,
      }
    },
    methods: {
      play() {
        if(this.$store.state.player.env.uuid === this.data.uuid) {
          // stop or play
          if(this.$store.state.player.play) this.$store.commit("player/SET_PLAY", false)
          else this.$store.commit("player/SET_PLAY", true)
        } else {
          // reload
          this.$store.commit('player/SET_ENV', null)
          this.$store.commit('player/SET_TRACK', null)

          // push
          this.$store.commit('player/SET_ENV', this.data)
          if(this.data.format === 'Single') this.$store.commit('player/SET_TRACK', this.data)
          else this.$store.commit('player/SET_TRACK', this.data.files[0])
          this.$store.commit("player/SET_PLAY", true)
        }
      }
    }
}
</script>

<style scoped>
.songCart {
  width: 200px;
  height: 275px;
  color: #fff;
  background-color: #000;
}
.songCart__cover-icons {
  width: 200px;
}
.songCart__cover-img {
  border-radius: 0.5rem 0.5rem 0 0;
}
.songCart__info {
  padding: 0 5px 0 5px;
  height: 74px;
}
.modalWin {
  background-color: black;
  .modalWin__info {
    height: 516px;
    .modalWin__cover {
      max-width: 200px;
      max-height: 200px;
      width: 200px;
      height: 200px;
    }
  }
}
</style>
