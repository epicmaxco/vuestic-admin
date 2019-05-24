export const KeyboardOnlyFocusMixin = {
  data () {
    return {
      isKeyboardFocused: false,
      hasMouseDown: false,
    }
  },
  methods: {
    onFocus (e) {
      if (this.hasMouseDown) {
        return
      }
      this.isKeyboardFocused = true
    },
  },
}
