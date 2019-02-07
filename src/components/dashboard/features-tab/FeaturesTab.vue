<template>
  <div class="overview-tab dashboard-tab">
    <div
      class="va-row d-flex overview-row justify--space-around justify--start">

      <div class="xs12 overview-col">
        <div class="overview-item d-flex align--center mb-5 pr-3 text--bold">
          <div class="overview-icon-container d-flex justify--center align--center fill-height">
            <va-icon-vue/>
          </div>
          Built with Vue.js framework
        </div>
        <div class="overview-item d-flex align--center mb-5 pr-3 text--bold">
          <div class="overview-icon-container d-flex justify--center align--center fill-height">
            <va-icon-free/>
          </div>
          Absolutely free for everyone
        </div>
        <div class="overview-item d-flex align--center mb-5 pr-3 text--bold">
          <div class="overview-icon-container d-flex justify--center align--center fill-height">
            <va-icon-fresh/>
          </div>
          Fresh and crisp design
        </div>
      </div>

      <div class="xs12 overview-col">
        <div class="overview-item d-flex align--center mb-5 pr-3 text--bold">
          <div class="overview-icon-container d-flex justify--center align--center fill-height">
            <va-icon-responsive/>
          </div>
          Responsive and optimized for mobile
        </div>
        <div class="overview-item d-flex align--center mb-5 pr-3 text--bold">
          <div class="overview-icon-container d-flex justify--center align--center fill-height">
            <va-icon-rich/>
          </div>
          Tons of useful components
        </div>
        <div class="overview-item d-flex align--center mb-5 pr-3 text--bold">
          <div class="overview-icon-container d-flex justify--center align--center fill-height">
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
  height: 55px;
  font-size: 1.25rem;

  .overview-icon-container {
    min-width: 85px;
    max-width: 85px;
  }
}
</style>
