export default {

  bind: function (el, binding) {
    let dropdownToggle = el.querySelector('.dropdown-toggle')
    let dropdownToggleInput = el.querySelector('.dropdown-toggle input')
    let dropdownMenu = el.querySelector('.dropdown-menu')
    let dropdownItem = el.querySelector('.dropdown-menu-content')
    let closeOnMenuClick = binding.modifiers.closeOnMenuClick
    let isBlocked = binding.modifiers.isBlocked

    dropdownToggle.addEventListener('click', (evt) => {
      evt.preventDefault()
      let isShown = el.classList.contains('show')
      setTimeout(() => {
        if (isBlocked) {
          if (!isShown) {
            el.classList.toggle('show', !isShown)
            dropdownMenu.classList.toggle('show', !isShown)
          }
        } else {
          el.classList.toggle('show', !isShown)
          dropdownMenu.classList.toggle('show', !isShown)
        }
      })
    })

    el.a = (event) => {
      if (event.target !== dropdownToggleInput) {
        el.classList.remove('show')
        dropdownMenu.classList.remove('show')
      }
    }

    window.addEventListener('click', el.a)

    dropdownMenu.addEventListener('click', (evt) => {
      if (!closeOnMenuClick) {
        evt.stopPropagation()
      }
    })

    dropdownItem.addEventListener('click', () => {
      dropdownMenu.classList.remove('show')
      el.classList.remove('show')
    })
  },
  unbind: (el) => {
    window.removeEventListener('click', el.a)
  },
}
