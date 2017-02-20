import lazyLoading from './lazyLoading'

export default {
  name: 'Statistics',
  meta: {
    expanded: false,
    title: 'Statistics',
    iconClass: 'fa fa-bar-chart-o'
  },

  children: [
    {
      name: 'Charts',
      path: '/statistics/charts',
      component: lazyLoading('statistics/charts/Charts'),
      meta: {
        title: 'Charts'
      }
    },
    {
      name: 'ProgressBars',
      path: '/statistics/progress-bars',
      component: lazyLoading('statistics/progress-bars/ProgressBars'),
      meta: {
        title: 'Progress Bars'
      }
    }
  ]
}
