export default {

  bind: function (el, binding) {
    let ddToggle = el.querySelector('.dropdown-toggle')
    let ddToggleInput = el.querySelector('.dropdown-toggle input')
    let ddMenu = el.querySelector('.dropdown-menu')
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

    el.a = (event) => {
      console.log('idioot')
      if (event.target !== ddToggleInput) {
        el.classList.remove('show')
        ddMenu.classList.remove('show')
      }
    }

    window.addEventListener('click', el.a)

    ddMenu.addEventListener('click', function (evt) {
      if (!closeOnMenuClick) {
        evt.stopPropagation()
      }
    })
  },
  unbind: (el) => {
    window.removeEventListener('click', el.a)
  }
}
