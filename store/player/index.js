import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  env: null,
  track: {
    "uuid": "",
    "format": "",
    "cover": "",
    "name": "",
    "file": "",
    "date": "",
    "artists": [],
    "feat": []
  }
})

export const getters = {
  ENV(state) {
    return state.env
  },
  TRACK(state) {
    return state.track
  }
  // SINGLES(state) {
  //   return state.singles
  // },
  // ALBUMS(state) {
  //   return state.albums
  // }
}

export const mutations = {
  SET_TRACK(state, payload) {
    state.track = payload
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
