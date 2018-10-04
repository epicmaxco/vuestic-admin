import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['North America', 'South America', 'Australia'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.info, palette.warning, palette.primary],
    data: [3000, 6000, 1500],
  }],
}
