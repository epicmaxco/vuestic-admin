<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-md-12">
        <div class="alert alert-success with-close" role="alert">
          <span class="badge badge-pill badge-success">SUCCESS</span>
          You successfully read this important alert message.
          <i class="fa fa-close alert-close"></i>
        </div>
        <div class="alert alert-info with-close" role="alert">
          <span class="badge badge-pill badge-info">INFO</span>
          This alert needs your attention, but it's not super important.
          <i class="fa fa-close alert-close"></i>
        </div>
        <div class="alert alert-warning with-close" role="alert">
          <span class="badge badge-pill badge-warning">WARNING</span>
          Better check yourself, you're not looking too good.
          <i class="fa fa-close alert-close"></i>
        </div>
        <div class="alert alert-danger with-close" role="alert">
          <span class="badge badge-pill badge-danger">DANGER</span>
          Change a few things up and try submitting again.
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
