import Toasted from 'vue-toasted'
import Vue from 'vue'

const toastOptions = {
  theme: 'none',
  position: 'bottom-center',
  className: 'vuestic-toast',
  iconPack: 'fontawesome',
  duration: 2500,
}

Vue.use(Toasted, toastOptions)

export default {
  methods: {
    showToast (msg, options) {
      this.$toasted.show(msg, options)
    },
  },
}
