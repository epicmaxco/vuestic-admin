<template>
  <div class="overview-tab pt-2">
    <div class="mb-2" />

    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 xl:col-span-6 overview-tab__item flex items-center">
        <div class="overview-tab__item-icon">
          <VaIconVue />
        </div>
        <div>{{ t('dashboard.tabs.overview.built') }}</div>
      </div>

      <div class="col-span-12 xl:col-span-6 overview-tab__item flex items-center">
        <div class="overview-tab__item-icon">
          <VaIconResponsive />
        </div>
        <div>{{ t('dashboard.tabs.overview.mobile') }}</div>
      </div>

      <div class="col-span-12 xl:col-span-6 overview-tab__item flex items-center">
        <div class="overview-tab__item-icon">
          <VaIconFree />
        </div>
        <div>{{ t('dashboard.tabs.overview.free') }}</div>
      </div>

      <div class="col-span-12 xl:col-span-6 overview-tab__item flex items-center">
        <div class="overview-tab__item-icon">
          <VaIconRich />
        </div>
        <div>{{ t('dashboard.tabs.overview.components') }}</div>
      </div>

      <div class="col-span-12 xl:col-span-6 overview-tab__item flex items-center">
        <div class="overview-tab__item-icon">
          <VaIconFresh />
        </div>
        <div>{{ t('dashboard.tabs.overview.fresh') }}</div>
      </div>

      <div class="col-span-12 xl:col-span-6 overview-tab__item flex items-center">
        <div class="overview-tab__item-icon">
          <VaIconCleanCode />
        </div>
        <div>{{ t('dashboard.tabs.overview.nojQuery') }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
      @apply h-full mr-2;

      min-width: 65px;
      max-width: 65px;
    }
  }
}
</style>
