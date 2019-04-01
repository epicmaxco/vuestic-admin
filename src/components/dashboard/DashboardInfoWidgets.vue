<template>
  <div class="va-row dashboard-info-widgets">
    <div class="flex md6 xl3 xs12">
      <va-card class="info-widget" stripe="success">
        <div class="info-widget-inner flex-center">
          <div class="stats fill-height flex-center">
            <div class="stats-number mb-2 flex-center">
              <va-icon icon="ion ion-md-arrow-up text-primary stats-icon"/>
              59
            </div>
            <div class="stats-title">{{ $t('dashboard.elements') }}</div>
          </div>
        </div>
      </va-card>
    </div>
    <div class="flex md6 xl3 xs12">
      <va-card class="info-widget" stripe="success">
        <div class="info-widget-inner flex-center">
          <div class="stats fill-height flex-center">
            <div class="stats-number mb-2 flex-center">
              <va-icon icon="ion ion-md-arrow-down text-danger stats-icon"/>
              12
            </div>
            <div class="stats-title">{{ $t('dashboard.versions') }}</div>
          </div>
        </div>
      </va-card>
    </div>
    <div class="flex md6 xl3 xs12">
      <va-card class="info-widget brand-danger">
        <div class="info-widget-inner d-flex justify--space-between align--center">
          <div class="stats fill-height d-flex align--center">
            <div class="stats-number mb-2 flex-center">
              425
            </div>
            <div class="stats-title">Commits</div>
          </div>
          <div class="chart-container">
            <va-progress-circle :value="70" theme="White">
              70%
            </va-progress-circle>
          </div>
        </div>
      </va-card>
    </div>
    <div class="flex md6 xl3 xs12">
      <va-card class="info-widget brand-info">
        <div class="info-widget-inner flex-center">
          <div class="stats fill-height flex-center">
            <div class="stats-number mb-2 flex-center">
              <va-icon icon="ion ion-md-people stats-icon icon-wide"/>
              5
            </div>
            <div class="stats-title">{{ $t('dashboard.teamMembers') }}
            </div>
          </div>
        </div>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard-info-widgets',
}
</script>

<style lang="scss" scoped>
.stats-number, .stats-title {
  line-height: 1;
}

.info-widget-inner {
  position: relative;
  width: 100%;

  .stats {
    flex-direction: column;
  }
}

.stats-number {
  position: relative;
  flex-direction: row;
  font-size: 2.625rem;

  .stats-icon {
    font-size: 1.5625rem;
    position: absolute;
    top: 0.625rem;
    left: -1.25rem;

    &.icon-wide {
      left: -1.875rem;
    }
  }
}

</style>
