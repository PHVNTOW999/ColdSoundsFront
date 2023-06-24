import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  isAuth: false,
  user: null,
}

export const getters = {
  IS_AUTH(state) {
    return state.isAuth
  },
  USER(state) {
    return state.user
  }
}

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload
    state.isAuth = true
  },
}

export const actions = {
  LOGIN({ commit }, payload) {
    return new Promise((res, rej) => {
      this.$axios.$post('api/auth/log/', payload).then((data) => {
        commit('SET_USER', data)
        res(data.data)
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
}
