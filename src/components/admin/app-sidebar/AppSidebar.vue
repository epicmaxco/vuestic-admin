<template>
  <vuestic-sidebar :hidden="this.isOpen"
                   :toggleWithoutAnimation="toggleWithoutAnimation">
    <template slot="menu">
      <sidebar-link
        :to="'/admin/dashboard'">
        <span slot="icon" class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
        <span slot="title">{{'Dashboard' | translate}}</span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="icon" class="sidebar-menu-item-icon vuestic-icon vuestic-icon-statistics"></span>
        <span slot="title">{{'Statistics' | translate}}</span>
        <sidebar-link
          :to="'/admin/statistics/charts'"
          :isChildLink="true">
          <span slot="title">{{'Charts' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/statistics/progress-bars'"
          :isChildLink="true">
          <span slot="title">{{'Progress Bars' | translate}}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="icon" class="sidebar-menu-item-icon vuestic-icon vuestic-icon-forms"></span>
        <span slot="title">{{'Forms' | translate}}</span>
        <sidebar-link
          :to="'/admin/forms/form-elements'"
          :isChildLink="true">
          <span slot="title">{{'Form Elements' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/forms/form-wizard'"
          :isChildLink="true">
          <span slot="title">{{'Form Wizards' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/forms/medium-editor'"
          :isChildLink="true">
          <span slot="title">{{'Medium Editor' | translate}}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link
        :to="'/admin/tables'">
        <span slot="icon" class="sidebar-menu-item-icon vuestic-icon vuestic-icon-tables"></span>
        <span slot="title">{{'Tables' | translate}}</span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="icon" class="sidebar-menu-item-icon vuestic-icon vuestic-icon-ui-elements"></span>
        <span slot="title">{{'UI Elements' | translate}}</span>
        <sidebar-link
          :to="'/admin/ui/typography'"
          :isChildLink="true">
          <span slot="title">{{'Typography' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/ui/buttons'"
          :isChildLink="true">
          <span slot="title">{{'Buttons' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/ui/notifications'"
          :isChildLink="true">
          <span slot="title">{{'Notifications' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/ui/icons'"
          :isChildLink="true">
          <span slot="title">{{'Icons' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/ui/spinners'"
          :isChildLink="true">
          <span slot="title">{{'Spinners' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/ui/grid'"
          :isChildLink="true">
          <span slot="title">{{'Grid' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/ui/modals'"
          :isChildLink="true">
          <span slot="title">{{'Modals' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/ui/tree-view'"
          :isChildLink="true">
          <span slot="title">{{'Tree View' | translate}}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link
        :to="'/admin/extra'">
        <span slot="icon" class="sidebar-menu-item-icon vuestic-icon vuestic-icon-extras"></span>
        <span slot="title">{{'Extra' | translate}}</span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="icon" class="sidebar-menu-item-icon vuestic-icon vuestic-icon-auth"></span>
        <span slot="title">{{'Auth' | translate}}</span>
        <sidebar-link
          :to="'/admin/auth/login'"
          :isChildLink="true">
          <span slot="title">{{'Login' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/auth/signup'"
          :isChildLink="true">
          <span slot="title">{{'Signup' | translate}}</span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="icon" class="sidebar-menu-item-icon vuestic-icon vuestic-icon-auth"></span>
        <span slot="title">{{'Maps' | translate}}</span>
        <sidebar-link
          :to="'/admin/maps/google-maps'"
          :isChildLink="true">
          <span slot="title">{{'Google Maps' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/maps/yandex-maps'"
          :isChildLink="true">
          <span slot="title">{{'Yandex Maps' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/maps/leaflet-maps'"
          :isChildLink="true">
          <span slot="title">{{'Leaflet Maps' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/maps/bubble-maps'"
          :isChildLink="true">
          <span slot="title">{{'Bubble Maps' | translate}}</span>
        </sidebar-link>
        <sidebar-link
          :to="'/admin/maps/line-maps'"
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
      ])
    }
  }
</script>
