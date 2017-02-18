import lazyLoading from './lazyLoading'

export default {
  name: 'Statistics',
  meta: {
    expanded: false
  },
  component: lazyLoading('charts', true),

  children: [
    {
      name: 'Charts',
      path: '/statistics/charts',
      component: lazyLoading('statistics/charts/Charts')
    },
    {
      name: 'ProgressBars',
      path: '/statistics/progress-bars',
      component: lazyLoading('statistics/progress-bars/ProgressBars')
    }
  ]
}
