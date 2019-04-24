<template>
  <va-sidebar :minimized="minimized">
    <template slot="menu">

      <template v-for="(item, key) in items">

        <sidebar-link-group
          :key="key"
          :minimized="minimized"
          :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
          v-if="item.children"
          :title="$t(item.displayName)"
        >
          <sidebar-link
            v-for="(subMenuItem, key) in item.children"
            :key="key"
            :active="subMenuItem.meta ? subMenuItem.meta.isActiveByDefault : false"
            :to="{ name: subMenuItem.name }"
            :title="$t(subMenuItem.displayName)"
          />
        </sidebar-link-group>

        <sidebar-link
          v-else
          :key="key"
          :minimized="minimized"
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
    minimized: {
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
