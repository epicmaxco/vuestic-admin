export default {
  bind: function (el, binding) {
    let ddToggle = el.querySelector('.dropdown-toggle')
    let ddMenu = el.querySelector('.dropdown-menu')
    let closeOnMenuClick = binding.modifiers.closeOnMenuClick

    ddToggle.addEventListener('click', function (evt) {
      evt.preventDefault()
      let isShown = el.classList.contains('show')
      setTimeout(() => el.classList.toggle('show', !isShown))
    })

    window.addEventListener('click', function () {
      el.classList.remove('show')
    })

    ddMenu.addEventListener('click', function (evt) {
      if (!closeOnMenuClick) {
        evt.stopPropagation()
      }
    })
  }
}
