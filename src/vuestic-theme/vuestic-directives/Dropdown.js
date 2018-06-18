export default {

  bind: function (el, binding) {
    let dropdownToggle = el.querySelector('.dropdown-toggle')
    let dropdownToggleInput = el.querySelector('.dropdown-toggle input')
    let dropdownMenu = el.querySelector('.dropdown-menu')
    let dropdownItem = el.querySelector('.dropdown-menu-content')
    let dropdownIon = el.querySelector('.ion')
    let closeOnMenuClick = binding.modifiers.closeOnMenuClick
    let isBlocked = binding.modifiers.isBlocked

    dropdownToggle.addEventListener('click', (event) => {
      event.preventDefault()
      let isShown = el.classList.contains('show')
      setTimeout(() => {
        if (isBlocked) {
          if (!isShown) {
            dropdownIon.classList.add('ion-ios-arrow-up')
            el.classList.toggle('show', !isShown)
            dropdownMenu.classList.toggle('show', !isShown)
          }
        } else {
          el.classList.toggle('show', !isShown)
          dropdownMenu.classList.toggle('show', !isShown)
        }
      })
    })

    el.removeShow = (event) => {
      if (event.target !== dropdownToggleInput) {
        if (dropdownIon) {
          if (dropdownIon.classList.contains('ion-ios-arrow-up')) {
            dropdownIon.classList.remove('ion-ios-arrow-up')
          }
        }
        el.classList.remove('show')
        dropdownMenu.classList.remove('show')
      }
    }

    window.addEventListener('click', el.removeShow)

    dropdownMenu.addEventListener('click', (evt) => {
      if (!closeOnMenuClick) {
        evt.stopPropagation()
      }
    })

    if (dropdownItem) {
      dropdownItem.addEventListener('click', () => {
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
