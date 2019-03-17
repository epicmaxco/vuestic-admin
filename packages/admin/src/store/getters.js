const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation
const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading

export {
  toggleWithoutAnimation,
  config,
  palette,
  isLoading,
}
