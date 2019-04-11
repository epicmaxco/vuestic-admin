<template>
  <VbDemo>
    <VbCard>
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
          <template v-for="item in items">
            <sidebar-link-group
              :key="item"
              :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
              v-if="item.children">
              <span slot="title">{{ $t(item.displayName) }}</span>
              <sidebar-link
                v-for="subMenuItem in item.children"
                :key="subMenuItem"
                :to="{ name: subMenuItem.name }"
              >
                <div slot="title">
                  <span>{{ $t(subMenuItem.displayName) }}</span>
                </div>
              </sidebar-link>
            </sidebar-link-group>

            <sidebar-link
              v-else
              :key="item"
              :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
              :to="{ name: item.name }">
              <span slot="title">{{ $t(item.displayName) }}</span>
            </sidebar-link>
          </template>
        </template>
      </va-sidebar>
    </VbCard>
    <VbCard title="Themes">
      <div>Info Theme</div>
      <va-pallet-custom
        :palette="paletteArray"
        v-model="color"
        @input="changeInfoTheme()"
        class="spinners__color-picker"
      />
      <div>Success Theme</div>
      <va-pallet-custom
        :palette="paletteArray"
        v-model="color2"
        @input="changeSuccessTheme()"
        class="spinners__color-picker"
      />
      <div>Secondary Theme</div>
      <va-pallet-custom
        :palette="paletteArray"
        v-model="color3"
        @input="changeSecondaryTheme()"
        class="spinners__color-picker"
      />
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
import VaPalletCustom
  from '../../vuestic-components/va-color-picker/VaPalletCustom'
import VaSidebar
  from '../../vuestic-components/va-sidebar/VaSidebar'
import SidebarLinkGroup
  from './../../../components/admin/app-sidebar/components/SidebarLinkGroup'
import SidebarLink
  from './../../../components/admin/app-sidebar/components/SidebarLink'
import { colorArray } from '../../vuestic-components/va-color-picker/VuesticTheme'
import { breadcrumbs } from './../../../components/admin/app-breadcrumbs/Breadcrumbs'

export default {
  components: {
    VaIcon,
    VaButton,
    VaNotification,
    VaProgressBar,
    VaPalletCustom,
    VaSidebar,
    SidebarLinkGroup,
    SidebarLink,
  },
  data () {
    return {
      value: 60,
      icon: 'iconicstroke iconicstroke-info',
      color: '#4ab2e3',
      color2: '#4ae387',
      color3: '#db76df',
      theme: 'info',
      paletteArray: colorArray,
      items: breadcrumbs.routes,
      hoverState: false,
    }
  },
  methods: {
    changeInfoTheme () {
      this.$themes.info = this.color
    },
    changeSuccessTheme () {
      this.$themes.success = this.color2
    },
    changeSecondaryTheme () {
      this.$themes.secondary = this.color3
    },
  },
}
</script>
