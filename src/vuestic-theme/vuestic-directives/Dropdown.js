export default {
  bind: function (el, binding) {
    let ddToggle = el.querySelector('.dropdown-toggle')
    let ddToggleInput = el.querySelector('.dropdown-toggle input')
    let ddMenu = el.querySelector('.dropdown-menu')
    let ddItem = el.querySelector('.dropdown-menu-content')
    let closeOnMenuClick = binding.modifiers.closeOnMenuClick
    let isBlocked = binding.modifiers.isBlocked

    ddToggle.addEventListener('click', function (evt) {
      console.log(evt.target)
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
  unbind: () => {
    window.removeEventListener('click', this.listener)
  }
}
