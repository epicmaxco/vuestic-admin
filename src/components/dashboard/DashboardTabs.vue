<template>
  <va-card :title="$t('dashboard.setupRemoteConnections')">
    <va-tabs grow v-model="tabsState">
      <va-tab>
        {{$t('dashboard.tabs.overview.title')}}
      </va-tab>
      <va-tab>
        {{$t('dashboard.tabs.billingAddress.title')}}
      </va-tab>
      <va-tab>
        {{$t('dashboard.tabs.bankDetails.title')}}
      </va-tab>
    </va-tabs>
    <va-separator/>
    <component :is="tabs[tabsState]"/>
  </va-card>
</template>

<script>
import OverviewTab from 'components/dashboard/dashboard-tabs/OverviewTab.vue'
import BillingAddressTab
  from 'components/dashboard/dashboard-tabs/BillingAddressTab.vue'
import BankDetailsTab
  from 'components/dashboard/dashboard-tabs/BankDetailsTab.vue'

export default {
  name: 'DashboardTabs',
  components: {
    OverviewTab,
    BillingAddressTab,
    BankDetailsTab,
  },
  data () {
    return {
      tabsState: 1,
      tabs: [
        'OverviewTab',
        'BillingAddressTab',
        'BankDetailsTab',
      ],
    }
  },
}
</script>
