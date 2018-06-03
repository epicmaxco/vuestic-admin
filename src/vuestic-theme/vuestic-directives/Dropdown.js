export default {
  bind: function (el, binding) {
    // let dd = el.querySelector('.dropdown')
    let ddToggle = el.querySelector('.dropdown-toggle input')
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
      evt.stopPropagation()
    })

    // ddMenu.onblur = function (evt) {
    //   console.log(evt.onfocus())
    //   el.classList.remove('show')
    //   ddMenu.classList.remove('show')
    // }
    //
    ddToggle.addEventListener('focusout', () => {
      console.log('af')
      el.classList.remove('show')
      ddMenu.classList.remove('show')
    })

    // window.addEventListener('click', function (evt) {
    //   el.classList.remove('show')
    //   ddMenu.classList.remove('show')
    //   evt.stopPropagation()
    // })

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

    // ddToggle.addEventListener('focusin', () => {
    //   console.log('FOCUSOUTTTTTT')
    //   ddMenu.classList.remove('show')
    //   el.classList.remove('show')
    // })

    ddToggle.addEventListener('focusout', () => {
      // console.log('FOCUSOUTTTTTT')
      // ddMenu.classList.remove('show')
      // el.classList.remove('show')
    })
  },
  unbind: function (el, binding) {
    window.removeEventListener('click')
    el.querySelector('.dropdown-toggle').removeEventListener('click')
    el.querySelector('.dropdown-menu').removeEventListener('click')
    el.querySelector('.dropdown-menu-content').removeEventListener('click')
  }
}
