import * as types from '../mutation-types'

const state = {
  sidebar: {
    opened: false,
    withoutAnimation: false
  },
  config: {
    googleMaps: {
      apiKey: 'AIzaSyBNAqPrTQoz9P4NBlDDyfxrnKiafkaL8iQ'
    },
    windowMatchSizeLg: '(min-width: 992px)'
  }
}

const mutations = {
  [types.TOGGLE_SIDEBAR] (state, opened) {
    state.sidebar.opened = opened
  },
  [types.TOGGLE_WITHOUT_ANIMATION] (state, value) {
    state.sidebar.withoutAnimation = value
  }
}

const actions = {
  toggleSidebar ({ commit }, opened) {
    commit(types.TOGGLE_SIDEBAR, opened)
  },
  isToggleWithoutAnimation ({ commit }, value) {
    commit(types.TOGGLE_WITHOUT_ANIMATION, value)
  }
}

export default {
  state,
  mutations,
  actions
}
