const menuItems = state => state.menu.items
const sidebarOpened = state => state.app.sidebar.opened
const config = state => state.app.config
const namesOfSetsOfIcons = state => state.icons.namesOfSetsOfIcons
const setsOfIcons = state => state.icons.setsOfIcons

export {
  menuItems,
  sidebarOpened,
  config,
  namesOfSetsOfIcons,
  setsOfIcons
}
