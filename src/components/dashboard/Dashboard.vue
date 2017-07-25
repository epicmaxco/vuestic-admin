<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-md-12">
        <vuestic-alert type="success" :withCloseBtn="true">
          <span class="badge badge-pill badge-success">SUCCESS</span>
          You successfully read this important alert message.
        </vuestic-alert>
        <vuestic-alert type="info" :withCloseBtn="true">
          <span class="badge badge-pill badge-info">INFO</span>
          This alert needs your attention, but it's not super important.
        </vuestic-alert>
        <vuestic-alert type="warning" :withCloseBtn="true">
          <span class="badge badge-pill badge-warning">WARNING</span>
          Better check yourself, you're not looking too good.
        </vuestic-alert>
        <vuestic-alert type="danger" :withCloseBtn="true">
          <span class="badge badge-pill badge-danger">DANGER</span>
          Change a few things up and try submitting again.
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
