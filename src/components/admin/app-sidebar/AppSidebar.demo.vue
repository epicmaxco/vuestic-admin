<template>
  <VbDemo>
    <VbCard title="Sidebar">
      <app-sidebar
        style="position: static; height: auto;"
        :minimized="minimized"
      >
        <template slot="menu">
          <template v-for="(item, index) in items">
            <app-sidebar-link-group
              :key="index"
              :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
              v-if="item.children">
              <span slot="title">{{ item.displayName }}</span>
              <app-sidebar-link
                v-for="(subMenuItem, index) in item.children"
                :key="index"
                :to="{ name: subMenuItem.name }"
              >
                <div slot="title">
                  <span>{{ subMenuItem.displayName }}</span>
                </div>
              </app-sidebar-link>
            </app-sidebar-link-group>

            <app-sidebar-link
              v-else
              :key="index"
              :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
              :to="{ name: item.name }">
              <span slot="title">{{ item.displayName }}</span>
            </app-sidebar-link>
          </template>
        </template>
      </app-sidebar>
    </VbCard>

    <VbCard title="Sidebar minimised">
      <app-sidebar
        style="position: static; height: auto;"
        minimized
      >
        <template slot="menu">
          <template v-for="(item, index) in items">
            <app-sidebar-link-group
              :key="index"
              :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
              v-if="item.children"
              minimized
            >
              <span slot="title">{{ item.displayName }}</span>
              <app-sidebar-link
                v-for="(subMenuItem, index) in item.children"
                :key="index"
                :to="{ name: subMenuItem.name }"
                minimized
              >
                <div slot="title">
                  <span>{{ subMenuItem.displayName }}</span>
                </div>
              </app-sidebar-link>
            </app-sidebar-link-group>

            <app-sidebar-link
              v-else
              :key="index"
              :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
              :to="{ name: item.name }"
              minimized
            >
              <span slot="title">{{ item.displayName }}</span>
            </app-sidebar-link>
          </template>
        </template>
      </app-sidebar>
    </VbCard>
  </VbDemo>
</template>

<script>
import AppSidebar from './AppSidebar'
import AppSidebarLinkGroup from './components/AppSidebarLinkGroup'
import AppSidebarLink from './components/AppSidebarLink'
import { navigationRoutes } from './NavigationRoutes'

export default {
  components: {
    AppSidebar,
    AppSidebarLinkGroup,
    AppSidebarLink,
  },
  data () {
    return {
      value: 60,
      icon: 'iconicstroke iconicstroke-info',
      theme: 'info',
      items: navigationRoutes.routes,
      hoverState: false,
      minimized: false,
    }
  },
}
</script>
