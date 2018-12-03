<template>
  <div class="dashboard">

    <dashboard-info-widgets></dashboard-info-widgets>

    <vuestic-widget class="no-padding no-v-padding">
      <va-tabs
        v-model="value"
        :titles="[$t('dashboard.dataVisualization'), $t('dashboard.usersAndMembers'), $t('dashboard.setupProfile'), $t('dashboard.features')]"
        ref="tabs">
        <va-tab :value="$t('dashboard.dataVisualization')">
          <data-visualisation-tab></data-visualisation-tab>
        </va-tab>
        <va-tab :value="$t('dashboard.usersAndMembers')">
          <users-members-tab></users-members-tab>
        </va-tab>
        <va-tab :value="$t('dashboard.setupProfile')">
          <setup-profile-tab></setup-profile-tab>
        </va-tab>
        <va-tab :value="$t('dashboard.features')">
          <features-tab></features-tab>
        </va-tab>
      </va-tabs>
    </vuestic-widget>

    <dashboard-bottom-widgets></dashboard-bottom-widgets>

  </div>
</template>

<script>
import DashboardInfoWidgets from './DashboardInfoWidgets'
import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
import FeaturesTab from './features-tab/FeaturesTab.vue'
import DataVisualisationTab
  from './data-visualisation-tab/DataVisualisation.vue'
import DashboardBottomWidgets from './DashboardBottomWidgets.vue'
import VaTabs from '../../vuestic-theme/vuestic-components/vuestic-tabs/VaTabs'
import VaTab from '../../vuestic-theme/vuestic-components/vuestic-tabs/VaTab'
export default {
  name: 'dashboard',
  components: {
    DataVisualisationTab,
    DashboardInfoWidgets,
    UsersMembersTab,
    SetupProfileTab,
    FeaturesTab,
    DashboardBottomWidgets,
    VaTabs,
    VaTab
  },

  methods: {
    launchEpicmaxToast () {
      this.showToast(`Let's work together!`, {
        icon: 'fa-star-o',
        position: 'top-right',
        duration: Infinity,
        action: {
          text: 'Hire us',
          href: 'http://epicmax.co/#/contact',
          class: 'vuestic-toasted-link',
        },
      })
    },
  },
  data () {
    return {
      value: 'Data Visualization'
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
