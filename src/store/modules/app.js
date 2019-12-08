const state = {
  sidebar: {
    opened: false,
  },
  config: {
    palette: {
      primary: '#6E85E8',
      secondary: '#8396A5',
      success: '#8FDB8B',
      info: '#74BBFF',
      danger: '#F67170',
      warning: '#FFD55E',
      gray: '#babfc2',
      white: '#fff',
      black: '#34495E',
      fontColor: '#34495e',
      transparent: 'transparent',
      lighterGray: '#ddd',
    },
  },
  isLoading: true,
}

const mutations = {
  setLoading (state, isLoading) {
    state.isLoading = isLoading
  },
}

const actions = {
}

export default {
  state,
  mutations,
  actions,
}
