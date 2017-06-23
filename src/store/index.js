import Vue from 'vue'
import Vuex from 'vuex'

import menu from './modules/menu'
import app from './modules/app'
import icons from './modules/icons/'

import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,  // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    menu,
    app,
    icons
  },
  state: {},
  mutations: {}
})

export default store
