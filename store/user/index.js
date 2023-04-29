import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  user: {
    username: 'admin',
    email: 'admin@gmail.com'
  },
  singles: [
    {
      slug_id: '1',
      cover: 'https://media.pitchfork.com/photos/63222b2752d4bd45efccbadf/1:1/w_600/Yeat.jpg',
      name: 'AftërLyfe',
      singers: 'Yeat',
      featuring: null,
      type: 'Single',
      date: '24.3.2023'
    },
    {
      slug_id: '2',
      cover: 'https://media.pitchfork.com/photos/626be39b8eeb4ac0c1275b4e/master/w_1280%2Cc_limit/Future-I-Never-Liked-You-2022.jpeg',
      name: 'I Never Liked You',
      singers: 'Future',
      featuring: null,
      type: 'Single',
      date: '02.01.2022'
    }
  ]
})
