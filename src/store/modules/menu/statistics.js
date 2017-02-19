import lazyLoading from './lazyLoading'

export default {
  name: 'Statistics',
  meta: {
    expanded: false,
    title: 'Statistics'
  },
  component: lazyLoading('charts', true),

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
