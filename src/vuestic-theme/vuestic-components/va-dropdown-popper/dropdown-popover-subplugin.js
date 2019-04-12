export const DropdownPopperPlugin = {
  install (Vue) {
    Vue.prototype.$closeDropdown = function () {
      let vm = this
      // Hide first parent dropdown.
      while ((vm = vm.$parent)) {
        const name = vm.$options.name
        if (name === 'va-dropdown-popper') {
          vm.hide()
          break
        }
      }
    }
  },
}
