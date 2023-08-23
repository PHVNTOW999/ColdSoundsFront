import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  play: false,
  env: {
    "uuid": "",
  },
  track: {
    "uuid": "",
    "format": "",
    "cover": "",
    "name": "",
    "file": "",
    "date": "",
    "artists": [],
    "feats": [],
    album: {
      cover: null,
    }
  },
  // settings: null,
})

export const getters = {
  PLAY(state) {
    return state.play
  },
  ENV(state) {
    return state.env
  },
  TRACK(state) {
    return state.track
  }
}

export const mutations = {
  SET_PLAY(state, payload) {
    state.play = payload
  },
  SET_ENV(state, payload) {
    state.env = payload
  },
  SET_TRACK(state, payload) {
    state.track = payload
  },
  SET_PERV_TRACK(state) {
    let num = (state.env.files.indexOf(state.track) + 1)
    if (num == 1) state.track = state.env.files.at(-1)
    else state.track = state.env.files[(num - 2)]
  },
  SET_NEXT_TRACK(state) {
    const num = (state.env.files.indexOf(state.track) + 1)
    if (state.env.files.length == num) state.track = state.env.files[0]
    else state.track = state.env.files[num]
  }
}

// export const actions = {
//   GET_SINGLES({ commit }) {
//     return new Promise((res, rej) => {
//       this.$axios.$get('api/singles/').then((data) => {
//         commit('SET_SINGLES', data)
//         res(data)
//       }).catch((error) => { rej(console.log(error)) })
//     })
//   },
//   GET_ALBUMS({ commit }) {
//     return new Promise((res, rej) => {
//       this.$axios.$get('api/albums/').then((data) => {
//         commit('SET_ALBUMS', data)
//         res(data)
//       }).catch((error) => { rej(console.log(error)) })
//     })
//   }
// }
