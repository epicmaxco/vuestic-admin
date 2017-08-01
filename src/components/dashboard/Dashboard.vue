<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-md-12">
        <vuestic-alert type="success" :withCloseBtn="true">
          <span class="badge badge-pill badge-success">SUCCESS</span>
          You successfully read this important alert message.
          <i class="fa fa-close alert-close"></i>
        </vuestic-alert>
      </div>
    </div>

    <dashboard-info-widgets></dashboard-info-widgets>

    <widget class="no-padding no-v-padding">
      <vuestic-tabs :names="['Overview', 'Data Visualization', 'Users & Members', 'Setup Profile']" ref="tabs">
        <div slot="Overview">
          <overview-tab @explore="explore"></overview-tab>
        </div>
        <div slot="Data Visualization">
          <data-visualisation-tab></data-visualisation-tab>
        </div>
        <div slot="Users & Members">
          <users-members-tab></users-members-tab>
        </div>
        <div slot="Setup Profile">
          <setup-profile-tab></setup-profile-tab>
        </div>
      </vuestic-tabs>
    </widget>

    <dashboard-bottom-widgets></dashboard-bottom-widgets>

  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'
  import VuesticAlert from 'components/common/vuestic-alert/VuesticAlert'
  import DashboardInfoWidgets from './DashboardInfoWidgets'
  import VuesticTabs from 'components/common/vuestic-tabs/VuesticTabs.vue'
  import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
  import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
  import OverviewTab from './overview-tab/OverviewTab.vue'
  import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'
  import DashboardBottomWidgets from './DashboardBottomWidgets.vue'

  export default {
    name: 'dashboard',
    components: {
      DataVisualisationTab,
      Widget,
      VuesticAlert,
      DashboardInfoWidgets,
      VuesticTabs,
      UsersMembersTab,
      SetupProfileTab,
      OverviewTab,
      DashboardBottomWidgets
    },
    methods: {
      explore () {
        this.$refs.tabs.setActive('Data Visualization')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/_variables.scss";
</style>
