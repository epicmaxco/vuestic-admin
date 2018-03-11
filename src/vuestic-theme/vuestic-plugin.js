import Alert from './vuestic-components/vuestic-alert/VuesticAlert.vue'
import Breadcrumbs from './vuestic-components/vuestic-breadcrumbs/VuesticBreadcrumbs.vue'
import Chart from './vuestic-components/vuestic-chart/VuesticChart.vue'
import Chat from './vuestic-components/vuestic-chat/VuesticChat.vue'
import Checkbox from './vuestic-components/vuestic-checkbox/VuesticCheckbox.vue'
import DataTable from './vuestic-components/vuestic-datatable/VuesticDataTable.vue'
import Feed from './vuestic-components/vuestic-feed/VuesticFeed.vue'
import MediumEditor from './vuestic-components/vuestic-medium-editor/VuesticMediumEditor.vue'
import Modal from './vuestic-components/vuestic-modal/VuesticModal.vue'
import MultiSelect from './vuestic-components/vuestic-multi-select/VuesticMultiSelect.vue'
import Popover from './vuestic-components/vuestic-popover/VuesticPopover.vue'
import PreLoader from './vuestic-components/vuestic-preloader/VuesticPreLoader.vue'
import ProfileCard from './vuestic-components/vuestic-profile-card/VuesticProfileCard.vue'
import ProgressBar from './vuestic-components/vuestic-progress-bar/VuesticProgressBar.vue'
import Scrollbar from './vuestic-components/vuestic-scrollbar/VuesticScrollbar.vue'
import SimpleSelect from './vuestic-components/vuestic-simple-select/VuesticSimpleSelect.vue'
import Slider from './vuestic-components/vuestic-slider/VuesticSlider.vue'
import SocialNews from './vuestic-components/vuestic-social-news/VuesticSocialNews.vue'
import Switch from './vuestic-components/vuestic-switch/VuesticSwitch.vue'
import Tabs from './vuestic-components/vuestic-tabs/VuesticTabs.vue'
import Tooltip from './vuestic-components/vuestic-tooltip/VuesticTooltip.vue'
import Widget from './vuestic-components/vuestic-widget/VuesticWidget.vue'
import Wizard from './vuestic-components/vuestic-wizard/VuesticWizard.vue'

import VuesticToasted from './vuestic-mixins/VuesticToasted'

import Dropdown from './vuestic-directives/Dropdown'
import StickyScroll from './vuestic-directives/StickyScroll'

const VuesticPlugin = {
  install (Vue, options) {
    Vue.component(Alert.name, Alert)
    Vue.component(Breadcrumbs.name, Breadcrumbs)
    Vue.component(Chart.name, Chart)
    Vue.component(Chat.name, Chat)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(DataTable.name, DataTable)
    Vue.component(Feed.name, Feed)
    Vue.component(Modal.name, Modal)
    Vue.component(MultiSelect.name, MultiSelect)
    Vue.component(PreLoader.name, PreLoader)
    Vue.component(ProfileCard.name, ProfileCard)
    Vue.component(ProgressBar.name, ProgressBar)
    Vue.component(Scrollbar.name, Scrollbar)
    Vue.component(SimpleSelect.name, SimpleSelect)
    Vue.component(Slider.name, Slider)
    Vue.component(SocialNews.name, SocialNews)
    Vue.component(Switch.name, Switch)
    Vue.component(Tabs.name, Tabs)
    Vue.component(Widget.name, Widget)
    Vue.component(Wizard.name, Wizard)
    Vue.component(MediumEditor.name, MediumEditor)
    Vue.component(Tooltip.name, Tooltip)
    Vue.component(Popover.name, Popover)

    Vue.mixin(VuesticToasted)

    Vue.directive('dropdown', Dropdown)
    Vue.directive('sticky-scroll', StickyScroll)
  }
}

export default VuesticPlugin
