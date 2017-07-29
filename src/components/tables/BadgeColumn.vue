<template>
  <span class="circle" :class="classObject"></span>
</template>

<script>
  export default {
    name: 'badge-column',
    props: {
      rowData: {
        type: Object,
        required: true
      },
      rowIndex: {
        type: Number
      }
    },
    data () {
      return {
        classObject: {
          'badge-warning': this.rowIndex % 6 === 0,
          'badge-primary': this.rowIndex % 6 === 1,
          'badge-danger': this.rowIndex % 6 === 2,
          'badge-info': this.rowIndex % 6 === 3,
          'badge-violet': this.rowIndex % 6 === 4,
          'badge-dark-blue': this.rowIndex % 6 === 5
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
