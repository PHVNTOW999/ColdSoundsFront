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
      <form method="post" action="/" enctype="multipart/form-data" class="editModalForm">
        <div class="editModalForm__cover">
          <div v-if="this.newCoverFile != null" class="editModalForm__cover-new">
<!--            {{ 'http://127.0.0.1:8000/' + newCoverFile.file }}-->
            <img :src="'http://127.0.0.1:8000' + newCoverFile.file" class="max-w-xs" alt="">
          </div>
          <div v-else class="editModalForm__cover-now">
            <img :src="form.cover.file" class="max-w-xs" alt="">
          </div>
          <div class="editModalForm__cover-set">
            <b-field class="file">
              <b-upload v-model="coverFile" expanded>
                <a class="button is-primary is-fullwidth">
                  <b-icon icon="upload"></b-icon>
                  <span>{{ coverFile.name || "Click to upload"}}</span>
                </a>
              </b-upload>
              <b-button @click="delEditCover()"
                        type="is-danger"
                        icon-right="delete" />
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
        <div class="editModalForm__files">
          <div v-for="(file, i) in form.files" :key="i"
               class="editModalForm__files-file flex"
               @click="editFiles(file)">
            <div class="editModalForm__files-file-checkbox">
              <b-checkbox :value="true" size="is-medium" expanded />
            </div>
            <div class="editModalForm__files-file-unit">
              <SingleUnit :data="file" />
            </div>
          </div>
        </div>
        <div class="editModalForm__submit">
          <b-button type="is-success" @click="sendForm()">Done</b-button>
        </div>
      </form>
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
      coverFile: {
        name: null,
      },
      newCoverFile: null,
    }
  },
  methods: {
    async sendForm() {
      const loadingComponent = this.$buefy.loading.open()
      try {
        this.newCoverFile ? this.form.cover = this.newCoverFile : null
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
    },
    editFiles(workFile) {
      const isActive = this.form.files.find(el => el.uuid == workFile.uuid)

      if(isActive) {
        this.form.files = this.form.files.filter(el => el.uuid !== workFile.uuid)
      } else { this.form.files.push(workFile) }
    },
    delEditCover() {
      this.coverFile = null
      this.newCoverFile = null
    }
  },
  watch: {
    data() {
      if(this.data.uuid !== this.form.uuid) {
        Object.assign(this.form, this.data);
      }
    },
    async coverFile() {
      const formData = new FormData();
      formData.append("file", this.coverFile);
      const data = await this.$store.dispatch('user/POST_FILE', formData)
      this.newCoverFile = data
    }
  },
  created() {
    Object.assign(this.form, this.data);
  }
}
</script>

<style scoped>

</style>
