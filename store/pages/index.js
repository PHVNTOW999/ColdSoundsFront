// import Vuex from "vuex";
//
// new Vuex.Store({
//   state: () => ({
//     news: []
//   }),
//   getters: () => ({
//     NEWS(state) {
//       return state.news
//     }
//   }),
//   mutations: {
//     SET_SINGLES(state, payload) {
//       state.news = payload
//     }
//   },
//   actions: {
//     GET_SINGLES({ commit }) {
//       return new Promise((res, rej) => {
//         console.log('ff')
//         this.$axios.$get('api/singles/').then((data) => {
//           commit('SET_SINGLES', data)
//           res(data)
//         }).catch((error) => { rej(console.log(error)) })
//     })
//   }
//   }
// })

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  news: [],
  test: 21,
})

export const getters = () => ({
  NEWS(state) {
    return state.news
  },
  test(state) {
    return state.test
  }
})

export const mutation = () => ({
  SET_SINGLES(state, payload) {
    state.news = payload
  }
})

export const actions = () => ({
  GET_SINGLES({ commit }) {
    return new Promise((res, rej) => {
      console.log('ff')
      this.$axios.$get('api/singles/').then((data) => {
        commit('SET_SINGLES', data)
        res(data)
      }).catch((error) => { rej(console.log(error)) })
    })
  }
})
