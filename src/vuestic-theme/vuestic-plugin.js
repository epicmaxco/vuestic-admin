import Alert from './vuestic-components/vuestic-alert/VuesticAlert.vue'
import Breadcrumbs
  from './vuestic-components/vuestic-breadcrumbs/VuesticBreadcrumbs.vue'
import Chart from './vuestic-components/vuestic-chart/VuesticChart.vue'
import Chat from './vuestic-components/vuestic-chat/VuesticChat.vue'
import Checkbox from './vuestic-components/vuestic-checkbox/VuesticCheckbox.vue'
import DataTable
  from './vuestic-components/vuestic-datatable/VuesticDataTable.vue'
import Feed from './vuestic-components/vuestic-feed/VuesticFeed.vue'
import MediumEditor
  from './vuestic-components/vuestic-medium-editor/VuesticMediumEditor.vue'
import Modal from './vuestic-components/vuestic-modal/VuesticModal.vue'
import MultiSelect
  from './vuestic-components/vuestic-multi-select/VuesticMultiSelect.vue'
import Popover from './vuestic-components/vuestic-popover/VuesticPopover.vue'
import PreLoader
  from './vuestic-components/vuestic-preloader/VuesticPreLoader.vue'
import ProfileCard
  from './vuestic-components/vuestic-profile-card/VuesticProfileCard.vue'
import ProgressBar
  from './vuestic-components/vuestic-progress-bar/VuesticProgressBar.vue'
import RadioButton
  from './vuestic-components/vuestic-radio-button/VuesticRadioButton'
import Scrollbar
  from './vuestic-components/vuestic-scrollbar/VuesticScrollbar.vue'
import SimpleSelect
  from './vuestic-components/vuestic-simple-select/VuesticSimpleSelect.vue'
import Slider from './vuestic-components/vuestic-slider/VuesticSlider.vue'
import SocialNews
  from './vuestic-components/vuestic-social-news/VuesticSocialNews.vue'
import Switch from './vuestic-components/vuestic-switch/VuesticSwitch.vue'
import Tabs from './vuestic-components/vuestic-tabs/VuesticTabs.vue'
import Tooltip from './vuestic-components/vuestic-tooltip/VuesticTooltip.vue'
import Widget from './vuestic-components/vuestic-widget/VuesticWidget.vue'
import Wizard from './vuestic-components/vuestic-wizard/VuesticWizard.vue'
import TreeRoot from './vuestic-components/vuestic-tree-view/VuesticTreeRoot'
import TreeCategory
  from './vuestic-components/vuestic-tree-view/VuesticTreeCategory'
import TreeNode from './vuestic-components/vuestic-tree-view/VuesticTreeNode'
import DatePicker
  from './vuestic-components/vuestic-date-picker/VuesticDatePicker'
import Card from './vuestic-components/vuestic-card/VuesticCard'
import FileUpload
  from './vuestic-components/vuestic-file-upload/VuesticFileUpload'
import Tag from './vuestic-components/vuestic-tag/VuesticTag'
import TagGroup from './vuestic-components/vuestic-tag/VuesticTagGroup'
import VuesticDropdown
  from './vuestic-components/vuestic-dropdown/VuesticDropdown'

import VuesticToasted from './vuestic-mixins/VuesticToasted'

import Dropdown from './vuestic-directives/Dropdown'
import StickyScroll from './vuestic-directives/StickyScroll'

import VuesticAccordion
  from './vuestic-components/vuestic-collapse/VuesticAccordion'
import VuesticCollapse
  from './vuestic-components/vuestic-collapse/VuesticCollapse'

import VuesticTimeline
  from './vuestic-components/vuestic-timelines/VuesticTimeline'
import VuesticTimelineItem
  from './vuestic-components/vuestic-timelines/VuesticTimelineItem'
import VuesticPopup
  from './vuestic-components/vuestic-popup/quasar/components/popup/VuesticPopup.vue'

import VuesticContainer from './vuestic-components/vuestic-grid/VGrid/Container'
import VuestVaLayout from './vuestic-components/vuestic-grid/VGrid/Layout'
import VuesticFlex from './vuestic-components/vuestic-grid/VGrid/Flex'

import { installQuasarPlatform } from './vuestic-components/vuestic-popup/quasar/install'

// At the moment we use quasar platform install to make its components work.
// Ideally we want to create similar vuestic platform object that holds needed values.
installQuasarPlatform()

const VuesticPlugin = {
  install (Vue, options) {
    [
      Alert,
      Breadcrumbs,
      Chart,
      Chat,
      Checkbox,
      DataTable,
      Feed,
      Modal,
      MultiSelect,
      PreLoader,
      ProfileCard,
      ProgressBar,
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
      Tag,
      TagGroup,
      VuesticAccordion,
      VuesticCollapse,
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
