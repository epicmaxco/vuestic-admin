<template>
  <va-card>
    <va-card-title>
      {{ $t('dashboard.setupRemoteConnections') }}
    </va-card-title>
    <va-card-content>
      <va-tabs grow v-model="activeTabName">
        <template #tabs>
          <va-tab name="OverviewTab">
            {{$t('dashboard.tabs.overview.title')}}
          </va-tab>
          <va-tab name="BillingAddressTab">
            {{$t('dashboard.tabs.billingAddress.title')}}
          </va-tab>
          <va-tab name="BankDetailsTab">
            {{$t('dashboard.tabs.bankDetails.title')}}
          </va-tab>
        </template>
      </va-tabs>
      <va-separator/>
      <component :is="activeTabName" @submit="submit"/>
    </va-card-content>
  </va-card>
</template>

<script>
import OverviewTab from './dashboard-tabs/OverviewTab'
import BillingAddressTab from './dashboard-tabs/BillingAddressTab'
import BankDetailsTab from './dashboard-tabs/BankDetailsTab'

export default {
  name: 'DashboardTabs',
  components: {
    OverviewTab,
    BillingAddressTab,
    BankDetailsTab,
  },
  data () {
    return {
      activeTabName: 'BillingAddressTab',
      tabs: [
        'OverviewTab',
        'BillingAddressTab',
        'BankDetailsTab',
      ],
    }
  },
  methods: {
    submit (data) {
      this.$emit('submit', data)
    },
  },
}
</script>

<style lang="scss">
.va-tabs__tabs {
  height: 100%;
}
</style>
