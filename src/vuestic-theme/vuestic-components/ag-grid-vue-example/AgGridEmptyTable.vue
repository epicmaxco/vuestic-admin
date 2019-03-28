<template>
  <AgGridVue
    class="ag-theme-balham"
    :columnDefs="columnDefs"
    :rowData="rowData"
  />
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'

export default {
  name: 'ag-grid-empty-table',
  components: {
    AgGridVue
  },
  data () {
    return {
      columnDefs: [
        { headerName: 'Make', field: 'make' },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price' },
      ],
      rowData: [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
      ],
    }
  },
}
</script>

<style lang="scss">
.ag-grid-empty-table {

}
</style>
