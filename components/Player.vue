<template>
  <div class="player">

    <div class="progress_bar" ref="progress_bar" @click="setProgress($event)">
      <span class="progress" ref="progress"></span>
    </div>

    <div class="wrapper flex justify-between">

      <div class="meta">
        <div v-if="env">
          <div class="cover w-20">
            <img :src="env.cover">
          </div>
          <div class="name">
            {{ track.name }}
          </div>
          <div class="artist">
            <span v-for="artist in env.artists" :key="artist.uuid">{{ artist.name }}</span>
          </div>
        </div>
        <div v-else>
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
      </div>

      <div class="control">
        <div class="prevBtn" @click="$store.commit('player/SET_PERV_TRACK')"><button> < </button></div>
        <div class="play" v-if="play == false" @click="playTrack()"><button> Play </button></div>
        <div class="pause" v-else @click="pauseTrack()"><button> Pause </button></div>
        <div class="nextBtn" @click="$store.commit('player/SET_NEXT_TRACK')"><button> > </button></div>
      </div>

      <div class="func">
        <div class="time">
          <div v-if="this.time.duration > 0">
            {{ calcTime(this.time.current) }} - {{ calcTime(this.time.duration) }}
          </div>
          <div v-else>
            00:00 - 00:00
          </div>
        </div>
        <div class="volume">
          <b-field label="Volume">
            <b-slider  size="is-small" v-model="volume">
            </b-slider>
          </b-field>
        </div>
        <button @click="loopTrack()">Loop</button>
        <button>Add song</button>
        <button>Add song in...</button>
        <button>Download</button>
      </div>
    </div>

    <audio ref="audio">
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
      play: false,
      volume: 25,
      loop: false,
      time: {
        current: null,
        duration: null,
      },
    }
  },
  methods: {
    playTrack() {
      this.$refs.audio.play()
      this.play = true
    },
    pauseTrack() {
      this.$refs.audio.pause()
      this.play = false
    },
    setVolume() {
      if(this.volume < 10) this.$refs.audio.volume = `0.0${this.volume}`
      else if (this.volume == 100) this.$refs.audio.volume = 1
      else this.$refs.audio.volume = `0.${this.volume}`
    },
    loopTrack() {
      if(this.loop == false) {
        this.$refs.audio.loop = true
        this.loop = true
      }
      else {
        this.$refs.audio.loop = false
        this.loop = false
      }
    },
    calcTime(sec) {
      let min = Math.floor(sec/60)
      min = (min >= 10) ? min : "0" + min
      sec = Math.floor(sec % 60);
      sec = (sec >= 10) ? sec : "0" + sec
      return min + ":" + sec
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
    env() {
      return this.$store.getters["player/ENV"]
    },
    track() {
      return this.$store.getters["player/TRACK"]
    },
  },
  watch: {
    volume() {
      return this.setVolume()
    },
    track() {
      this.$refs.audio.load()
      this.$refs.audio.play();
      this.play = true
    }
  },
  mounted() {
    // default volume
    this.$refs.audio.volume = 0.20
    // events
    this.$refs.audio.load()
    this.$refs.audio.addEventListener('timeupdate', this.trackProgress)
    this.$refs.audio.addEventListener('timeupdate', () =>
      this.time = {
        current: this.$refs.audio.currentTime,
        duration: this.$refs.audio.duration,
      }
    )
  }
}
</script>

<style scoped>
.player {
  width: 100%;
  bottom: 0;
  position: fixed;
  background-color: #000000;
  color: white;

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
