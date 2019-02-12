<template>
  <div class="overview-tab dashboard-tab">
    <div
      class="d-flex overview-row justify--space-around justify--start">

      <div class="overview-col">
        <div class="overview-item">
          <div class="overview-icon-container">
            <va-icon-vue/>
          </div>
          Built with Vue.js framework
        </div>
        <div class="overview-item">
          <div class="overview-icon-container">
            <va-icon-free/>
          </div>
          Absolutely free for everyone
        </div>
        <div class="overview-item">
          <div class="overview-icon-container">
            <va-icon-fresh/>
          </div>
          Fresh and crisp design
        </div>
      </div>

      <div class="overview-col">
        <div class="overview-item">
          <div class="overview-icon-container">
            <va-icon-responsive/>
          </div>
          Responsive and optimized for mobile
        </div>
        <div class="overview-item">
          <div class="overview-icon-container">
            <va-icon-rich/>
          </div>
          Tons of useful components
        </div>
        <div class="overview-item">
          <div class="overview-icon-container">
            <va-icon-clean-code/>
          </div>
          Completely jQuery free
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VaIconVue
  from '../../../vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconVue'
import VaIconFree
  from '../../../vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconFree'
import VaIconFresh
  from '../../../vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconFresh'
import VaIconResponsive
  from '../../../vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconResponsive'
import VaIconRich
  from '../../../vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconRich'
import VaIconCleanCode
  from '../../../vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconCleanCode'

export default {
  name: 'features-tab',
  components: {
    VaIconVue,
    VaIconFree,
    VaIconFresh,
    VaIconResponsive,
    VaIconRich,
    VaIconCleanCode,
  },
}
</script>

<style lang="scss" scoped>
.overview-item {
  display: flex;
  align-items: center;
  height: 55px;
  margin-bottom: 3rem;
  padding-right: 1rem;
  font-size: 1.25rem;
  font-weight: bold;

  .overview-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    min-width: 85px;
    max-width: 85px;
    height: 100%;
  }
}

.overview-row {
  @include media-breakpoint-down(xs) {
    flex-wrap: wrap;
  }
}

.overview-col:first-child {
  margin-left: 2rem;
  @include media-breakpoint-down(md) {
    margin-left: 0;
  }
}

.explore-btn {
  margin-top: 6rem;
  margin-bottom: 1rem;
}
</style>
