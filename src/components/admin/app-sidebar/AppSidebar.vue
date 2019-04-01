<template>
  <va-sidebar :hidden="isOpen">
    <template slot="menu">
      <sidebar-link
        :to="{ name: 'dashboard' }">
        <span slot="title">
          <va-icon icon="sidebar-menu-item-icon vuestic-iconset vuestic-iconset-dashboard"/>
          <span>{{ $t('menu.dashboard') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <va-icon icon="sidebar-menu-item-icon vuestic-iconset vuestic-iconset-statistics"/>
          <span>{{ $t('menu.statistics') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'charts' }">
          <span slot="title">
            <span>{{ $t('menu.charts') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'progress-bars' }">
          <span slot="title">
            <span>{{ $t('menu.progressBars') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <va-icon icon="sidebar-menu-item-icon vuestic-iconset vuestic-iconset-forms"/>
          <span>{{ $t('menu.forms') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'form-elements' }">
          <span slot="title">
            <span>{{ $t('menu.formElements') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'form-wizards' }">
          <span slot="title">
            <span>{{ $t('menu.formWizards') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'medium-editor' }">
          <span slot="title">
            <span>{{ $t('menu.mediumEditor') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link
        :to="{ name: 'tables' }">
        <span slot="title">
          <va-icon icon="sidebar-menu-item-icon vuestic-iconset vuestic-iconset-tables"/>
          <span>{{ $t('menu.tables') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <va-icon icon="sidebar-menu-item-icon vuestic-iconset vuestic-iconset-ui-elements"/>
          <span>{{ $t('menu.uiElements') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'typography' }">
          <span slot="title">
            <span>{{ $t('menu.typography') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'buttons' }">
          <span slot="title">
            <span>{{ $t('menu.buttons') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'collapses' }">
          <span slot="title">
            <span>{{ $t('menu.collapses') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'color-pickers' }">
          <span slot="title">
            <span>{{ $t('menu.colorPickers') }}</span>
          </span>
        </sidebar-link>
        <!-- NOTE Dropdowns are not presentation ready yet. See https://github.com/epicmaxco/vuestic-admin/issues/438 -->
        <!--<sidebar-link-->
        <!--:to="{ name: 'dropdowns' }"-->
        <!--&gt;-->
        <!--<span slot="title">-->
        <!--<span>{{ $t('menu.dropdowns') }}</span>-->
        <!--</span>-->
        <!--</sidebar-link>-->
        <sidebar-link
          :to="{ name: 'filters' }">
          <span slot="title">
            <span>{{ $t('menu.filters') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'timelines' }">
          <span slot="title">
            <span>{{ $t('menu.timelines') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'notifications' }">
          <span slot="title">
            <span>{{ $t('menu.notifications') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'icon-sets' }">
          <span slot="title">
            <span>{{ $t('menu.icons') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'spinners' }">
          <span slot="title">
            <span>{{ $t('menu.spinners') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'grid' }">
          <span slot="title">
            <span>{{ $t('menu.grid') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'modals' }">
          <span slot="title">
            <span>{{ $t('menu.modals') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'file-upload' }">
          <span slot="title">
            <span>{{ $t('menu.fileUpload') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'chips' }">
          <span slot="title">
            <span>{{ $t('menu.chips') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'tree-view' }">
          <span slot="title">
            <span>{{ $t('menu.treeView') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'cards' }">
          <span slot="title">
            <span>{{ $t('menu.cards') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'spacing'}">
          <span slot="title">
            <span>{{ $t('menu.spacing') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'sliders'}">
          <span slot="title">
            <span>{{ $t('menu.sliders') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link
        :to="{ name: 'extra' }">
        <span slot="title">
          <va-icon icon="sidebar-menu-item-icon vuestic-iconset vuestic-iconset-extras"/>
          <span>{{ $t('menu.extra') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <va-icon icon="sidebar-menu-item-icon vuestic-iconset vuestic-iconset-auth"/>
          <span>{{ $t('menu.auth') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'login' }"
          target="_blank"
          :isChildLink="true">
          <span slot="title">
            <span>{{ $t('menu.login') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'signup' }"
          target="_blank">
          <span slot="title">
            <span>{{ $t('menu.signUp') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <va-icon icon="sidebar-menu-item-icon vuestic-iconset vuestic-iconset-maps"/>
          <span>{{ $t('menu.maps') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'google-maps' }">
          <span slot="title">
            <span>{{ 'Google Maps' }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'yandex-maps' }">
          <span slot="title">
            <span>{{ 'Yandex Maps' }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'leaflet-maps' }">
          <span slot="title">
            <span>{{ 'Leaflet Maps' }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'bubble-maps' }">
          <span slot="title">
            <span>{{ $t('Bubble Maps') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'line-maps' }">
          <span slot="title">
            <span>{{ $t('Line Maps') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <va-icon icon="sidebar-menu-item-icon vuestic-iconset vuestic-iconset-files"/>
          <span>{{ $t('menu.pages') }}</span>
        </span>
        <sidebar-link
          :to="{ name: '404-pages' }">
          <span slot="title">
            <span>{{ $t('404 Pages') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
    </template>
  </va-sidebar>
</template>

<script>

import VaSidebar
  from '../../../vuestic-theme/vuestic-components/va-sidebar/VaSidebar'
import SidebarLink from './components/SidebarLink'
import SidebarLinkGroup from './components/SidebarLinkGroup'

export default {
  name: 'app-sidebar',
  components: {
    VaSidebar,
    SidebarLink,
    SidebarLinkGroup,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
}

</script>
