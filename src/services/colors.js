const themes = {
  primary: '#40e583',
  success: '#40e583',
  info: '#2c82e0',
  danger: '#e34b4a',
  warning: '#ffc202',
  gray: '#babfc2',
  dark: '#34495e'
}

export const ColorPlugin = {
  install (Vue, options) {
    if (options && options.theme) {
      Object.assign(Vue.prototype.$themes, options.theme)
    } else {
      Vue.prototype.$themes = themes
    }

    /* eslint-disable no-new */

    new Vue({ data: { themes: Vue.prototype.$themes } })
  }
}
