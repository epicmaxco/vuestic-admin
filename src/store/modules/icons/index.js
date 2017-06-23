/**
 * Created by yarik on 14.6.17.
 */
const state = {
  namesOfSetsOfIcons: ['font-awesome', 'ionicons', 'glyphicons', 'iconic-stroke', 'entypo', 'brandico', 'fontelico', 'maki', 'openweb'],
  setsOfIcons: {}
}

const mutations = {
  addSetOfIcons (state, name, set) {
    state.setsOfIcons[name] = set
  },
  downloadSetsOfIcons (state) {
    for (let name of state.namesOfSetsOfIcons) {
      if (!state.setsOfIcons[name]) {
        let set = require('./sets/' + name + '.json')
        mutations.addSetOfIcons(state, name, set)
      }
    }
  }
}

const getters = {
  setOfIconsByName: (state, getters) => (name) => {
    if (!state.setsOfIcons[name]) {
      mutations.downloadSetsOfIcons(state)
    }
    return state.setsOfIcons[name]
  }
}

export default {
  state,
  getters,
  mutations
}
