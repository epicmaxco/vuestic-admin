import store from 'store'

export default {
  inserted: function (el) {
    window.addEventListener('resize', function () {
      store.dispatch('toggleSidebar', true)
    })
  }
}

