export const state = {
  singles: [],
  albums: []
  // artist: []
}

export const getters = {
  SINGLES(state) {
    return state.singles
  },
  ALBUMS(state) {
    return state.albums
  }
}

export const mutations = {
  SET_SINGLES(state, payload) {
    state.singles = payload
  },
  SET_ALBUMS(state, payload) {
    state.albums = payload
  }
  // SET_ARTIST()
}

export const actions = {
  GET_SINGLES({ commit }) {
    return new Promise((res, rej) => {
      this.$axios.$get('api/singles/').then((data) => {
        commit('SET_SINGLES', data)
        res(data)
      }).catch((error) => { rej(console.log(error)) })
    })
  },
  GET_ALBUMS({ commit }) {
    return new Promise((res, rej) => {
      this.$axios.$get('api/albums/').then((data) => {
        commit('SET_ALBUMS', data)
        res(data)
      }).catch((error) => {
        // при ошибке тут eventBus!!!
        rej(console.log(error))
      })
    })
  }
  // GET_ARTIST({ commit }, payload) {
  //   return new Promise((res, rej) => {
  //     this.$axios.$get(`api/artist/${payload}`).then((data) => {
  //       commit('SET_ARTIST', data)
  //       res(data)
  //     }).catch((error) => { rej(console.log(error)) })
  //   })
  // },
}
