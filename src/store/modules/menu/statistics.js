import lazyLoading from './lazyLoading'

export default {
  name: 'Statistics',
  path: '/statistics',
  meta: {
    expanded: false
  },
  component: lazyLoading('charts', true),

  children: [
    {
      name: 'Charts',
      path: 'charts',
      component: lazyLoading('statistics/charts/Charts')
    },
    {
      name: 'ProgressBars',
      path: 'progress-bars',
      component: lazyLoading('statistics/progress-bars/ProgressBars')
    }
  ]
}
