<template>
  <vuestic-sidebar :hidden="this.isOpen"
                   :toggleWithoutAnimation="toggleWithoutAnimation">
    <template slot="menu">
      <sidebar-link
        :to="{ name: 'dashboard' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>{{ $t('menu.dashboard') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-statistics"></span>
          <span>{{ $t('menu.statistics') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'charts' }">
          <span slot="title">{{ $t('menu.charts') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'progress-bars' }">
          <span slot="title">{{ $t('menu.progressBars') | translate }}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-forms"></span>
          <span>{{ $t('menu.forms') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'form-elements' }">
          <span slot="title">{{ $t('menu.formElements') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'form-wizard' }">
          <span slot="title">{{ $t('menu.formWizards') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'medium-editor' }">
          <span slot="title">{{ $t('menu.mediumEditor') }}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link
        :to="{ name: 'tables' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-tables"></span>
          <span>{{ $t('menu.tables') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-ui-elements"></span>
          <span>{{ $t('menu.uiElements') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'typography' }">
          <span slot="title">{{ $t('menu.typography') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'buttons' }">
          <span slot="title">{{ $t('menu.buttons') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'notifications' }">
          <span slot="title">{{ $t('menu.notifications') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'icons' }">
          <span slot="title">{{ $t('menu.icons') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'spinners' }">
          <span slot="title">{{ $t('menu.spinners') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'grid' }">
          <span slot="title">{{ $t('menu.grid') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'modals' }">
          <span slot="title">{{ $t('menu.modals') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'tree-view' }">
          <span slot="title">{{ $t('menu.treeView') }}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link
        :to="{ name: 'extra' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-extras"></span>
          <span>{{ $t('menu.extra') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-auth"></span>
          <span>{{ $t('menu.auth') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'login' }"
          :isChildLink="true">
          <span slot="title">{{ $t('menu.login') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'signup' }">
          <span slot="title">{{ $t('menu.signUp') }}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-auth"></span>
          <span>{{ $t('menu.maps') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'google-maps' }">
          <span slot="title">{{ 'Google Maps' }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'yandex-maps' }">
          <span slot="title">{{ 'Yandex Maps' }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'leaflet-maps' }">
          <span slot="title">{{ 'Leaflet Maps' }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'bubble-maps' }">
          <span slot="title">{{ $t('Bubble Maps') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'line-maps' }">
          <span slot="title">{{ $t('Line Maps') }}</span>
        </sidebar-link>
      </sidebar-link-group>
    </template>
  </vuestic-sidebar>
</template>

<script>

  import VuesticSidebar from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
  import {mapGetters} from 'vuex'
  import SidebarLink from './components/SidebarLink'
  import SidebarLinkGroup from './components/SidebarLinkGroup'

  export default {
    name: 'app-sidebar',
    components: {
      VuesticSidebar,
      SidebarLink,
      SidebarLinkGroup
    },
    props: {
      isOpen: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      ...mapGetters([
        'toggleWithoutAnimation'
      ]),
    }
  }


</script>
