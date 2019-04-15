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
        v-model="value"
        value-visible
        label="Label"
        color="info"
        icon-right="fa fa-volume-up"
      />
      <va-sidebar style="position: static; height: auto;" :hidden="true">
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
                :active="subMenuItem.meta ? subMenuItem.meta.isActiveByDefault : false"
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
              :active="item.meta ? item.meta.isActiveByDefault : false"
              :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
              :to="{ name: item.name }">
              <span slot="title">{{ $t(item.displayName) }}</span>
            </sidebar-link>
          </template>
        </template>
      </va-sidebar>
    </VbCard>
    <VbCard title="Change color">
      <va-color-picker-input v-model="$themes.info" mode="advanced"/>
      <va-color-picker-input v-model="$themes.success" mode="advanced"/>
      <va-color-picker-input v-model="$themes.secondary" mode="advanced"/>
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
import { breadcrumbs } from './../../../components/admin/app-breadcrumbs/Breadcrumbs'

export default {
  components: {
    VaIcon,
    VaButton,
    VaNotification,
    VaProgressBar,
    VaPaletteCustom,
    VaColorPickerInput,
    VaSidebar,
    SidebarLinkGroup,
    SidebarLink,
  },
  data () {
    return {
      value: 60,
      icon: 'iconicstroke iconicstroke-info',
      items: breadcrumbs.routes,
    }
  },
}
</script>
