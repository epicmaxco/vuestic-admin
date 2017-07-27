<template>
  <div class="row dashboard-info-widgets">
    <div class="col-md-6 col-xl-3">
      <widget class="info-widget">
        <div class="info-widget-inner">
          <div class="stats">
            <div class="info-widget-number">
              <i class="ion ion-arrow-up-c text-primary number-icon"></i>
              59
            </div>
            <div class="info-widget-subtitle">Elements</div>
          </div>
        </div>
      </widget>
    </div>
    <div class="col-md-6 col-xl-3">
      <widget class="info-widget">
        <div class="info-widget-inner">
          <div class="stats">
            <div class="info-widget-number">
              <i class="ion ion-arrow-down-c text-danger number-icon"></i>
              12
            </div>
            <div class="info-widget-subtitle">Versions</div>
          </div>
        </div>
      </widget>
    </div>
    <div class="col-md-6 col-xl-3">
      <widget class="info-widget brand-danger">
        <div class="info-widget-inner">
          <div class="info-widget-inner has-chart">
            <div class="stats">
              <div class="info-widget-number">
                425
              </div>
              <div class="info-widget-subtitle">Commits</div>
            </div>
            <div class="chart-container">
              <progress-bar type="circle" ref="circleProgress" :color="'white'" :background-color="'brand-danger'" :startColor="'brand-danger'"></progress-bar>
            </div>
          </div>
        </div>
      </widget>
    </div>
    <div class="col-md-6 col-xl-3">
      <widget class="info-widget brand-info">
        <div class="info-widget-inner">
          <div class="stats">
            <div class="info-widget-number">
              <i class="ion ion-android-people number-icon icon-wide"></i>
              5
            </div>
            <div class="info-widget-subtitle">Team Members</div>
          </div>
        </div>
      </widget>
    </div>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'
  import ProgressBar from 'components/common/vuestic-progress-bar/VuesticProgressBar'

  export default {
    name: 'dashboard-info-widgets',
    components: {
      Widget,
      ProgressBar
    },

    mounted () {
      this.$refs.circleProgress.$data.value = 70
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/_variables.scss";

  .info-widget-number, .info-widget-subtitle {
    line-height: 1;
  }

  .info-widget-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    &.has-chart {
      justify-content: space-between;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
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
      font-size: 25px;
      position: absolute;
      top: 10px;
      left: -20px;

      &.icon-wide {
        left: -30px;
      }
    }
  }

</style>
