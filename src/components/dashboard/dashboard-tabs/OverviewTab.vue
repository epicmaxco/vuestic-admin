<template>
  <div class="overview-tab pt-2">
    <div class="row">
      <div class="flex xs12 md6">
        <div class="features-tab__item d-flex align--center mb-5">
          <div class="features-tab__item-icon flex-center fill-height mr-2">
            <va-icon-vue/>
          </div>
          <div class="text--bold">
            {{$t('dashboard.tabs.overview.built')}}
          </div>
        </div>
        <div class="features-tab__item d-flex align--center mb-5">
          <div class="features-tab__item-icon flex-center fill-height mr-2">
            <va-icon-free/>
          </div>
          <div class="text--bold">
            {{$t('dashboard.tabs.overview.free')}}
          </div>
        </div>
        <div class="features-tab__item d-flex align--center mb-5">
          <div class="features-tab__item-icon flex-center fill-height mr-2">
            <va-icon-fresh/>
          </div>
          <div class="text--bold">
            {{$t('dashboard.tabs.overview.fresh')}}
          </div>
        </div>
      </div>

      <div class="flex xs12 md6">
        <div class="features-tab__item d-flex align--center mb-5">
          <div class="features-tab__item-icon flex-center fill-height mr-2">
            <va-icon-responsive/>
          </div>
          <div class="text--bold">
            {{$t('dashboard.tabs.overview.mobile')}}
          </div>
        </div>
        <div class="features-tab__item d-flex align--center mb-5">
          <div class="features-tab__item-icon flex-center fill-height mr-2">
            <va-icon-rich/>
          </div>
          <div class="text--bold">
            {{$t('dashboard.tabs.overview.components')}}
          </div>
        </div>
        <div class="features-tab__item d-flex align--center mb-5">
          <div class="features-tab__item-icon flex-center fill-height mr-2">
            <va-icon-clean-code/>
          </div>
          <div class="text--bold">
            {{$t('dashboard.tabs.overview.nojQuery')}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VaIconVue
  from '@/vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconVue'
import VaIconFree
  from '@/vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconFree'
import VaIconFresh
  from '@/vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconFresh'
import VaIconResponsive
  from '@/vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconResponsive'
import VaIconRich
  from '@/vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconRich'
import VaIconCleanCode
  from '@/vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconCleanCode'

export default {
  name: 'overview-tab',
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
  .overview-tab {
    &__item {
      height: 55px;
      font-size: 1.25rem;

      &-icon {
        min-width: 65px;
        max-width: 65px;
      }
    }
  }
</style>
