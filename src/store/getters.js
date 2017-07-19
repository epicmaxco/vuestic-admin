const menuItems = state => state.menu.items
const sidebarOpened = state => state.app.sidebar.opened
const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation
const config = state => state.app.config

export {
  menuItems,
  toggleWithoutAnimation,
  sidebarOpened,
  config
}
