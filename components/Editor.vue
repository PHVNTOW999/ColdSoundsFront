<template>
  <div class="editor">
    <b-modal v-model="editModal"
             :can-cancel="false"
             aria-modal >
      <div class="modalWin__close" @click="$emit('close')">
        <b-icon
          icon="close"
          size="is-large" />
      </div>
      <div class="editModal">
        <h1>Playlist name: {{ data.name }}</h1>
        <div class="editModal__name">
          <b-field label="Password">
            <b-input
              type="password"
              v-model="form.name"
              password-reveal
              placeholder="Write playlist's name"
              required />
          </b-field>
        </div>
      </div>
    </b-modal>

  </div>
</template>

<script>
export default {
  name: "Editor",
  props: {data: Object, editModal: Boolean},
  data() {
    return {
      form: {},
      // activeModal: false
    }
  }
}
</script>

<style scoped>

</style>
