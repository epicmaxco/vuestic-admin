export default function (el) {
  let ddToggle = el.querySelector('.dropdown-toggle')

  ddToggle.addEventListener('click', function () {
    el.classList.toggle('show')
  })
}
