<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-md-12">
        <div class="alert alert-success with-close" role="alert">
          <span class="badge badge-pill badge-success">SUCCESS</span>
          You successfully read this important alert message.
          <i class="fa fa-close alert-close"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'dashboard',
    components: {
      Widget
    }
  }
</script>

<style lang="scss">

</style>
