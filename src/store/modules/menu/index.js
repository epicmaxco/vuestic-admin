import * as types from '../../mutation-types'
import statistics from './statistics'
import forms from './forms'
import dashboard from './dashboard'
import ui from './ui'
import maps from './maps'
import TEST_SIGNUP from './TEST_SIGNUP'

const state = {
  items: [
    dashboard,
    statistics,
    forms,
    ui,
    maps,
    TEST_SIGNUP
  ]
}

const mutations = {
  [types.TOGGLE_EXPAND_MENU_ITEM] (state, payload) {
    let menuItem = payload.menuItem
    let expand = payload.expand
    if (menuItem.children && menuItem.meta) {
      menuItem.meta.expanded = expand
    }
  }
}

const actions = {
  toggleExpandMenuItem ({commit}, payload) {
    commit(types.TOGGLE_EXPAND_MENU_ITEM, payload)
  }
}

export default {
  state,
  mutations,
  actions
}
