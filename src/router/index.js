import Vue from 'vue'
import Router from 'vue-router'
import Charts from 'components/statistics/charts/Charts'
import ProgressBars from 'components/statistics/progress-bars/ProgressBars'
import Dashboard from 'components/dashboard/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/statistics/charts',
      name: 'charts',
      component: Charts
    },
    {
      path: '/statistics/progress-bars',
      name: 'progress-bars',
      component: ProgressBars
    },
    {path: '/', redirect: { name: 'dashboard' }}
  ]
})
