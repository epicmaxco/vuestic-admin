<template>
  <va-card title="Setup remote connections">
    <va-tabs grow v-model="tabsState">
      <va-tab>
        {{$t('dashboard.tabs.overview')}}
      </va-tab>
      <va-tab>
        {{$t('dashboard.tabs.billingAddress')}}
      </va-tab>
      <va-tab>
        {{$t('dashboard.tabs.bankDetails')}}
      </va-tab>
    </va-tabs>
    <va-separator/>
    <component :is="tabs[tabsState]"/>
  </va-card>
</template>

<script>
import OverviewTab from 'components/dashboard/dashboard-tabs/OverviewTab.vue'

export default {
  name: 'DashboardTabs',
  components: {
    OverviewTab,
  },
  data () {
    return {
      tabsState: 0,
      tabs: [
        'OverviewTab',
      ],
    }
  },
}
</script>
