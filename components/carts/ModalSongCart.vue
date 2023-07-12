<template>
  <b-modal v-model="modalActive" :can-cancel="false" full-screen>
    <div class="modalWin">
      <div class="modalWin__close" @click="$emit('close')">
        <b-icon
          icon="close"
          size="is-large" />
      </div>
      </div>
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
          <p class="truncate underline" v-if="data.feats">
            <span v-for="feat in data.feats" :key="feat.slug_id">{{ feat.name }}</span>
          </p>
        </div>
        <div class="modalWin__date">
          <h1>Release date: </h1>
          <p class="truncate">{{ data.format }} - {{ data.date }}</p>
        </div>
      </div>
      <div class="modalWin__singles">
        <div class="singles__single">
          <SingleUnit v-if="data.format == 'Single'" :data="data" />
          <SingleUnit v-else v-for="(file, i) in data.files" :key="i" :data="file" />
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "ModalSongCart",
  props: {
    data: Object,
    modalActive: Boolean,
  }
}
</script>

<style scoped>
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
