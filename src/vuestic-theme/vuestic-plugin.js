import VaNotification from './vuestic-components/va-notification/VaNotification.vue'
import Breadcrumbs
  from './vuestic-components/vuestic-breadcrumbs/VuesticBreadcrumbs.vue'
import Chart from './vuestic-components/vuestic-chart/VuesticChart.vue'
import Chat from './vuestic-components/vuestic-chat/VuesticChat.vue'
import Checkbox from './vuestic-components/vuestic-checkbox/VuesticCheckbox.vue'
import VaProgressCircle
  from './vuestic-components/va-progress-bar/progress-types/VaProgressCircle.vue'
import DataTable
  from './vuestic-components/vuestic-datatable/VuesticDataTable.vue'
import Feed from './vuestic-components/vuestic-feed/VuesticFeed.vue'
import VaProgressBar
  from './vuestic-components/va-progress-bar/progress-types/VaProgressBar.vue'
import VaSlider
  from './vuestic-components/va-slider/VaSlider.vue'
import MediumEditor
  from './vuestic-components/vuestic-medium-editor/VuesticMediumEditor.vue'
import Modal from './vuestic-components/va-modal/VaModal.vue'
import MultiSelect
  from './vuestic-components/vuestic-multi-select/VuesticMultiSelect.vue'
import Popover from './vuestic-components/vuestic-popover/VuesticPopover.vue'
import PreLoader
  from './vuestic-components/vuestic-preloader/VuesticPreLoader.vue'
import ProfileCard
  from './vuestic-components/vuestic-profile-card/VuesticProfileCard.vue'
import VaBadge
  from './vuestic-components/va-chip/VaBadge.vue'
import VaChip
  from './vuestic-components/va-chip/VaChip.vue'
import VaButton
  from './vuestic-components/va-button/VaButton.vue'
import VaButtonGroup
  from './vuestic-components/va-button-group/VaButtonGroup.vue'
import VaButtonToggle
  from './vuestic-components/va-button-toggle/VaButtonToggle.vue'
import VaPagination
  from './vuestic-components/va-pagination/VaPagination.vue'
import RadioButton
  from './vuestic-components/vuestic-radio-button/VuesticRadioButton'
import Scrollbar
  from './vuestic-components/vuestic-scrollbar/VuesticScrollbar.vue'
import SimpleSelect
  from './vuestic-components/vuestic-simple-select/VuesticSimpleSelect.vue'
import Slider from './vuestic-components/va-slider/VaSlider.vue'
import SocialNews
  from './vuestic-components/vuestic-social-news/VuesticSocialNews.vue'
import Switch from './vuestic-components/vuestic-switch/VuesticSwitch.vue'
import Tabs from './vuestic-components/vuestic-tabs/VuesticTabs.vue'
import Tooltip from './vuestic-components/vuestic-tooltip/VuesticTooltip.vue'
import Wizard from './vuestic-components/vuestic-wizard/VuesticWizard.vue'
import TreeRoot from './vuestic-components/vuestic-tree-view/VuesticTreeRoot'
import TreeCategory
  from './vuestic-components/vuestic-tree-view/VuesticTreeCategory'
import TreeNode from './vuestic-components/vuestic-tree-view/VuesticTreeNode'
import DatePicker
  from './vuestic-components/vuestic-date-picker/VuesticDatePicker'
import FileUpload
  from './vuestic-components/vuestic-file-upload/VuesticFileUpload'
import VaIcon from './vuestic-components/va-icon/VaIcon'
import VuesticDropdown
  from './vuestic-components/vuestic-dropdown/VuesticDropdown'

import VuesticToasted from './vuestic-mixins/VuesticToasted'

import Dropdown from './vuestic-directives/Dropdown'
import StickyScroll from './vuestic-directives/StickyScroll'

import VaAccordion
  from './vuestic-components/va-collapse/VaAccordion'
import VaCollapse
  from './vuestic-components/va-collapse/VaCollapse'

import VuesticTimeline
  from './vuestic-components/vuestic-timelines/VuesticTimeline'
import VuesticTimelineItem
  from './vuestic-components/vuestic-timelines/VuesticTimelineItem'
import VuesticPopup
  from './vuestic-components/vuestic-popup/quasar/components/popup/VuesticPopup.vue'

import VuesticContainer from './vuestic-components/vuestic-grid/VGrid/Container'
import VuestVaLayout from './vuestic-components/vuestic-grid/VGrid/Layout'
import VuesticFlex from './vuestic-components/vuestic-grid/VGrid/Flex'
import Card from './vuestic-components/va-card/VaCard'
import { installQuasarPlatform } from './vuestic-components/vuestic-popup/quasar/install'

// At the moment we use quasar platform install to make its components work.
// Ideally we want to create similar vuestic platform object that holds needed values.
installQuasarPlatform()

const VuesticPlugin = {
  install (Vue, options) {
    [
      VaNotification,
      Breadcrumbs,
      Card,
      Chart,
      Chat,
      Checkbox,
      VaProgressBar,
      DataTable,
      Feed,
      VaProgressCircle,
      Modal,
      MultiSelect,
      PreLoader,
      ProfileCard,
      VaProgressBar,
      VaBadge,
      VaChip,
      VaSlider,
      VaButton,
      VaButtonGroup,
      VaButtonToggle,
      VaPagination,
      RadioButton,
      Scrollbar,
      SimpleSelect,
      Slider,
      SocialNews,
      Switch,
      Tabs,
      Wizard,
      MediumEditor,
      Tooltip,
      Popover,
      TreeRoot,
      TreeCategory,
      TreeNode,
      FileUpload,
      VuesticDropdown,
      DatePicker,
      Card,
      VaIcon,
      VaAccordion,
      VaCollapse,
      VuesticTimeline,
      VuesticTimelineItem,
      VuesticPopup,
      VuesticContainer,
      VuestVaLayout,
      VuesticFlex,
    ].forEach(component => {
      Vue.component(component.name, component)
    })

    Vue.mixin(VuesticToasted)

    Vue.directive('dropdown', Dropdown)
    Vue.directive('sticky-scroll', StickyScroll)
  },
}

export default VuesticPlugin
