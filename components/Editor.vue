<template>
  <div class="editor" style="background-color: white">
    <b-modal v-model="editModal"
             :can-cancel="false"
             aria-modal>
      <div class="modalWin__close" @click="$emit('close')">
        <b-icon
          icon="close"
          size="is-large" />
      </div>
      <div class="editModalForm">
        <div class="editModalForm__cover">
          <div class="editModalForm__cover-now">
            <img :src="data.cover" class="max-w-xs">
          </div>
          <div class="editModalForm__cover-new">
            <b-field label="Included filename">
              <b-field class="file is-primary" :class="{'has-name': !!newCover}">
                <b-upload v-model="newCover" class="file-label" rounded>
                <span class="file-cta">
                  <b-icon class="file-icon" icon="upload"></b-icon>
                  <span class="file-label">{{ newCover.name || "Click to upload"}}</span>
                </span>
                </b-upload>
              </b-field>
            </b-field>
          </div>
        </div>
        <div class="editModalForm__name">
          <b-field label="Change name">
            <b-input
              type="name"
              v-model="form.name"
              placeholder="Write playlist's name"
              required />
          </b-field>
        </div>
        <div class="editModalForm__files"></div>
        <div class="editModalForm__submit">
          <b-button type="is-success" @click="sendForm()">Done</b-button>
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
      form: {
        name: null,
        cover: null,
        files: null
      },
      newCover: {
        name: null
      }
    }
  },
  methods: {
    async sendForm() {
      const loadingComponent = this.$buefy.loading.open()
      try {
        await this.$store.dispatch('user/PATCH_PLAYLIST', this.form)
        this.$buefy.notification.open({
          message: 'Done!, your playlist is changed',
          type: 'is-success'
        })
      }
      catch(e) {
        this.$buefy.notification.open({
          message: `Error: ${e}`,
          type: 'is-danger',
        })
      }
      finally {
        setTimeout(() => {
          this.$store.dispatch('user/GET_PLAYLISTS', this.$store.state.user.email)
        }, 100)
        loadingComponent.close()
        this.$emit('close')
      }
    }
  },
  mounted() {
    this.form.uuid = this.data.uuid
    this.form.name = this.data.name
    this.form.cover = this.data.cover
    this.form.files = this.data.files
  }
}
</script>

<style scoped>

</style>
