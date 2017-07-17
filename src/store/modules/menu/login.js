import lazyLoading from './lazyLoading'

export default {
  name: 'Login',
  path: '/login',
  component: lazyLoading('login/Login'),
  meta: {
    default: false,
    title: 'Login'
  }
}
