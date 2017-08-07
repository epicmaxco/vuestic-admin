import Alert from 'src/components/vuestic-components/vuestic-alert/VuesticAlert.vue'
import Chart from 'src/components/vuestic-components/vuestic-chart/VuesticChart.vue'
import Chat from 'src/components/vuestic-components/vuestic-chat/VuesticChat.vue'
import DataTable from 'src/components/vuestic-components/vuestic-datatable/VuesticDataTable.vue'
import Feed from 'src/components/vuestic-components/vuestic-feed/VuesticFeed.vue'
import Modal from 'src/components/vuestic-components/vuestic-modal/VuesticModal.vue'
import MultiSelect from 'src/components/vuestic-components/vuestic-multi-select/VuesticMultiSelect.vue'
import PreLoader from 'src/components/vuestic-components/vuestic-preloader/VuesticPreLoader.vue'
import ProfileCard from 'src/components/vuestic-components/vuestic-profile-card/VuesticProfileCard.vue'
import ProgressBar from 'src/components/vuestic-components/vuestic-progress-bar/VuesticProgressBar.vue'
import Scrollbar from 'src/components/vuestic-components/vuestic-scrollbar/VuesticScrollbar.vue'
import SimpleSelect from 'src/components/vuestic-components/vuestic-simple-select/VuesticSimpleSelect.vue'
import SocialNews from 'src/components/vuestic-components/vuestic-social-news/VuesticSocialNews.vue'
import Switch from 'src/components/vuestic-components/vuestic-switch/VuesticSwitch.vue'
import Tabs from 'src/components/vuestic-components/vuestic-tabs/VuesticTabs.vue'
import Widget from 'src/components/vuestic-components/vuestic-widget/VuesticWidget.vue'
import Wizard from 'src/components/vuestic-components/vuestic-wizard/VuesticWizard.vue'

const VuesticComponentsPlugin = {
  install (Vue, options) {
    Vue.component(Alert.name, Alert)
    Vue.component(Chart.name, Chart)
    Vue.component(Chat.name, Chat)
    Vue.component(DataTable.name, DataTable)
    Vue.component(Feed.name, Feed)
    Vue.component(Modal.name, Modal)
    Vue.component(MultiSelect.name, MultiSelect)
    Vue.component(PreLoader.name, PreLoader)
    Vue.component(ProfileCard.name, ProfileCard)
    Vue.component(ProgressBar.name, ProgressBar)
    Vue.component(Scrollbar.name, Scrollbar)
    Vue.component(SimpleSelect.name, SimpleSelect)
    Vue.component(SocialNews.name, SocialNews)
    Vue.component(Switch.name, Switch)
    Vue.component(Tabs.name, Tabs)
    Vue.component(Widget.name, Widget)
    Vue.component(Wizard.name, Wizard)
  }
}

export default VuesticComponentsPlugin
