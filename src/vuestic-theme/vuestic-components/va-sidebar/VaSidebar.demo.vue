<template>
  <VbDemo>
    <VbCard title="Sidebar">
      <va-toggle v-model="minimized" label="Minimized"/>
      <va-toggle v-model="navbarView" label="Navbar view"/>
      <va-sidebar
        style="position: static; height: auto;"
        :minimized="minimized"
        :navbarView="navbarView">
        <template slot="menu">
          <template v-for="(item, index) in items">
            <sidebar-link-group
              :key="index"
              :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
              v-if="item.children">
              <span slot="title">{{ $t(item.displayName) }}</span>
              <sidebar-link
                v-for="(subMenuItem, index) in item.children"
                :key="index"
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
              :key="index"
              :active="item.meta ? item.meta.isActiveByDefault : false"
              :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
              :to="{ name: item.name }">
              <span slot="title">{{ $t(item.displayName) }}</span>
            </sidebar-link>
          </template>
        </template>
      </va-sidebar>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaSidebar
  from '../../vuestic-components/va-sidebar/VaSidebar'
import SidebarLinkGroup
  from './../../../components/admin/app-sidebar/components/SidebarLinkGroup'
import SidebarLink
  from './../../../components/admin/app-sidebar/components/SidebarLink'
import { breadcrumbs } from './../../../components/admin/app-breadcrumbs/Breadcrumbs'
import VaToggle from '../va-toggle/VaToggle'

export default {
  components: {
    VaToggle,
    VaSidebar,
    SidebarLinkGroup,
    SidebarLink,
  },
  data () {
    return {
      value: 60,
      icon: 'iconicstroke iconicstroke-info',
      theme: 'info',
      items: breadcrumbs.routes,
      hoverState: false,
      minimized: false,
      navbarView: true,
    }
  },
}
</script>
