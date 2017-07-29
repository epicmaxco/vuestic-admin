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
      <vuestic-tabs :names="['Overview', 'Data Visualization', 'Users & Members', 'Setup Profile']">
        <div slot="Overview">
          <i class="i-vuestic-fresh"></i>
          <i class="i-vuestic-clean-code"></i>
          <i class="i-vuestic-free"></i>
          <i class="i-vuestic-responsive"></i>
          <i class="i-vuestic-rich"></i>
          <i class="i-vuestic-vue"></i>
        </div>
        <div slot="Data Visualization">
          Data Visualisation
        </div>
        <div slot="Users & Members">
          <users-members-tab></users-members-tab>
        </div>
        <div slot="Setup Profile">
          <setup-profile-tab></setup-profile-tab>
        </div>
      </vuestic-tabs>
    </widget>

  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'
  import VuesticAlert from 'components/common/vuestic-alert/VuesticAlert'
  import DashboardInfoWidgets from './DashboardInfoWidgets'
  import VuesticTabs from 'components/common/vuestic-tabs/VuesticTabs.vue'
  import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
  import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'

  export default {
    name: 'dashboard',
    components: {
      Widget,
      VuesticAlert,
      DashboardInfoWidgets,
      VuesticTabs,
      UsersMembersTab,
      SetupProfileTab
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/_variables.scss";

  .vuestic-alert {
    margin-bottom: 1.75rem;
  }

</style>
