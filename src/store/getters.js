const menuItems = state => state.menu.items
const sidebarOpened = state => state.app.sidebar.opened
const config = state => state.app.config

export {
  menuItems,
  sidebarOpened,
  config
}
