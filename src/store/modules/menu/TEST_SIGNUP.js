import lazyLoading from './lazyLoading'

export default {
  name: 'TEST_SIGNUP',
  path: '/TEST_SIGNUP',
  component: lazyLoading('signup/Signup'),
  meta: {
    default: true,
    title: 'TEST_SIGNUP'
  }
}
