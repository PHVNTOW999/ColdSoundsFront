import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  isAuth: false,
  user: null,
  playlists: Object
}

export const getters = {
  IS_AUTH(state) {
    return state.isAuth
  },
  USER(state) {
    return state.user
  },
  PLAYLISTS(state) {
    return state.playlists
  }
}

export const mutations = {
  CHECK_LS_AUTH(state, payload) {
    if(payload) {
      state.user = payload
      state.isAuth = true
    } else  {
      state.user = null
      state.isAuth = false
    }
  },
  SET_USER(state, payload) {
    state.user = payload
    state.isAuth = true

    localStorage.setItem('user', JSON.stringify(payload))
  },
  SET_PLAYLISTS(state, payload) {
    state.playlists = payload
  },
}

export const actions = {
  LOGIN({ commit }, payload) {
    return new Promise((res, rej) => {
      this.$axios.$post('api/auth/log/', payload).then((data) => {
        commit('SET_USER', data)
        res(data)
      }).catch((error) => { rej(console.log(error)) })
    })
  },
  REG({ commit }, payload) {
    return new Promise((res, rej) => {
      this.$axios.$post('api/auth/reg/', payload).then((data) => {
        res(data)
      }).catch((error) => { rej(console.log(error)) })
    })
  },
  GET_PLAYLISTS({ commit, state }) {
    return new Promise((res, rej) => {
      this.$axios.$get(`api/user-playlist/${state.user.email}/`).then((data) => {
        commit('SET_PLAYLISTS', data)
        res(data)
      }).catch((error) => { rej(console.log(error)) })
    })
  },
}
