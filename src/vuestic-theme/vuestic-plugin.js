import VaNotification
  from './vuestic-components/va-notification/VaNotification.vue'
import VaBreadcrumbs
  from './vuestic-components/va-breadcrumbs/VaBreadcrumbs.vue'
import VaChart from './vuestic-components/va-chart/VaChart.vue'
import VaChat from './vuestic-components/va-chat/VaChat.vue'
import VaCheckbox from './vuestic-components/va-checkbox/VaCheckbox.vue'
import VaProgressCircle
  from './vuestic-components/va-progress-bar/progress-types/VaProgressCircle.vue'
import VaDataTable from './vuestic-components/va-datatable/VaDataTable.vue'
import VaFeed from './vuestic-components/va-feed/VaFeed.vue'
import VaProgressBar
  from './vuestic-components/va-progress-bar/progress-types/VaProgressBar.vue'
import VaSlider from './vuestic-components/va-slider/VaSlider.vue'
import VaMediumEditor
  from './vuestic-components/va-medium-editor/VaMediumEditor.vue'
import VaModal from './vuestic-components/va-modal/VaModal.vue'
import VaMultiSelect
  from './vuestic-components/va-multi-select/VaMultiSelect.vue'
import VaPopover from './vuestic-components/va-popover/VaPopover.vue'
import VaPreLoader from './vuestic-components/va-pre-loader/VaPreLoader.vue'
import VaProfileCard
  from './vuestic-components/va-profile-card/VaProfileCard.vue'
import VaBadge from './vuestic-components/va-chip/VaBadge.vue'
import VaChip from './vuestic-components/va-chip/VaChip.vue'
import VaButton from './vuestic-components/va-button/VaButton.vue'
import VaButtonGroup
  from './vuestic-components/va-button-group/VaButtonGroup.vue'
import VaButtonToggle
  from './vuestic-components/va-button-toggle/VaButtonToggle.vue'
import VaPagination from './vuestic-components/va-pagination/VaPagination.vue'
import VaRadioButton from './vuestic-components/va-radio-button/VaRadioButton'
import VaScrollbar from './vuestic-components/va-scrollbar/VaScrollbar.vue'
import VaSimpleSelect
  from './vuestic-components/va-simple-select/VaSimpleSelect.vue'
import VaSocialNews from './vuestic-components/va-social-news/VaSocialNews.vue'
import VaSwitch from './vuestic-components/va-switch/VaSwitch.vue'
import VaTabs from './vuestic-components/va-tabs/VaTabs.vue'
import VaWizard from './vuestic-components/va-wizard/VaWizard.vue'
import VaTreeRoot from './vuestic-components/va-tree-view/VaTreeRoot'
import VaTreeCategory from './vuestic-components/va-tree-view/VaTreeCategory'
import VaTreeNode from './vuestic-components/va-tree-view/VaTreeNode'
import VaDatePicker from './vuestic-components/va-date-picker/VaDatePicker'
import VaFileUpload from './vuestic-components/va-file-upload/VaFileUpload'
import VaIcon from './vuestic-components/va-icon/VaIcon'
import VaDropdownOld from './vuestic-components/va-dropdown/VaDropdownOld'

import Toasted from './vuestic-mixins/VuesticToasted'

import Dropdown from './vuestic-directives/Dropdown'
import StickyScroll from './vuestic-directives/StickyScroll'

import VaAccordion from './vuestic-components/va-collapse/VaAccordion'
import VaCollapse from './vuestic-components/va-collapse/VaCollapse'
import VaTimeline from './vuestic-components/va-timeline/VaTimeline'
import VaTimelineItem from './vuestic-components/va-timeline/VaTimelineItem'
import VaPopup
  from './vuestic-components/va-popup/quasar/components/popup/VaPopup.vue'
import VaInput from './vuestic-components/va-input/VaInput'

import VaCountBadge from './vuestic-components/va-count-badge/VaCountBadge'
import VaCard from './vuestic-components/va-card/VaCard'
import { installQuasarPlatform } from './vuestic-components/va-popup/quasar/install'
import { DropdownPopperPlugin } from './vuestic-components/va-dropdown/dropdown-popover-subplugin'
import VaDropdown
  from './vuestic-components/va-dropdown/VaDropdown'

// At the moment we use quasar platform install to make its components work.
// Ideally we want to create similar vuestic platform object that holds needed values.
installQuasarPlatform()

const VuesticPlugin = {
  install (Vue, options) {
    [
      VaNotification,
      VaBreadcrumbs,
      VaChart,
      VaChat,
      VaCheckbox,
      VaProgressBar,
      VaDataTable,
      VaFeed,
      VaProgressCircle,
      VaModal,
      VaMultiSelect,
      VaPreLoader,
      VaProfileCard,
      VaProgressBar,
      VaBadge,
      VaChip,
      VaSlider,
      VaButton,
      VaButtonGroup,
      VaButtonToggle,
      VaPagination,
      VaRadioButton,
      VaScrollbar,
      VaSimpleSelect,
      VaSocialNews,
      VaSwitch,
      VaTabs,
      VaWizard,
      VaMediumEditor,
      VaPopover,
      VaTreeRoot,
      VaTreeCategory,
      VaTreeNode,
      VaFileUpload,
      VaDropdownOld,
      VaDatePicker,
      VaIcon,
      VaAccordion,
      VaCollapse,
      VaTimeline,
      VaTimelineItem,
      VaPopup,
      VaCard,
      VaCountBadge,
      VaInput,
      VaDropdown,
    ].forEach(component => {
      Vue.component(component.name, component)
    })

    Vue.use(DropdownPopperPlugin)

    Vue.mixin(Toasted)

    Vue.directive('dropdown', Dropdown)
    Vue.directive('sticky-scroll', StickyScroll)
  },
}

export default VuesticPlugin
