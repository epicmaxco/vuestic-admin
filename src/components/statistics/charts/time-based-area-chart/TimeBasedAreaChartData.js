function generateChartData () {
  let chartData = []
  // current date
  let firstDate = new Date()
  // now set 500 minutes back
  firstDate.setMinutes(firstDate.getDate() - 1000)

  // and generate 500 data items
  for (let i = 0; i < 500; i++) {
    let newDate = new Date(firstDate)
    // each time we add one minute
    newDate.setMinutes(newDate.getMinutes() + i)
    // some random number
    let visits = Math.round(Math.random() * 40 + 10 + i + Math.random() * i / 5)
    // add data item to the array
    chartData.push({
      date: newDate,
      visits: visits
    })
  }
  return chartData
}

export default generateChartData()
