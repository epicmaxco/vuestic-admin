const menuItems = state => state.menu.items
const sidebarOpened = state => state.app.sidebar.opened
const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation
const config = state => state.app.config
const namesOfSetsOfIcons = state => state.icons.namesOfSetsOfIcons
const setsOfIcons = state => state.icons.setsOfIcons
const isAuthorized = state => state.app.isAuthorized

export {
  menuItems,
  toggleWithoutAnimation,
  sidebarOpened,
  config,
  namesOfSetsOfIcons,
  setsOfIcons,
  isAuthorized
}
