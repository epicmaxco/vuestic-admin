export default function (el) {
  let ddToggle = el.querySelector('.dropdown-toggle')
  let ddMenu = el.querySelector('.dropdown-menu')

  ddToggle.addEventListener('click', function (evt) {
    el.classList.toggle('show')
    evt.stopPropagation()
  })

  window.addEventListener('click', function () {
    el.classList.remove('show')
  })

  ddMenu.addEventListener('click', function (evt) {
    evt.stopPropagation()
  })
}
