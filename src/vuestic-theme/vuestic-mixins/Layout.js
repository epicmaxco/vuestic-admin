export default {
  mounted () {
    window.addEventListener('resize', this.setMinimizedState)
    this.setMinimizedState()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setMinimizedState)
  },
  methods: {
    setMinimizedState () {
      if (document.documentElement.clientWidth < this.mobileWidth && !this.minimized) {
        this.minimized = true
      }
      if (document.documentElement.clientWidth > this.mobileWidth && this.minimized) {
        this.minimized = false
      }
    },
  },
}
