import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['North America', 'South America', 'Australia'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.danger, palette.info, palette.success],
    data: [2478, 5267, 734],
  }],
}
