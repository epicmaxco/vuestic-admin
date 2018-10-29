export default {

  bind: function (el, binding) {
    // HACK Probably could be done much better.
    // Gonna explain what's going on here.

    // ** Declaring stuffs. **

    // We find child with .dropdown-toggle class. It's supposed to open dropdown on click.
    const dropdownToggle = el.querySelector('.dropdown-toggle')
    // We also find an input.
    const dropdownToggleInput = el.querySelector('.dropdown-toggle input')
    // And other stuff.
    const dropdownMenu = el.querySelector('.dropdown-menu')
    const dropdownMenuContent = el.querySelector('.dropdown-menu-content')

    // HACK We find a toggle icon by icon class... Which is weird.
    const dropdownIon = el.querySelector('.ion')

    // These are directive modifiers. Which we can exploit to modify dropdown behaviour.
    const closeOnMenuClick = binding.modifiers.closeOnMenuClick

    const value = binding.value || {}
    const isBlocked = value.isBlocked || false

    const onDropdownClose = value.onDropdownClose || (() => {
    })

    // ** Checking if declarations are sane. **

    if (!dropdownToggle) {
      throw new Error('Dropdown should have an element with .dropdown-toggle class.')
    }

    // ** Adding listeners **

    dropdownToggle.addEventListener('click', (event) => {
      event.preventDefault()
      const isShown = el.classList.contains('show')
      setTimeout(() => {
        if (isBlocked && isShown) {
          return
        }

        // That probably means that component in question is select.
        if (isBlocked) {
          // HACK '.ion-ios-arrow-down' class stays,
          // but is overrided by 'ion-ios-arrow-up'
          // so it works as if we swap the classes.
          dropdownIon.classList.add('ion-ios-arrow-up')
        }

        el.classList.toggle('show', !isShown)
        dropdownMenu.classList.toggle('show', !isShown)
      })
    })

    const removeShow = (event) => {
      if (event.target === dropdownToggleInput) {
        return
      }

      // Notifying parent that dropdown is closing.
      onDropdownClose()

      // Again, probably means we're dealing with select here.
      if (dropdownIon) {
        if (dropdownIon.classList.contains('ion-ios-arrow-up')) {
          dropdownIon.classList.remove('ion-ios-arrow-up')
        }
      }
      el.classList.remove('show')
      dropdownMenu.classList.remove('show')
    }
    window.addEventListener('click', removeShow)
    // We attach function to el to be able to remove event listeners from window on unbind.
    el.removeShow = removeShow

    window.addEventListener('click', el.removeShow)
    // Probably also checking if element is select.
    if (dropdownMenu) {
      dropdownMenu.addEventListener('click', (event) => {
        if (!closeOnMenuClick) {
          event.stopPropagation()
        }
      })
    }

    // HACK Not sure why, but some dropdowns have dropdown-menu-context, when some do not...
    // And if we have one - it should close on click seemingly.
    if (dropdownMenuContent) {
      dropdownMenuContent.addEventListener('click', () => {
        onDropdownClose()
        if (dropdownIon) {
          if (dropdownIon.classList.contains('ion-ios-arrow-up')) {
            dropdownIon.classList.remove('ion-ios-arrow-up')
          }
        }
        dropdownMenu.classList.remove('show')
        el.classList.remove('show')
      })
    }
  },
  unbind: (el) => {
    window.removeEventListener('click', el.removeShow)
  },
}
