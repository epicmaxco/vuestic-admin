<template>
  <va-dropdown
    v-for="(route, idx) in items"
    :key="idx"
    position="right"
    fixed
    :preventOverflow="false"
  >
    <template #anchor>
      <template v-if="isGroup(route)">
        <sidebar-item
          :icon="route.meta.icon"
          :active="isItemChildsActive(route)"
        >
          <va-icon class="more_icon" name="more_horiz"/>
        </sidebar-item>
      </template>
      <sidebar-item
        v-else
        :icon="route.meta.icon"
        :to="{ name: route.name }"
        :active="isActiveRoute(route)"
      />
    </template>
    <div class="sidebar-item__children" :style="{ background: theme.navbar }">
      <template v-for="(child, index) in route.children" :key="index">
        <sidebar-item
          :title="$t(child.displayName)"
          :to="{ name: child.name }"
          :active="isActiveRoute(child)"
        />
      </template>
    </div>
  </va-dropdown>
</template>

<script>
import { useGlobalConfig } from 'vuestic-ui';
import SidebarItem from "../SidebarItem";

export default {
  name: "AppMenuMinimized",
  components: { SidebarItem },
  props: {
    items: { type: Array, default: () => [] }
  },
  computed: {
    theme() {
      return useGlobalConfig().getGlobalConfig().colors
    },
  },
  methods: {
    isGroup(item) {
      return !!item.children;
    },
    isActiveRoute(item) {
      return item.name === this.$route.name;
    },
    isItemChildsActive(item) {
      if (!item.children) {
        return false;
      }

      const isCurrentItemActive = this.isActiveRoute(item);
      const isChildActive = !!item.children.find(child =>
        child.children ? this.isItemChildsActive(child) : this.isActiveRoute(child)
      );

      return isCurrentItemActive || isChildActive;
    },
  }
};
</script>

<style lang="scss" scoped>
.sidebar-item {
  position: relative;
  &__children {
    max-height: 60vh;
    overflow-y: auto;
    overflow-x: visible;
    min-width: 8rem;
  }
}

.more_icon {
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateX(50%);
}
</style>
