export default {
  bind: function (el, binding) {
    let dropDownToggle = el.querySelector('.dropdown-toggle')
    let dropDownMenu = el.querySelector('.dropdown-menu')
    let dropDownItem = el.querySelector('.dropdown-menu-content')
    let closeOnMenuClick = binding.modifiers.closeOnMenuClick
    let isBlocked = binding.modifiers.isBlocked
    window.handleClickOnToggle = evt => {
      evt.preventDefault()
      let isShown = el.classList.contains('show')
      setTimeout(() => {
        if (isBlocked) {
          if (!isShown) {
            el.classList.toggle('show', !isShown)
            dropDownMenu.classList.toggle('show', !isShown)
          }
        } else {
          el.classList.toggle('show', !isShown)
          dropDownMenu.classList.toggle('show', !isShown)
        }
      })
    }

    dropDownToggle.addEventListener('click', window.handleClickOnToggle)

    window.handleClickOnWindow = () => {
      el.classList.remove('show')
      dropDownMenu.classList.remove('show')
    }
    window.addEventListener('click', window.handleClickOnWindow)

    window.handleClickOnItem = () => {
      el.classList.remove('show')
      dropDownMenu.classList.remove('show')
    }
    dropDownItem.addEventListener('click', window.handleClickOnItem)

    dropDownMenu.addEventListener('click', function (evt) {
      if (!closeOnMenuClick) {
        evt.stopPropagation()
      }
    })
  },
  unbind: function (el, binding) {
    window.removeEventListener('click', window.handleClickOnWindow)
    window.removeEventListener('click', window.handleClickOnToggle)
    window.removeEventListener('click', window.handleClickOnItem)
  }
}
