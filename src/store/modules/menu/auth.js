/**
 * Created by yarik on 18.7.17.
 */
import lazyLoading from './lazyLoading'

export default {
  name: 'auth',
  meta: {
    expanded: false,
    title: 'Auth'
  },
  children: [
    {
      name: 'Login',
      path: '/login',
      component: lazyLoading('login/Login'),
      meta: {
        default: false,
        title: 'Login'
      }
    },
    {
      name: 'Signup',
      path: '/signup',
      component: lazyLoading('signup/Signup'),
      meta: {
        default: false,
        title: 'Signup'
      }
    }
  ]
}
