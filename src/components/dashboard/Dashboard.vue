<template>
  <div class="dashboard">
    <dashboard-info-widgets/>
    <va-card class="no-padding no-v-padding">
      <va-tabs
        v-model="value"
        grow
      >
        <va-tab>
          {{$t('dashboard.dataVisualization')}}
        </va-tab>
        <va-tab>
          {{$t('dashboard.usersAndMembers')}}
        </va-tab>
        <va-tab>
          {{$t('dashboard.setupProfile')}}
        </va-tab>
        <va-tab>
          {{$t('dashboard.features')}}
        </va-tab>
      </va-tabs>
      <va-separator/>
      <data-visualisation-tab v-if="value === 0"/>
      <users-members-tab v-if="value === 1"/>
      <setup-profile-tab v-if="value === 2"/>
      <features-tab v-if="value === 3"/>
    </va-card>
    <dashboard-bottom-widgets></dashboard-bottom-widgets>
  </div>
</template>

<script>
import DashboardInfoWidgets from './DashboardInfoWidgets'
import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
import FeaturesTab from './features-tab/FeaturesTab.vue'
import DataVisualisationTab
  from './data-visualisation-tab/DataVisualisationTab.vue'
import DashboardBottomWidgets from './DashboardBottomWidgets.vue'

export default {
  name: 'dashboard',
  components: {
    DataVisualisationTab,
    DashboardInfoWidgets,
    UsersMembersTab,
    SetupProfileTab,
    FeaturesTab,
    DashboardBottomWidgets,
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
      value: 0,
    }
  },
}

</script>
