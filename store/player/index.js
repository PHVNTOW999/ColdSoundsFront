import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  trackList: [
    {
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
    {
      "uuid": "2f2ea95d-8ca6-4506-b0c7-5d6b25fee604",
      "format": "Single",
      "name": "Benz Truck",
      "file": "http://127.0.0.1:8000/media/audio/Lil_Peep_-_Benz_Truck_%D0%B3%D0%B5%D0%BB%D0%B8%D0%BA_scaabZq.mp3",
      "cover": "http://127.0.0.1:8000/media/img/Benz_Truck_%D0%93%D0%B5%D0%BB%D0%B8%D0%BA_VLMTgBz.jpg",
      "date": "2017-01-01",
      "artists": [
        {
          "uuid": "e06b1978-963e-4b8f-a5b2-0d310b2f37ad",
          "name": "Lil Peep",
          "avatar": null
        }
      ],
      "feat": []
    }
  ]
})

export const getters = {
  TRACK(state) {
    return state.track
  },
  TRACK_LIST(state) {
    return state.trackList
  }
}
