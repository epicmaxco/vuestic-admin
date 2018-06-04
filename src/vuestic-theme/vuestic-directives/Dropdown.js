export default {
  bind: function (el, binding) {
    // let dd = el.querySelector('.dropdown')
    let ddToggle = el.querySelector('.dropdown-toggle')
    let ddToggleInput = el.querySelector('.dropdown-toggle input')
    let ddMenu = el.querySelector('.dropdown-menu')
    let ddItem = el.querySelector('.dropdown-menu-content')
    let closeOnMenuClick = binding.modifiers.closeOnMenuClick
    let isBlocked = binding.modifiers.isBlocked

    if (isBlocked) {
      ddToggleInput.addEventListener('click', (evt) => {
        let isShown = el.classList.contains('show')
        setTimeout(() => {
          if (!isShown) {
            el.classList.toggle('show', !isShown)
            ddMenu.classList.toggle('show', !isShown)
          }
        })
      })
    } else {
      ddToggle.addEventListener('click', function (evt) {
        let isShown = el.classList.contains('show')
        el.classList.toggle('show', !isShown)
        ddMenu.classList.toggle('show', !isShown)
      })
    }

    window.addEventListener('click', function (evt) {
      if (evt.target !== ddToggleInput) {
        el.classList.remove('show')
        ddMenu.classList.remove('show')
      }
    })

    ddItem.addEventListener('click', function (evt) {
      el.classList.remove('show')
      ddMenu.classList.remove('show')
      evt.stopPropagation()
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
