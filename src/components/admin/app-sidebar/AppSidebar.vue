<template>
  <va-sidebar
    :minimized="minimized"
    :navbarView="navbarView"
  >
    <template slot="menu">

      <template v-for="(item, key) in items">

        <sidebar-link-group
          :key="key"
          :minimized="minimized"
          :navbarView="navbarView"
          :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
          v-if="item.children"
          :title="$t(item.displayName)"
          :activeByDefault="isActiveByDefault(item)"
        >
          <sidebar-link
            v-for="(subMenuItem, key) in item.children"
            :key="key"
            :navbarView="navbarView"
            :activeByDefault="subMenuItem.name === $route.name ? true : subMenuItem.meta ? subMenuItem.meta.isActiveByDefault : false"
            :to="{ name: subMenuItem.name }"
            :title="$t(subMenuItem.displayName)"
          />
        </sidebar-link-group>
        <sidebar-link
          v-else
          :key="key"
          :minimized="minimized"
          :navbarView="navbarView"
          :activeByDefault="subMenuItem.name === $route.name ? true : subMenuItem.meta ? subMenuItem.meta.isActiveByDefault : false"
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
    navbarView: {
      type: Boolean,
      required: true,
    },
  },
  data () {
    return {
      items: breadcrumbs.routes,
    }
  },
  methods: {
    isActiveByDefault (item) {
      return (this.minimized || this.navbarView) && !!item.children.filter(child => child.name === this.$route.name).length
    },
  },
}

</script>
