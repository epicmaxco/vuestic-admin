<template>
  <VbDemo>
    <VbCard title="All of these share `info` theme">
      <va-button class="mb-5" color="info">
        Default Button
      </va-button>
      <va-notification class="mb-5" color="info">
        <va-badge color="info"> Info</va-badge>
        You successfully read this important alert message.
      </va-notification>
      <va-progress-bar class="mb-5" indeterminate color="info"/>
      <va-slider
        class="mb-5"
        :value="60"
        value-visible
        label="Label"
        color="info"
        icon-right="fa fa-volume-up"
      />
    </VbCard>
    <VbCard style="position: relative">
      <va-sidebar minimized :navbar-view="false">
        <template slot="menu">
          <template v-for="(item, key) in items">
            <sidebar-link-group
              :key="key"
              :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
              v-if="item.children">
              <span slot="title">{{ $t(item.displayName) }}</span>
              <sidebar-link
                v-for="(subMenuItem, key) in item.children"
                :key="key"
                :to="{ name: subMenuItem.name }"
              >
                <div slot="title">
                  <span>{{ $t(subMenuItem.displayName) }}</span>
                </div>
              </sidebar-link>
            </sidebar-link-group>

            <sidebar-link
              v-else
              :key="key"
              :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
              :to="{ name: item.name }">
              <span slot="title">{{ $t(item.displayName) }}</span>
            </sidebar-link>
          </template>
        </template>
      </va-sidebar>
      <va-rating class="mb-5" color="info" :value="3">
        Default Button
      </va-rating>
      <va-tree-root color="info">
        <va-tree-category label="Electronics">
          <va-tree-node>Cellphones</va-tree-node>
          <va-tree-node>Camera Body Kits</va-tree-node>
          <va-tree-node>External HDDs</va-tree-node>
        </va-tree-category>
        <va-tree-category isOpen label="Products">
          <va-tree-category label="Cables">
            <va-tree-node>Audio</va-tree-node>
            <va-tree-node>Video</va-tree-node>
            <va-tree-node>Optical</va-tree-node>
          </va-tree-category>
          <va-tree-node>Monitors</va-tree-node>
          <va-tree-node>Keyboards</va-tree-node>
        </va-tree-category>
        <va-tree-category label="Apparel">
          <va-tree-node>Jackets</va-tree-node>
          <va-tree-node>Pants</va-tree-node>
          <va-tree-node>Skirts</va-tree-node>
        </va-tree-category>
      </va-tree-root>
      <va-chart type="line" :data="chartData"/>
      <va-button color="info" @click="refreshData">RefreshChartColors</va-button>
    </VbCard>
    <VbCard title="Change color">
      <div>
        primary
        <va-color-picker-input v-model="$themes.primary" mode="advanced"/>
      </div>
      <div>
        secondary
        <va-color-picker-input v-model="$themes.secondary" mode="advanced"/>
      </div>
      <div>
        success
        <va-color-picker-input v-model="$themes.success" mode="advanced"/>
      </div>
      <div>
        info
        <va-color-picker-input v-model="$themes.info" mode="advanced"/>
      </div>
      <div>
        warning
        <va-color-picker-input v-model="$themes.warning" mode="advanced"/>
      </div>
      <div>
        danger
        <va-color-picker-input v-model="$themes.danger" mode="advanced"/>
      </div>
    </VbCard>
    <VbCard title="These 2 badges share `info` theme">
      <VaBadge color="info">Info badge</VaBadge>
      <VaBadge outline color="info">Outlined info badge</VaBadge>
    </VbCard>
    <VbCard title="Darken theme a bit">
      <button @click="darkenTheme()">Darken</button>
    </VbCard>
  </VbDemo>

</template>

<script>
import VaIcon from './../../vuestic-components/va-icon/VaIcon'
import VaButton from './../../vuestic-components/va-button/VaButton'
import VaNotification
  from './../../vuestic-components/va-notification/VaNotification'
import VaProgressBar
  from './../../vuestic-components/va-progress-bar/progress-types/VaProgressBar'
import VaPaletteCustom
  from '../../vuestic-components/va-color-picker/VaPaletteCustom'
import VaColorPickerInput
  from '../../vuestic-components/va-color-picker/VaColorPickerInput'
import VaSidebar
  from '../../vuestic-components/va-sidebar/VaSidebar'
import SidebarLinkGroup
  from './../../../components/admin/app-sidebar/components/SidebarLinkGroup'
import SidebarLink
  from './../../../components/admin/app-sidebar/components/SidebarLink'
import { navigationRoutes } from '../../../components/admin/app-sidebar/NavigationRoutes'
import VaRating from '../../vuestic-components/va-rating/VaRating'
import SquareWithIcon
  from '../../vuestic-components/va-tree-view/SquareWithIcon/SquareWithIcon'
import VaTreeRoot from '../../vuestic-components/va-tree-view/VaTreeRoot'
import VaTreeCategory
  from '../../vuestic-components/va-tree-view/VaTreeCategory'
import VaTreeNode from '../../vuestic-components/va-tree-view/VaTreeNode'
import VaChart from '../../vuestic-components/va-chart/VaChart'
import { getLineChartData } from '../../../data/charts/LineChartData'
import VaBadge from '../../vuestic-components/va-chip/VaBadge'

export default {
  components: {
    VaBadge,
    VaChart,
    VaTreeNode,
    VaTreeCategory,
    VaTreeRoot,
    SquareWithIcon,
    VaRating,
    VaColorPickerInput,
    VaIcon,
    VaButton,
    VaNotification,
    VaProgressBar,
    VaPaletteCustom,
    VaSidebar,
    SidebarLinkGroup,
    SidebarLink,
  },
  data () {
    return {
      value: 60,
      icon: 'iconicstroke iconicstroke-info',
      items: navigationRoutes.routes,
      chartData: getLineChartData(this.$themes),
    }
  },
  methods: {
    refreshData () {
      this.chartData = getLineChartData(this.$themes)
    },
    darkenTheme () {
      // NOTE For testing. So that we can observe theme changed
      const newTheme = {
        'primary': '#9A0931',
        'secondary': '#C50B0B',
        'success': '#06421E',
        'info': '#021C38',
        'danger': '#440606',
        'warning': '#3C2D03',
        'gray': '#babfc2',
        'dark': '#34495e',
      }

      for (const index in newTheme) {
        this.$set(this.$themes, index, newTheme[index])
      }
    },
  },
}
</script>
