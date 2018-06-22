import utils from 'services/utils'
import router from './../router/index'

const sidebarOpened = state => state.app.sidebar.opened
const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation
const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading
const breadcrumbs = state => {
  return (keyword) => utils.findInNestedByName(router.options.routes[3], keyword)
}

export {
  toggleWithoutAnimation,
  sidebarOpened,
  config,
  palette,
  isLoading,
  breadcrumbs
}
