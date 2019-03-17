import VaNotification from './vuestic-components/va-notification/VaNotification'
import Breadcrumbs
  from './vuestic-components/vuestic-breadcrumbs/VuesticBreadcrumbs'
import Chart from './vuestic-components/vuestic-chart/VuesticChart'
import Chat from './vuestic-components/vuestic-chat/VuesticChat'
import Checkbox from '../../../ui/src/components/va-checkbox/VaCheckbox'
import VaProgressCircle
  from './vuestic-components/va-progress-bar/progress-types/VaProgressCircle'
import DataTable
  from './vuestic-components/vuestic-datatable/VuesticDataTable'
import Feed from './vuestic-components/vuestic-feed/VuesticFeed'
import VaProgressBar
  from './vuestic-components/va-progress-bar/progress-types/VaProgressBar'
import VaSlider
  from '../../../ui/src/components/va-slider/VaSlider'
import MediumEditor
  from './vuestic-components/vuestic-medium-editor/VuesticMediumEditor'
import Modal from './vuestic-components/va-modal/VaModal'
import MultiSelect
  from './vuestic-components/vuestic-multi-select/VuesticMultiSelect'
import Popover from './vuestic-components/vuestic-popover/VuesticPopover'
import PreLoader
  from './vuestic-components/vuestic-preloader/VuesticPreLoader'
import ProfileCard
  from './vuestic-components/vuestic-profile-card/VuesticProfileCard'
import VaBadge
  from '../../../ui/src/components/va-chip/VaBadge'
import VaChip
  from '../../../ui/src/components/va-chip/VaChip'
import VaButton
  from '../../../ui/src/components/va-button/VaButton'
import VaButtonGroup
  from '../../../ui/src/components/va-button-group/VaButtonGroup'
import VaButtonToggle
  from '../../../ui/src/components/va-button-toggle/VaButtonToggle'
import VaPagination
  from './vuestic-components/va-pagination/VaPagination'
import RadioButton
  from './vuestic-components/vuestic-radio-button/VuesticRadioButton'
import Scrollbar
  from './vuestic-components/vuestic-scrollbar/VuesticScrollbar'
import SimpleSelect
  from './vuestic-components/vuestic-simple-select/VuesticSimpleSelect'
import Slider from '../../../ui/src/components/va-slider/VaSlider'
import SocialNews
  from './vuestic-components/vuestic-social-news/VuesticSocialNews'
import Switch from './vuestic-components/vuestic-switch/VuesticSwitch'
import Tabs from './vuestic-components/vuestic-tabs/VuesticTabs'
import Tooltip from './vuestic-components/vuestic-tooltip/VuesticTooltip'
import Widget from './vuestic-components/vuestic-widget/VuesticWidget'
import Wizard from './vuestic-components/vuestic-wizard/VuesticWizard'
import TreeRoot from './vuestic-components/vuestic-tree-view/VuesticTreeRoot'
import TreeCategory
  from './vuestic-components/vuestic-tree-view/VuesticTreeCategory'
import TreeNode from './vuestic-components/vuestic-tree-view/VuesticTreeNode.vue'
import DatePicker
  from './vuestic-components/vuestic-date-picker/VuesticDatePicker'
import Card from './vuestic-components/vuestic-card/VuesticCard'
import FileUpload
  from './vuestic-components/vuestic-file-upload/VuesticFileUpload'
import VaIcon from '../../../ui/src/components/va-icon/VaIcon'
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
  from './vuestic-components/vuestic-popup/quasar/components/popup/VuesticPopup'

import VuesticContainer from '../../../ui/src/components/va-grid/VGrid/Container'
import VuestVaLayout from '../../../ui/src/components/va-grid/VGrid/Layout'
import VuesticFlex from '../../../ui/src/components/va-grid/VGrid/Flex'

import { installQuasarPlatform } from './vuestic-components/vuestic-popup/quasar/install'

// At the moment we use quasar platform install to make its components work.
// Ideally we want to create similar vuestic platform object that holds needed values.
installQuasarPlatform()

const VuesticPlugin = {
  install (Vue, options) {
    [
      VaNotification,
      Breadcrumbs,
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
      Widget,
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
