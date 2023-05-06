<template>
  <div class="footer">
<!--    <audio class="audio" v-if="file" :src="file" controls>-->
<!--      <source :src="file" type="video/mp3" />-->
<!--      <source :src="file" type="video/wav" />-->
<!--      <p>-->
<!--        error-->
<!--      </p>-->
<!--    </audio>-->
<!--    <div id="player"></div>-->
<!--        <iframe-->
<!--          src="./Future.mp3"-->
<!--          type="text/html" width=400 height=300-->
<!--          allowfullscreen />-->
    <iframe src="playerjs.html?file=https://plrjs.com/x.mp4" type="text/html" width=400 height=300 frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      "uuid": "999a52f8-276a-4241-9f72-5edede0321d3",
      "format": "Single",
      "name": "Mask Off",
      "file": "http://127.0.0.1:8000/media/audio/Future_-_Mask_Off_Mslf0oc.mp3",
      "cover": "http://127.0.0.1:8000/media/img/Resident_Evil_2___Biohazard_2_Screenshot_2022.07.15_-_14.01.13.32_Yx53N5c.png",
      "date": "2023-05-04",
      "artists": [
        {
          "uuid": "a5b24d94-96ec-4b53-b766-afee57afbf45",
          "name": "Future",
          "avatar": null
        }
      ],
      "feat": []
    }
  }
}
</script>

<style scoped>
.footer {
  margin: 0;
  padding: 0;
  background-color: #938888;
  display: block;
  position: absolute;
  bottom: 0;
  z-index: 999999999;
  width: 100%;
  max-height: 100px;
  .audio {
    width: 100%;
    background-color: #3b0000;
    border-radius: 0;
  }
  .audio::-webkit-media-controls-panel {
    background-color: #56AEFF;
    border-radius: 0;
  }
}
</style>
