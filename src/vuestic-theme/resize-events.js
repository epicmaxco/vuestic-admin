import { DebounceLoader } from 'asva-executors'

export function registerVuesticObject (Vue) {
  const $va = Vue.prototype.$va = new Vue({
    data () {
      return {}
    },
  })

  const resizeDebounceLoader = new DebounceLoader(
    async resizeEvent => {
      $va.$cast('resizeEnd', resizeEvent)
    },
    150,
  )

  window.addEventListener('resize', resizeEvent => {
    $va.$cast('resize', resizeEvent)
    resizeDebounceLoader.run(resizeEvent)
  })
}
