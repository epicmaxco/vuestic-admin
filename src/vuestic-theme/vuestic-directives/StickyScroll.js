export default {
  bind: (el, binding) => {
    let duration = binding.value.duration || 500
    let isAnimated = binding.value.animate

    let observer = new MutationObserver(scrollToBottom)
    let config = { childList: true }
    observer.observe(el, config)

    function animateScroll (duration) {
      let start = el.scrollTop
      let end = el.scrollHeight
      let change = end - start
      let increment = 20

      function easeInOut (currentTime, start, change, duration) {
        currentTime /= duration / 2
        if (currentTime < 1) {
          return change / 2 * currentTime * currentTime + start
        }
        currentTime -= 1
        return -change / 2 * (currentTime * (currentTime - 2) - 1) + start
      }

      function animate (elapsedTime) {
        elapsedTime += increment
        var position = easeInOut(elapsedTime, start, change, duration)
        el.scrollTop = position

        if (elapsedTime < duration) {
          setTimeout(function () {
            animate(elapsedTime)
          }, increment)
        }
      }

      animate(0)
    }

    function scrollToBottom () {
      if (isAnimated) {
        animateScroll(duration)
      } else {
        el.scrollTop = el.scrollHeight
      }
    }
  }
}
