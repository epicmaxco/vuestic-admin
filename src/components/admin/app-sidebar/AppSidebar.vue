<template>
  <vuestic-sidebar :hidden="this.isOpen"
                   :toggleWithoutAnimation="toggleWithoutAnimation">
    <template slot="menu">
      <sidebar-link
        :to="{ name: 'Dashboard' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>{{'Dashboard' | translate}}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-statistics"></span>
          <span>{{'Statistics' | translate}}</span>
        </span>
        <sidebar-link
          :to="{ name: 'Charts' }"
          :isChildLink="true">
          <span slot="title">{{'Charts' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Progress Bars' }"
          :isChildLink="true">
          <span slot="title">{{'Progress Bars' | translate}}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-forms"></span>
          <span>{{'Forms' | translate}}</span>
        </span>
        <sidebar-link
          :to="{ name: 'Form Elements' }"
          :isChildLink="true">
          <span slot="title">{{'Form Elements' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Form Wizard' }"
          :isChildLink="true">
          <span slot="title">{{'Form Wizard' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Medium Editor' }"
          :isChildLink="true">
          <span slot="title">{{'Medium Editor' | translate}}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link
        :to="{ name: 'Tables' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-tables"></span>
          <span>{{'Tables' | translate}}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-ui-elements"></span>
          <span>{{'UI Elements' | translate}}</span>
        </span>
        <sidebar-link
          :to="{ name: 'Typography' }"
          :isChildLink="true">
          <span slot="title">{{'Typography' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Buttons' }"
          :isChildLink="true">
          <span slot="title">{{'Buttons' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Notifications' }"
          :isChildLink="true">
          <span slot="title">{{'Notifications' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Icons' }"
          :isChildLink="true">
          <span slot="title">{{'Icons' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Spinners' }"
          :isChildLink="true">
          <span slot="title">{{'Spinners' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Grid' }"
          :isChildLink="true">
          <span slot="title">{{'Grid' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Modals' }"
          :isChildLink="true">
          <span slot="title">{{'Modals' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Tree View' }"
          :isChildLink="true">
          <span slot="title">{{'Tree View' | translate}}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link
        :to="{ name: 'Extra' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-extras"></span>
          <span>{{'Extra' | translate}}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-auth"></span>
          <span>{{'Auth' | translate}}</span>
        </span>
        <sidebar-link
          :to="{ name: 'Login' }"
          :isChildLink="true">
          <span slot="title">{{'Login' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Signup' }"
          :isChildLink="true">
          <span slot="title">{{'Signup' | translate}}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-auth"></span>
          <span>{{'Maps' | translate}}</span>
        </span>
        <sidebar-link
          :to="{ name: 'Google Maps' }"
          :isChildLink="true">
          <span slot="title">{{'Google Maps' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Yandex Maps' }"
          :isChildLink="true">
          <span slot="title">{{'Yandex Maps' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Leaflet Maps' }"
          :isChildLink="true">
          <span slot="title">{{'Leaflet Maps' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Bubble Maps' }"
          :isChildLink="true">
          <span slot="title">{{'Bubble Maps' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'Line Maps' }"
          :isChildLink="true">
          <span slot="title">{{'Line Maps' | translate}}</span>
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
