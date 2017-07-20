let directive = {
  dom: null,
  scrollbarTransition: {
    el: null,
    handler: null
  },
  inserted: (el, binding) => {
    let items = binding.value.menuItems
    let scrollbar = binding.value.refs.Scrollbar
    let childClassName = binding.value.childClassName
    let childHeight = binding.value.childHeight
    directive.dom = {
      elements: document.getElementsByClassName(childClassName),
      handlers: []
    }
    let parentId = binding.value.parentId
    directive.scrollbarTransition.el = document.getElementById(parentId).getElementsByClassName('vue-scrollbar-transition')[0]

    directive.scrollbarTransition.handler = event => {
      scrollbar.calculateSize()
    }

    directive.scrollbarTransition.el.addEventListener('transitionend', directive.scrollbarTransition.handler)

    let expandHandler = item => {
      return event => {
        if (!item.meta.expanded) {
          scrollbar.scrollToY(scrollbar.top - childHeight * item.children.length)
        } else {
          scrollbar.scrollToY(scrollbar.top + childHeight)
        }
        scrollbar.calculateSize()
      }
    }

    for (let i = 0; i < items.length; i++) {
      let item = items[i]
      let domItem = directive.dom.elements[i]
      directive.dom.handlers.push(expandHandler(item))
      if (item.children) {
        domItem.addEventListener('transitionend', directive.dom.handlers[i])
      }
    }
  },
  unbind: () => {
    directive.scrollbarTransition.el.removeEventListener('transitionend', directive.scrollbarTransition.handler)

    for (let i = 0; i < directive.dom.elements.length; i++) {
      directive.dom.elements[i].removeEventListener('transitionend', directive.dom.handlers[i])
    }
  }
}

module.exports = directive
