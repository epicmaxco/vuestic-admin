<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-md-12">
        <vuestic-alert type="success" :withCloseBtn="true">
          <span class="badge badge-pill badge-success">SUCCESS</span>
          You successfully read this important alert message.
          <i class="fa fa-close alert-close"></i>
        </vuestic-alert>
      </div>
    </div>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'
  import VuesticAlert from 'components/common/vuestic-alert/VuesticAlert'

  export default {
    name: 'dashboard',
    components: {
      Widget,
      VuesticAlert
    }
  }
</script>

<style lang="scss">

</style>
