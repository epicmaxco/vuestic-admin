<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">
      <sidebar-link
        :to="{ name: 'dashboard' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>{{ $t('menu.dashboard') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-statistics"></span>
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
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-forms"></span>
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
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-tables"></span>
          <span>{{ $t('menu.tables') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-ui-elements"></span>
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
          :to="{ name: 'collapse' }">
          <span slot="title">
            <span>{{ $t('menu.collapse') }}</span>
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
          :to="{ name: 'tags' }">
          <span slot="title">
            <span>{{ $t('menu.tags') }}</span>
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
      </sidebar-link-group>
      <sidebar-link
        :to="{ name: 'extra' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-extras"></span>
          <span>{{ $t('menu.extra') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-auth"></span>
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
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-maps"></span>
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
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-files"></span>
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
  </vuestic-sidebar>
</template>

<script>

import VuesticSidebar
  from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
import SidebarLink from './components/SidebarLink'
import SidebarLinkGroup from './components/SidebarLinkGroup'

export default {
  name: 'app-sidebar',
  components: {
    VuesticSidebar,
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
