<template>
  <va-sidebar :minimized="minimized" :style="{ color: theme.gray }">
    <template v-for="(item, key) in items">
      <app-sidebar-link-group
        v-if="item.children"
        :key="key + 'category'"
        :minimized="minimized"
        :icon="item.meta && item.meta.iconClass"
        :title="$t(item.displayName)"
        :children="item.children"
        :active-by-default="hasActiveByDefault(item)"
      >
        <app-sidebar-link
          v-for="(subMenuItem, key) in item.children"
          :key="key"
          :to="{ name: subMenuItem.name }"
          :title="$t(subMenuItem.displayName)"
        />
      </app-sidebar-link-group>
      <app-sidebar-link
        v-else
        :key="key"
        :minimized="minimized"
        :active-by-default="item.name === $route.name"
        :icon="item.meta && item.meta.iconClass"
        :to="{ name: item.name }"
        :title="$t(item.displayName)"
      />
    </template>
  </va-sidebar>
</template>

<script>
import AppSidebarLink from "./AppSidebarLink";
import AppSidebarLinkGroup from "./AppSidebarLinkGroup";
import NavigationRoutes from './NavigationRoutes';
import { useTheme } from 'vuestic-ui';

export default {
  name: "app-sidebar",
  components: {
    AppSidebarLink,
    AppSidebarLinkGroup
  },
  props: {
    minimized: {
      type: Boolean,
      required: true
    },
    color: {
      type: String,
      default: "secondary"
    }
  },
  data() {
    return {
      items: NavigationRoutes.routes
    };
  },
  computed: {
    computedClass() {
      return {
        "app-sidebar--minimized": this.minimized
      };
    },
    theme() {
      return useTheme().getColors()
    }
  },
  methods: {
    hasActiveByDefault(item) {
      return item.children.some(child => child.name === this.$route.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.va-sidebar__menu:deep() {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  width: 100%;
  box-sizing: border-box;
}

.va-sidebar--minimized {
  width: auto !important;
}
</style>
