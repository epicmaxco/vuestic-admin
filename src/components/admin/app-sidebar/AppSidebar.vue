<template>
  <va-sidebar :hidden="isOpen">
    <template slot="menu">
      <template v-for="item in items">

        <sidebar-link-group
          v-if="item.children">
          <div
            class="d-flex align--center"
            slot="title"
          >
            <va-icon
              v-if="item.meta && item.meta.iconClass"
              :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
            />
            <span>{{ $t(item.displayName) }}</span>
          </div>
          <sidebar-link
            v-for="subMenuItem in item.children"
            :to="{ name: subMenuItem.name }"
          >
            <div slot="title">
              <span>{{ $t(subMenuItem.displayName) }}</span>
            </div>
          </sidebar-link>
        </sidebar-link-group>

        <sidebar-link
          v-else
          :to="{ name: item.name }">
          <div
            class="d-flex align--center"
            slot="title">
            <va-icon
              v-if="item.meta && item.meta.iconClass"
              :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
            />
            <span>{{ $t(item.displayName) }}</span>
          </div>
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
