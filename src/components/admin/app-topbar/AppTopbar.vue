<template>
  <va-topbar
    :minimized="minimized"
  >
    <template slot="menu">

      <template v-for="(item, key) in items">
        <topbar-link-group
          :key="key"
          :minimized="minimized"
          :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
          v-if="item.children"
          :title="$t(item.displayName)"
        >
          <topbar-link
            v-for="(subMenuItem, key) in item.children"
            :key="key"
            :activeByDefault="subMenuItem.name === $route.name"
            :to="{ name: subMenuItem.name }"
            :title="$t(subMenuItem.displayName)"
          />
        </topbar-link-group>
        <topbar-link
          v-else
          :key="key"
          :minimized="minimized"
          :activeByDefault="item.name === $route.name"
          :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
          :to="{ name: item.name }">
          <span slot="title">{{ $t(item.displayName) }}</span>
        </topbar-link>
      </template>
    </template>
  </va-topbar>
</template>

<script>
import TopbarLink from './components/TopbarLink'
import TopbarLinkGroup from './components/TopbarLinkGroup'
import { navigationRoutes } from '../app-breadcrumbs/NavigationRoutes'
import VaTopbar from '../../../vuestic-theme/vuestic-components/va-topbar/VaTopbar'

export default {
  name: 'app-topbar',
  components: {
    VaTopbar,
    TopbarLink,
    TopbarLinkGroup,
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
