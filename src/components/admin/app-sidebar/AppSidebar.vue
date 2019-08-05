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
          :children="item.children"
        >
          <sidebar-link
            v-for="(subMenuItem, key) in item.children"
            :key="key"
            :to="{ name: subMenuItem.name }"
            :title="$t(subMenuItem.displayName)"
          />
        </sidebar-link-group>
        <sidebar-link
          v-else
          :key="key"
          :minimized="minimized"
          :activeByDefault="item.name === $route.name"
          :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
          :to="{ name: item.name }">
          <span slot="title">{{ $t(item.displayName) }}</span>
        </sidebar-link>
      </template>
    </template>
  </va-sidebar>
</template>

<script>
import SidebarLink from './components/SidebarLink'
import SidebarLinkGroup from './components/SidebarLinkGroup'
import { navigationRoutes } from './NavigationRoutes'

export default {
  name: 'app-sidebar',
  components: {
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
      items: navigationRoutes.routes,
    }
  },
}

</script>
