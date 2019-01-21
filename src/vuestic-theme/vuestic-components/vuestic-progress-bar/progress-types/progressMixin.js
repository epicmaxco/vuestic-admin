import utils from '../../../../services/utils'
import {
  colorConfig,
  VuesticTheme
} from './../../vuestic-color-picker/VuesticTheme'

export const progressMixin = {
  props: {
    value: {
      type: Number,
      default: 0
    },
    theme: {
      type: String,
      default: 'Primary'
    },
    // If 'indeterminate' is 'true' 'value' prop will be ignored.
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    normalizedValue () {
      return utils.normalizeValue(this.value)
    },
    color () {
      return colorConfig[VuesticTheme[this.theme]]
    },
  }
}
