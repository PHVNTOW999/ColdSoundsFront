<template>
  <div>
    <span>{{ this.artist.name }}</span>
  </div>
</template>

<script>
import Header from "~/components/TheHeader.vue";
import Player from "~/components/ThePlayer.vue";

export default {
  name: "uuid",
  components: {Player, Header},
  data() {
    return {
      artist: {
        uuid: null,
        name: null,
        avatar: null
      }
    }
  },
  methods: {
    GET_ARTIST() {
      return new Promise((res, rej) => {
        this.$axios.$get(`api/artist/${this.$route.params.uuid}`).then((data) => {
          this.artist = data
          res(data)
        }).catch((error) => { rej(console.log(error)) })
      })
    },
  },
  created() { this.GET_ARTIST() },
}
</script>

<style scoped>

</style>
