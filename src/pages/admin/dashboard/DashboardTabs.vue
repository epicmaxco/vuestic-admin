<template>
  <VaCard>
    <VaCardTitle>
      {{ t('dashboard.setupRemoteConnections') }}
    </VaCardTitle>
    <VaCardContent>
      <VaTabs v-model="activeTabName" grow>
        <template #tabs>
          <VaTab name="OverviewTab">
            {{ t('dashboard.tabs.overview.title') }}
          </VaTab>
          <VaTab name="BillingAddressTab">
            {{ t('dashboard.tabs.billingAddress.title') }}
          </VaTab>
          <VaTab name="BankDetailsTab">
            {{ t('dashboard.tabs.bankDetails.title') }}
          </VaTab>
        </template>
      </VaTabs>
      <VaSeparator />
      <Component :is="tabs[activeTabName]" @submit="submit" />
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
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
