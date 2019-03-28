<template>
  <div style="width: 760px;">
    <h1>Large Data Set Component (50,000 rows)</h1>
    <ag-grid-vue
      style="width: 100%; height: 350px;"
      class="ag-theme-balham"
      :rowData="rowData"
      :columnDefs="columnDefs"
    />
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'

export default {
  name: 'AgGridLargeDataSetExample',
  data () {
    return {
      rowData: this.rowData,
      columnDefs: this.columnDefs,
    }
  },
  components: {
    'ag-grid-vue': AgGridVue,
  },
  created () {
    // data created here so outside of vue (ie no reactive, not observed)
    // also frozen (prob unnecessarily)
    this.rowData = []
    for (let i = 0; i < 50000; i++) {
      this.rowData.push(Object.freeze({
        recordNumber: i,
        value1: Math.floor(Math.random() * 10000),
        value2: Math.floor(Math.random() * 10000),
        value3: Math.floor(Math.random() * 10000),
        value4: Math.floor(Math.random() * 10000),
        value5: Math.floor(Math.random() * 10000),
        value6: Math.floor(Math.random() * 10000),
        value7: Math.floor(Math.random() * 10000),
      }))
    }
    this.rowData = Object.freeze(this.rowData)
    this.columnDefs = Object.freeze([
      { headerName: 'Record', field: 'recordNumber' },
      { headerName: 'Value 1', field: 'value1' },
      { headerName: 'Value 2', field: 'value2' },
      { headerName: 'Value 3', field: 'value3' },
      { headerName: 'Value 4', field: 'value4' },
      { headerName: 'Value 5', field: 'value4' },
      { headerName: 'Value 6', field: 'value4' },
      { headerName: 'Value 7', field: 'value4' },
    ])
  },
}
</script>

<style>
</style>
