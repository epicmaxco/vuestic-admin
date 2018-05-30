export default {
  bind: function (el, binding) {
    let ddToggle = el.querySelector('.dropdown-toggle')
    let ddMenu = el.querySelector('.dropdown-menu')
    let ddItem = el.querySelector('.dropdown-menu-content')
    let closeOnMenuClick = binding.modifiers.closeOnMenuClick
    let isBlocked = binding.modifiers.isBlocked
    ddToggle.addEventListener('click', function (evt) {
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
    })

    window.addEventListener('click', function (evt) {
      if (!isBlocked) {
        el.classList.remove('show')
        ddMenu.classList.remove('show')
      }
    })

    ddItem.addEventListener('click', function () {
      el.classList.remove('show')
      ddMenu.classList.remove('show')
    })

    ddMenu.addEventListener('click', function (evt) {
      if (!closeOnMenuClick) {
        evt.stopPropagation()
      }
    })
  },
  unbind: function (el, binding) {
    window.removeEventListener('click')
    el.querySelector('.dropdown-toggle').removeEventListener('click')
    el.querySelector('.dropdown-menu').removeEventListener('click')
    el.querySelector('.dropdown-menu-content').removeEventListener('click')
  }
}
