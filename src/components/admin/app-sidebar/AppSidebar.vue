<template>
  <va-sidebar :hidden="isOpen">
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
</template>

<script>
import VaSidebar
  from '../../../vuestic-theme/vuestic-components/va-sidebar/VaSidebar'
import SidebarLink from './components/SidebarLink'
import SidebarLinkGroup from './components/SidebarLinkGroup'
import { breadcrumbs } from './../app-breadcrumbs/Breadcrumbs'

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
  data () {
    return {
      items: breadcrumbs.routes,
    }
  },
}

</script>
