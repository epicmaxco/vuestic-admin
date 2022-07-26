<template>
  <va-card>
    <va-card-title>
      {{ t('dashboard.setupRemoteConnections') }}
    </va-card-title>
    <va-card-content>
      <va-tabs v-model="activeTabName" grow>
        <template #tabs>
          <va-tab name="OverviewTab">
            {{ t('dashboard.tabs.overview.title') }}
          </va-tab>
          <va-tab name="BillingAddressTab">
            {{ t('dashboard.tabs.billingAddress.title') }}
          </va-tab>
          <va-tab name="BankDetailsTab">
            {{ t('dashboard.tabs.bankDetails.title') }}
          </va-tab>
        </template>
      </va-tabs>
      <va-separator />
      <component :is="tabs[activeTabName]" @submit="submit" />
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
  import { defineAsyncComponent, ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const tabs = {
    OverviewTab: defineAsyncComponent(() => import('./dashboard-tabs/OverviewTab.vue')),
    BillingAddressTab: defineAsyncComponent(() => import('./dashboard-tabs/BillingAddressTab.vue')),
    BankDetailsTab: defineAsyncComponent(() => import('./dashboard-tabs/BankDetailsTab.vue')),
  }

  const emit = defineEmits<{
    (e: 'submit', data: any): void
  }>()

  const activeTabName = ref<keyof typeof tabs>('BillingAddressTab')

  function submit(data: any) {
    emit('submit', data)
  }
</script>

<style lang="scss">
  .va-tabs__tabs {
    height: 100%;
  }
</style>
