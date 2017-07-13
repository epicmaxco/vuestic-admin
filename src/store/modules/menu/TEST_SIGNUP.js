import lazyLoading from './lazyLoading'

export default {
  name: 'TEST_SIGNUP',
  meta: {
    expanded: false,
    title: 'TEST-SIGNUP'
  },
  path: '/signup',
  component: lazyLoading('signup/Signup')
}
