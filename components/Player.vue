<template>
  <div class="player">

    <div class="progress_bar" ref="progress_bar" @click="setProgress($event)">
      <span class="progress" ref="progress"></span>
    </div>

    <div class="wrapper flex justify-between">

      <div class="meta">
        <div class="cover w-20">
          <img :src="track.cover">
        </div>
        <div class="name">
          {{ track.name }}
        </div>
        <div class="artist">
          <span v-for="artist in track.artists" :key="artist.uuid">{{ artist.name }}</span>
        </div>
      </div>

      <div class="control">
        <div class="prevBtn" @click="pervTrack()"><button> < </button></div>
        <div class="play" v-if="pause" @click="playTrack()"><button> Play </button></div>
        <div class="pause" v-if="play" @click="pauseTrack()"><button> Pause </button></div>
        <div class="nextBtn" @click="nextTrack()"><button> > </button></div>
      </div>

      <div class="func">
        <button>Volume</button>
        <button>Loop</button>
        <button>Add song</button>
        <button>Add song in...</button>
        <button>Download</button>
      </div>
    </div>

    <audio ref="audio" autoplay>
      <source :src="track.file" type='audio/wav' />
      <source :src="track.file" type='audio/mp3' />
    </audio>
  </div>

</template>

<script>
export default {
  name: "Player",
  data() {
    return {
      track:     {
        "uuid": "999a52f8-276a-4241-9f72-5edede0321d3",
        "format": "Single",
        "name": "Mask Off",
        "file": "http://127.0.0.1:8000/media/audio/Future_-_Mask_Off_Mslf0oc.mp3",
        "cover": "http://127.0.0.1:8000/media/img/artworks-000208217479-4b0j0h-t500x500.jpg",
        "date": "2023-05-04",
        "artists": [
          {
            "uuid": "a5b24d94-96ec-4b53-b766-afee57afbf45",
            "name": "Future",
            "avatar": null
          }
        ],
        "feat": []
      },
      play: false,
      pause: true,
    }
  },
  methods: {
    playTrack() {
      this.$refs.audio.play()

      this.play = true
      this.pause = false
    },
    pauseTrack() {
      this.$refs.audio.pause()

      this.pause = true
      this.play = false
    },
    pervTrack() {
      this.track = this.data[0]
      this.$refs.audio.load()
    },
    nextTrack() {
      this.track = this.data[1]
      this.$refs.audio.load()
    },
    setProgress: function(event) {
      const width = this.$refs.progress_bar.clientWidth
      const clickX = event.offsetX
      const duration = this.$refs.audio.duration

      this.$refs.audio.currentTime = (clickX / width) * duration
    },
    trackProgress() {
      const progressPercent = (this.$refs.audio.currentTime / this.$refs.audio.duration ) * 100
      this.$refs.progress.style.width = `${progressPercent}%`
    }
  },
  computed: {
    data() {
      return this.$store.state.player.trackList
    },
  },
  mounted() {
    // default volume
    this.$refs.audio.volume = 0.25
    // events
    this.$refs.audio.addEventListener('timeupdate', this.trackProgress)
  }
}
</script>

<style scoped>
.player {
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: #fff;

  .progress_bar {
    width: 100%;
    height: 10px;
    display: flex;
    align-items: center;
    background-color: gray;
    cursor: pointer;
    .progress {
      width: 0;
      height: 100%;
      border-radius: 0;
      background-color: purple;
    }
  }

}
</style>
