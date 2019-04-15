<template>
  <va-sidebar :hidden="isOpen">
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
