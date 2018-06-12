<template>
  <vuestic-sidebar :hidden="this.isOpen"
                   :toggleWithoutAnimation="toggleWithoutAnimation">
    <template slot="menu">
      <sidebar-link
        :to="{ name: 'Dashboard' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>{{ $t('Dashboard') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-statistics"></span>
          <span>{{ $t('Statistics') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'Charts' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Charts') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Progress Bars' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Progress Bars') }}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-forms"></span>
          <span>{{ $t('Forms') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'Form Elements' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Form Elements') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Form Wizard' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Form Wizard') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Medium Editor' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Medium Editor') }}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link
        :to="{ name: 'Tables' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-tables"></span>
          <span>{{ $t('Tables') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-ui-elements"></span>
          <span>{{ $t('UI Elements') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'Typography' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Typography') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Buttons' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Buttons') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Notifications' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Notifications') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Icons' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Icons') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Spinners' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Spinners') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Grid' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Grid') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Modals' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Modals') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Tree View' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Tree View') }}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link
        :to="{ name: 'Extra' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-extras"></span>
          <span>{{ $t('Extra') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-auth"></span>
          <span>{{ $t('Auth') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'Login' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Login') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Signup' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Signup') }}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-auth"></span>
          <span>{{ $t('Maps') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'Google Maps' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Google Maps') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Yandex Maps' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Yandex Maps') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Leaflet Maps' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Leaflet Maps') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Bubble Maps' }"
          :isChildLink="true">
          <span slot="title">{{ $t('Bubble Maps') }}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Line Maps' }"
          :isChildLink="true">
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
