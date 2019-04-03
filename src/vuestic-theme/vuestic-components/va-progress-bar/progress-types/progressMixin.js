import { normalizeValue } from '../../../../services/utils'

export const progressMixin = {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: 'success',
    },
    // If 'indeterminate' is 'true' 'value' prop will be ignored.
    indeterminate: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    normalizedValue () {
      return normalizeValue(this.value)
    },
  },
}
