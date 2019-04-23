export default {

  bind (el, binding) {
    let navbar = el.querySelector('.va-navbar')
    let sidebar = el.querySelector('.va-sidebar')

    const mobileWidth = 600

    el.resizeWindow = (evt) => {
      setTimeout(function () {
        let openedDropdown = navbar.querySelector('.show')
        let selector = navbar.querySelector('.header-selector')
        if (openedDropdown && document.documentElement.clientWidth < mobileWidth &&
          !evt.target.classList.contains('header-selector')) {
          sidebar.classList.add('va-sidebar--hidden')
          selector.classList.remove('i-menu-expanded')
          selector.classList.add('i-menu-collapsed')
        }
        if (evt.target.classList.contains('header-selector')) {
          sidebar.classList.toggle('va-sidebar--hidden')
          selector.classList.toggle('i-menu-expanded')
          selector.classList.toggle('i-menu-collapsed')
        }
      }, 0)
    }

    navbar.addEventListener('click', el.resizeWindow)

    sidebar.addEventListener('click', () => {
      if (document.documentElement.clientWidth < mobileWidth) {
        sidebar.classList.add('va-sidebar--hidden')
      }
    })
  },
  unbind: (el) => {
    el.removeEventListener('click', el.resizeWindow)
  },
}
