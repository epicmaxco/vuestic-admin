import lazyLoading from './lazyLoading'

export default {
  name: 'Signup',
  path: '/signup',
  component: lazyLoading('signup/Signup'),
  meta: {
    default: false,
    title: 'Signup'
  }
}
