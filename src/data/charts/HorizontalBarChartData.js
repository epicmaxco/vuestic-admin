export const getHorizontalBarChartData = (themes) => ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Vuestic Satisfaction Score',
      backgroundColor: themes.warning,
      borderColor: 'transparent',
      data: [80, 90, 50, 70, 60, 90, 50, 90, 80, 40, 72, 93],
    },
    {
      label: 'Bulma Satisfaction Score',
      backgroundColor: themes.danger,
      borderColor: 'transparent',
      data: [20, 30, 20, 40, 50, 40, 15, 60, 30, 20, 42, 53],
    },
  ],
})
