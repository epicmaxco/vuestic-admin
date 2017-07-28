import * as types from '../../mutation-types'
import statistics from './statistics'
import forms from './forms'
import dashboard from './dashboard'
import ui from './ui'
import maps from './maps'
import tables from './tables'
import auth from './auth'
import extra from './extra'

const state = {
  items: [
    dashboard,
    statistics,
    forms,
    tables,
    ui,
    extra,
    auth,
    maps
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
