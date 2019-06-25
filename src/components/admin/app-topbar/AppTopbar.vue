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
          :activeByDefault="isActiveByDefault(item)"
        >
          <topbar-link
            v-for="(subMenuItem, key) in item.children"
            :key="key"
            :activeByDefault="subMenuItem.name === $route.name ? true : subMenuItem.meta ? subMenuItem.meta.isActiveByDefault : false"
            :to="{ name: subMenuItem.name }"
            :title="$t(subMenuItem.displayName)"
          />
        </topbar-link-group>
        <topbar-link
          v-else
          :key="key"
          :minimized="minimized"
          :activeByDefault="item.name === $route.name ? true : item.meta ? item.meta.isActiveByDefault : false"
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
import { breadcrumbs } from './../app-breadcrumbs/Breadcrumbs'
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
      items: breadcrumbs.routes,
    }
  },
  methods: {
    isActiveByDefault (item) {
      return !!item.children.filter(child => child.name === this.$route.name).length
    },
  },
}

</script>
