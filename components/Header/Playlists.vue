<template>
  <div class="playlists" v-if="isAuth && playlists">
    <b-dropdown aria-role="list">
      <template #trigger="{ active }">
        <b-button
          label="Your Playlists"
          type="is-primary"
          :icon-right="active ? 'menu-up' : 'menu-down'" />
      </template>

      <b-dropdown-item class="playlists flex justify-between"
                       aria-role="listitem"
                       v-for="(playlist, i) in playlists" :key="i">
        <div class="modalWin__change-del">
          <b-icon
            icon="close"
            type="is-danger"
            size="is-medium" />
        </div>
        <div class="modalWin__change-edit"
             v-if="playlist.user.email === user.email && playlist.user.id === user.id"
             @click="data = playlist; editModal = true">
          <b-icon
            icon="square-edit-outline"
            type="is-warning"
            size="is-medium" />
        </div>
        <h1 @click="data = playlist; modalActive = true">{{ playlist.name }}</h1>
      </b-dropdown-item>

    </b-dropdown>

    <ModalSongCart v-if="data"
                   :data="data"
                   :modalActive="modalActive"
                   @close="modalActive = false" />

    <Editor v-if="data"
            :data="data"
            :editModal="editModal"
            @close="editModal = false"/>

  </div>
</template>

<script>
import ModalSongCart from "~/components/carts/ModalSongCart.vue";

export default {
  name: "Playlists",
  components: {ModalSongCart},
  data() {
    return {
      data: null,
      modalActive: false,
      editModal: false,
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters["user/IS_AUTH"]
    },
    user() {
      return this.$store.getters["user/USER"]
    },
    playlists() {
      return this.$store.getters["user/PLAYLISTS"]
    }
  }
}
</script>

<style scoped>

</style>
