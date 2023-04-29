import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  links: [
    {
      id: 0,
      name: 'Home',
      path: '/'
    },
    {
      id: 1,
      name: 'News',
      path: '/News'
    },
    {
      id: 2,
      name: 'single page',
      path: '/Single'
    }
  ]
})
