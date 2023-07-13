<template>
  <div class="editor">
    <b-modal v-model="activeModal"
             has-modal-card
             trap-focus
             :destroy-on-hide="false"
             aria-role="dialog"
             aria-label="Example Modal"
             close-button-aria-label="Close"
             aria-modal >
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

    <div class="editor__btn" @click="activeModal = true">
      <b-icon
        icon="square-edit-outline"
        type="is-warning"
        size="is-medium" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Editor",
  props: {data: Object},
  data() {
    return {
      form: {},
      activeModal: false
    }
  }
}
</script>

<style scoped>

</style>
