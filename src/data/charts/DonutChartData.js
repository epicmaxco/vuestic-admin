export const getDonutChartData = (themes) => ({
  labels: ['North America', 'South America', 'Australia'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [themes['danger'], themes['info'], themes['success']],
    data: [2478, 5267, 734],
  }],
})
