import VuesticToasted from './VuesticToasted'

const VuesticMixinsPlugin = {
  install (Vue, options) {
    Vue.mixin(VuesticToasted)
  }
}

export default VuesticMixinsPlugin
