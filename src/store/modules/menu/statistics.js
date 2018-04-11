import lazyLoading from './lazyLoading'

export default {
  name: 'Statistics',
  meta: {
    expanded: false,
    title: 'menu.statistics',
    iconClass: 'vuestic-icon vuestic-icon-statistics'
  },

  children: [
    {
      name: 'menu.charts',
      path: '/statistics/charts',
      component: lazyLoading('statistics/charts/Charts'),
      meta: {
        iconClass: 'entypo entypo-flashlight',
        title: 'menu.charts'
      }
    },
    {
      name: 'menu.progressBars',
      path: '/statistics/progress-bars',
      component: lazyLoading('statistics/progress-bars/ProgressBars'),
      meta: {
        title: 'menu.progressBars'
      }
    }
  ]
}
