<template>
  <div class="player" tabindex="-1">
    <div>
      <div class="progress_bar"
           ref="progress_bar"
           @click="setProgress($event)"
           @mousemove="checkProgress($event)"
           @mouseenter="showCheckProg($event)"
           @mouseleave="hiddenCheckProg($event)">
        <div
          v-if="isShowCheckTime"
          class="tooltipe"
          ref="progress_check">{{ calcTime(this.checkingTime) }}
        </div>

        <span class="progress" ref="progress"></span>
      </div>
    </div>

    <div class="wrapper flex justify-between">

      <div class="meta w-1/3">
        <div v-if="this.env.format === 'Album'">
          <div class="cover w-20">
            <img :src="env.cover.file">
          </div>
          <div class="name">
            {{ track.name }}
          </div>
          <div class="artist">
            <span v-for="artist in env.artists" :key="artist.uuid">{{ artist.name }}</span>
          </div>
        </div>
        <div v-else>
          <div class="cover w-20" v-if="track.cover">
            <img :src="track.cover.file || track.album.cover.file">
          </div>
          <div class="name">
            {{ track.name }}
          </div>
          <div class="artist">
            <span v-for="artist in track.artists" :key="artist.uuid">{{ artist.name }}</span>
          </div>
        </div>
      </div>

      <div class="control flex justify-between w-1/3">
        <div class="prevBtn">
          <b-button
            type="is-dark"
            @click="$store.commit('player/SET_PERV_TRACK')"
            :disabled="this.env.format == undefined || this.env.format == 'Single'">
            <
          </b-button>
        </div>
        <div class="play" v-if="this.play === false">
          <b-button type="is-dark" @click="playTrack()" :disabled="!this.track.files">
            Play
          </b-button>
        </div>
        <div class="pause" v-else>
          <b-button type="is-dark" @click="playTrack()" :disabled="!this.track.files">
            Pause
          </b-button>
        </div>
        <div class="nextBtn">
          <b-button
            type="is-dark"
            @click="$store.commit('player/SET_NEXT_TRACK')"
            :disabled="this.env.format == undefined || this.env.format == 'Single'">
            >
          </b-button>
        </div>
      </div>

      <div class="func w-1/3">
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
            <b-slider size="is-small" v-model="volume" />
          </b-field>
        </div>
        <button @click="loopTrack()">Loop</button>
        <button>Add song</button>
        <button>Add song in...</button>
        <button>Download</button>
      </div>
    </div>

    <audio ref="audio">
      <source :src="track.files" type='audio/wav' />
      <source :src="track.files" type='audio/mp3' />
    </audio>

  </div>
</template>

<script>

export default {
  name: "Player",
  data() {
    return {
      // play: false,
      volume: 5,
      loop: false,
      isShowCheckTime: false,
      checkingTime: null,
      time: {
        current: null,
        duration: null,
      },
    }
  },
  methods: {
    playTrack() {
      if(this.track.files && this.play === false) {
        this.$refs.audio.play()
        // this.play = true
        this.$store.commit('player/SET_PLAY', true)
      } else if(this.track.files && this.play === true) {
        this.$refs.audio.pause()
        // this.play = false
        this.$store.commit('player/SET_PLAY', false)
      } else {
        const notif = this.$buefy.notification.open({
          duration: 5000,
          message: `Error`,
          position: 'is-bottom-right',
          type: 'is-danger',
          hasIcon: true
        })
      }
    },
    setVolume() {
      if(this.volume < 10) this.$refs.audio.volume = `0.0${this.volume}`
      else if (this.volume === 100) this.$refs.audio.volume = 1
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
    trackProgress() {
      const progressPercent = (this.$refs.audio.currentTime / this.$refs.audio.duration ) * 100
      this.$refs.progress.style.width = `${progressPercent}%`
    },
    setProgress: function(event) {
      const width = this.$refs.progress_bar.clientWidth
      const eventX = event.offsetX
      const duration = this.$refs.audio.duration

      this.$refs.audio.currentTime = (eventX / width) * duration
    },
    checkProgress: function(event) {
      const width = this.$refs.progress_bar.clientWidth
      const eventX = event.offsetX
      const duration = this.$refs.audio.duration

      this.checkingTime = (eventX / width) * duration

      this.$refs.progress_check.style.left = (eventX + 'px')
    },
    showCheckProg() {
      this.isShowCheckTime = true
    },
    hiddenCheckProg() {
      this.isShowCheckTime = false
    }
  },
  computed: {
    play() {
      return this.$store.getters["player/PLAY"]
    },
    env() {
      return this.$store.getters["player/ENV"]
    },
    track() {
      return this.$store.getters["player/TRACK"]
    },
  },
  watch: {
    play() {
      if(this.play === false) this.$refs.audio.pause();
      else this.$refs.audio.play();
    },
    volume() {
      return this.setVolume()
    },
    track() {
      this.$refs.audio.currentTime = 0
      this.$refs.audio.load()
      this.$refs.audio.play();

      this.$store.commit('player/SET_PLAY', true)
    }
  },
  mounted() {
    // default volume
    this.$refs.audio.volume = 0.05
    // events
    this.$refs.audio.load()
    this.$refs.audio.addEventListener('timeupdate', this.trackProgress)
    this.$refs.audio.addEventListener('click', this.checkProgress)
    this.$refs.audio.addEventListener('mousemove', this.showCheckProg)
    this.$refs.audio.addEventListener('mousemove', this.hiddenCheckProg)
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
  z-index: 9999;

  .progress_bar {
    width: 100%;
    height: 10px;
    display: flex;
    align-items: center;
    background-color: gray;
    cursor: pointer;
    .tooltipe {
      position: absolute;
      bottom: 136px;
      background-color: yellowgreen;
      //transition-duration: 0.1s;
      transform: scale(0.9);
    }
    .progress {
      width: 0;
      height: 100%;
      border-radius: 0;
      background-color: purple;
    }
  }

}
</style>
