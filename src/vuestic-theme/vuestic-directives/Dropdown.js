export default {
  bind: function (el, binding) {
    let ddToggle = el.querySelector('.dropdown-toggle')
    let ddMenu = el.querySelector('.dropdown-menu')
    let ddItem = el.querySelector('.dropdown-menu-content')
    let closeOnMenuClick = binding.modifiers.closeOnMenuClick
    let isBlocked = binding.modifiers.isBlocked
    window.handleClickOnToggle = evt => {
      evt.preventDefault()
      let isShown = el.classList.contains('show')
      setTimeout(() => {
        if (isBlocked) {
          if (!isShown) {
            el.classList.toggle('show', !isShown)
            ddMenu.classList.toggle('show', !isShown)
          }
        } else {
          el.classList.toggle('show', !isShown)
          ddMenu.classList.toggle('show', !isShown)
        }
      })
    }

    ddToggle.addEventListener('click', window.handleClickOnToggle)

    window.handleClickOnWindow = () => {
      if (!isBlocked) {
        el.classList.remove('show')
        ddMenu.classList.remove('show')
      }
    }
    window.addEventListener('click', window.handleClickOnWindow)

    window.handleClickOnItem = () => {
      el.classList.remove('show')
      ddMenu.classList.remove('show')
    }
    ddItem.addEventListener('click', window.handleClickOnItem)

    ddMenu.addEventListener('click', function (evt) {
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
