let directive = {
  dom: null,
  inserted: (el, binding) => {
    let items = binding.value.menuItems
    let scrollbar = binding.value.refs.Scrollbar
    let childClassName = binding.value.childClassName
    let childHeight = binding.value.childHeight
    this.dom = {
      elements: document.getElementsByClassName(childClassName),
      handlers: []
    }
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
      let domItem = this.dom.elements[i]
      this.dom.handlers.push(expandHandler(item))
      if (item.children) {
        domItem.addEventListener('transitionend', this.dom.handlers[i])
      }
    }
  },
  unbind: () => {
    for (let i = 0; i < this.dom.elements.length; i++) {
      this.dom.elements[i].removeEventListener('transitionend', this.dom.handlers[i])
    }
  }
}

module.exports = directive
