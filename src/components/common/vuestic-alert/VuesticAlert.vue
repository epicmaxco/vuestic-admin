<template>
  <div class='vuestic-alert alert' :class="alertClass">
    <slot></slot>
    <i class="fa fa-close alert-close" v-if="withCloseBtn"></i>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-alert',
    computed: {
      alertClass () {
        return {
          'with-close': this.withCloseBtn,
          'alert-success': this.type === 'success',
          'alert-danger': this.type === 'danger',
          'alert-warning': this.type === 'warning',
          'alert-info': this.type === 'info'
        }
      }
    },
    props: {
      type: {
        type: String,
        default: 'success'
      },
      withCloseBtn: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang='scss'>
  @import '../../../sass/_variables.scss';
</style>
