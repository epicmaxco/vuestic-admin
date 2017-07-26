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
    <div class="row">
      <div class="col-md-6 col-xl-3">
       <widget class="info-widget">
         <div class="info-widget-number">
           <i class="ion ion-arrow-up-c text-primary number-icon"></i>
           59
          </div>
         <div class="info-widget-subtitle">Elements</div>
       </widget>
      </div>
      <div class="col-md-6 col-xl-3">
        <widget class="info-widget">
          <div class="info-widget-number">
            <i class="ion ion-arrow-down-c text-danger number-icon"></i>
            12
          </div>
          <div class="info-widget-subtitle">Versions</div>
        </widget>
      </div>
      <div class="col-md-6 col-xl-3">
        <widget class="info-widget">
          <div class="info-widget-number">
            <i class="ion ion-arrow-graph-down-right text-danger number-icon"></i>
            425
          </div>
          <div class="info-widget-subtitle">Commits</div>
        </widget>
      </div>
      <div class="col-md-6 col-xl-3">
        <widget class="info-widget">
          <div class="info-widget-number">
            <i class="ion ion-arrow-graph-up-right text-primary number-icon"></i>
            5
          </div>
          <div class="info-widget-subtitle">Team Members</div>
        </widget>
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

<style lang="scss" scoped>

  .vuestic-alert {
    margin-bottom: 1.75rem;
  }

  .info-widget-number, .info-widget-subtitle {
    line-height: 1;
  }

  .info-widget-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2.625rem;
    margin-bottom: 0.5rem;

    .number-icon {
      margin-right: 0.5rem;
      font-size: 25px;
    }
  }

</style>
