<template>
  <div class="overview-tab pt-2 layout">
    <div class="mb-2" />
    <div class="grid grid-cols-12">
      <div class="flex xs:col-span-12 xl:col-span-6 mb-5">
        <div class="overview-tab__item flex items-center">
          <div class="overview-tab__item-icon h-full mr-2">
            <va-icon-vue />
          </div>
          <div class="font-bold">{{ t('dashboard.tabs.overview.built') }}</div>
        </div>
      </div>

      <div class="flex xs:col-span-12 xl:col-span-6 mb-5">
        <div class="overview-tab__item flex items-center">
          <div class="overview-tab__item-icon h-full mr-2">
            <va-icon-responsive />
          </div>
          <div class="font-bold">{{ t('dashboard.tabs.overview.mobile') }}</div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-12">
      <div class="flex xs:col-span-12 xl:col-span-6 mb-5">
        <div class="overview-tab__item flex items-center">
          <div class="overview-tab__item-icon h-full mr-2">
            <va-icon-free />
          </div>
          <div class="font-bold">{{ t('dashboard.tabs.overview.free') }}</div>
        </div>
      </div>

      <div class="flex xs:col-span-12 xl:col-span-6 mb-5">
        <div class="overview-tab__item flex items-center">
          <div class="overview-tab__item-icon h-full mr-2">
            <va-icon-rich />
          </div>
          <div class="font-bold">{{ t('dashboard.tabs.overview.components') }}</div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-12">
      <div class="flex xs:col-span-12 xl:col-span-6 mb-5">
        <div class="overview-tab__item flex items-center">
          <div class="overview-tab__item-icon h-full mr-2">
            <va-icon-fresh />
          </div>
          <div class="font-bold">{{ t('dashboard.tabs.overview.fresh') }}</div>
        </div>
      </div>

      <div class="flex xs:col-span-12 xl:col-span-6">
        <div class="overview-tab__item flex items-center">
          <div class="overview-tab__item-icon h-full mr-2">
            <va-icon-clean-code />
          </div>
          <div class="font-bold">{{ t('dashboard.tabs.overview.nojQuery') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import VaIconVue from '../../../../components/icons/VaIconVue.vue'
  import VaIconFree from '../../../../components/icons/VaIconFree.vue'
  import VaIconFresh from '../../../../components/icons/VaIconFresh.vue'
  import VaIconResponsive from '../../../../components/icons/VaIconResponsive.vue'
  import VaIconRich from '../../../../components/icons/VaIconRich.vue'
  import VaIconCleanCode from '../../../../components/icons/VaIconCleanCode.vue'

  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
</script>

<style lang="scss">
  .overview-tab {
    &__item {
      height: 55px;

      &-icon {
        min-width: 65px;
        max-width: 65px;
      }
    }
  }
</style>
