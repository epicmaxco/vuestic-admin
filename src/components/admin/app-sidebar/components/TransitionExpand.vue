<script>
/* adopted from https://github.com/maoberlehner/transition-to-height-auto-with-vue */
export default {
  name: 'TransitionExpand',
  functional: true,
  render (createElement, context) {
    const data = {
      props: {
        name: 'expand',
      },
      on: {
        afterEnter (element) {
          // eslint-disable-next-line no-param-reassign
          element.style.height = 'auto'
        },
        enter (element) {
          const { width } = getComputedStyle(element)

          /* eslint-disable no-param-reassign */
          element.style.width = width
          element.style.position = 'absolute'
          element.style.visibility = 'hidden'
          element.style.height = 'auto'
          /* eslint-enable */

          const { height } = getComputedStyle(element)

          /* eslint-disable no-param-reassign */
          element.style.width = null
          element.style.position = null
          element.style.visibility = null
          element.style.height = 0
          /* eslint-enable */

          // Force repaint to make sure the
          // animation is triggered correctly.
          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height

          setTimeout(() => {
            // eslint-disable-next-line no-param-reassign
            element.style.height = height
          })
        },
        leave (element) {
          const { height } = getComputedStyle(element)

          // eslint-disable-next-line no-param-reassign
          element.style.height = height

          // Force repaint to make sure the
          // animation is triggered correctly.
          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height

          setTimeout(() => {
            // eslint-disable-next-line no-param-reassign
            element.style.height = 0
          })
        },
      },
    }

    return createElement('transition', data, context.children)
  },
}
</script>

<style scoped>
  * {
    will-change: height;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
</style>

<style>
  .expand-enter-active,
  .expand-leave-active {
    transition: height 0.377s ease;
    overflow: hidden;
  }

  .expand-enter,
  .expand-leave-to {
    height: 0;
  }
</style>
