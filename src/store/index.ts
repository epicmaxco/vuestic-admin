// @ts-nocheck
import { createStore } from 'vuex'
import app from './modules/app'
import * as getters from './getters'

export default createStore({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app,
  }
})
