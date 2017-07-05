export default {
  inserted: function (el, binding) {
    let items = binding.value.menuItems
    let scrollbar = binding.value.refs.Scrollbar
    let domItems = document.getElementsByClassName('sidebar-submenu')
    let scrollbarTransition = document.getElementsByClassName('vue-scrollbar-transition')[0]

    let calculateSizeHandler = event => {
      scrollbar.calculateSize()
    }

    scrollbarTransition.addEventListener('transitionend', calculateSizeHandler)

    let expandHandler = item => {
      return event => {
        if (!item.meta.expanded) {
          let childrenHeight = 48 // TODO: fix hardcode
          scrollbar.scrollToY(scrollbar.top - childrenHeight * item.children.length)
        } else {
          scrollbar.scrollToY(scrollbar.top + 48)
        }
        scrollbar.calculateSize()
      }
    }

    for (let i = 0; i < items.length; i++) {
      let item = items[i]
      let domItem = domItems[i]
      if (item.children) {
        domItem.addEventListener('transitionend', expandHandler(item))
      }
    }
  }
}
