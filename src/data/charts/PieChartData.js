import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Africa', 'Asia', 'Europe'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.primary, palette.warning, palette.danger],
    data: [2478, 5267, 734]
  }]
}
