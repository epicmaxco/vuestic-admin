<template>
  <va-topbar
    :minimized="minimized"
  >
    <template slot="menu">
      <template v-for="(item, key) in items">
        <va-topbar-link-group
          v-if="item.children"
          :key="key"
          :minimized="minimized"
          :activeByDefault="hasActiveByDefault(item)"
          :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
          :title="$t(item.displayName)"
        >
          <va-topbar-link
            v-for="(subMenuItem, key) in item.children"
            :key="key"
            :activeByDefault="subMenuItem.name === $route.name"
            :to="{ name: subMenuItem.name }"
            :title="$t(subMenuItem.displayName)"
          />
        </va-topbar-link-group>
        <va-topbar-link
          v-else
          :key="key"
          :minimized="minimized"
          :activeByDefault="item.name === $route.name"
          :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
          :to="{ name: item.name }">
          <span slot="title">{{ $t(item.displayName) }}</span>
        </va-topbar-link>
      </template>
    </template>
  </va-topbar>
</template>

<script>
import { navigationRoutes } from '../app-sidebar/NavigationRoutes'

export default {
  name: 'app-topbar',
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
  methods: {
    hasActiveByDefault (item) {
      return item.children.some(child => child.name === this.$route.name)
    },
  },
}

</script>
