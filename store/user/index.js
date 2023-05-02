import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  user: {
    username: 'admin',
    email: 'admin@gmail.com'
  },
  artists: [
    {
      uuid: 0,
      name: 'Yeat',
      albums: [0],
      singles: [0, 1, 3, 5]
    },
    {
      uuid: 1,
      name: 'Future',
      albums: [2],
      singles: [1]
    }
  ],
  singles: [
    {
      uuid: '0',
      cover: 'https://media.pitchfork.com/photos/63222b2752d4bd45efccbadf/1:1/w_600/Yeat.jpg',
      name: 'AftërLyfe',
      artists: ['Yeat'],
      feat: [],
      type: 'Single',
      date: '24.3.2023'
    },
    {
      uuid: '1',
      cover: 'https://media.pitchfork.com/photos/626be39b8eeb4ac0c1275b4e/master/w_1280%2Cc_limit/Future-I-Never-Liked-You-2022.jpeg',
      name: 'I Never Liked You',
      artists: ['Future', 'Yeat'],
      feat: [],
      type: 'Single',
      date: '02.01.2022'
    }
  ]
})
