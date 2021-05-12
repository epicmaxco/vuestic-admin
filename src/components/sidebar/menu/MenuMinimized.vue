<template>
  <va-dropdown
    v-for="(route, idx) in items"
    :key="idx"
    position="right"
    fixed
    :offset="[0, 8]"
    :preventOverflow="false"
  >
    <template #anchor>
      <va-sidebar-item :active="isItemChildsActive(route)">
        <va-sidebar-item-content>
          <va-icon :name="route.meta.icon" class="va-sidebar-item__icon"/>
          <va-icon v-if="route.children" class="more_icon" name="more_horiz"/>          
        </va-sidebar-item-content>
      </va-sidebar-item>
    </template>
    <div class="sidebar-item__children">
      <template v-for="(child, index) in route.children" :key="index">
        <va-sidebar-item :active="isRouteActive(child)" :to="{ name: child.name }">
          <va-sidebar-item-content>
            <va-sidebar-item-title>
              {{ $t(child.displayName) }}
            </va-sidebar-item-title>            
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>
    </div>
  </va-dropdown>
</template>

<script>
import { useGlobalConfig } from 'vuestic-ui';

export default {
  name: "AppMenuMinimized",
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
    isRouteActive(item) {
      return item.name === this.$route.name;
    },
    isItemChildsActive(item) {
      if (!item.children) {
        return false;
      }

      const isCurrentItemActive = this.isRouteActive(item);
      const isChildActive = !!item.children.find(child =>
        child.children ? this.isItemChildsActive(child) : this.isRouteActive(child)
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
    background: var(--va-secondary);
  }
}

.va-sidebar-item {
  &__icon {
    margin: 0;
  }

  &-content {
    position: relative;

    .more_icon {
      text-align: center;
      position: absolute;
      bottom: 0.5rem;
      left: 50%;
      transform: translateX(-50%) translateY(50%);
    }
  }
}


</style>
