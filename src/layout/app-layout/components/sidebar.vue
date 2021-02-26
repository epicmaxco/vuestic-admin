<template>
  <va-sidebar class="app-sidebar__menu">
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
import AppSidebarLink from "./sidebar/AppSidebarLink";
import AppSidebarLinkGroup from "./sidebar/AppSidebarLinkGroup";
import NavigationRoutes from './sidebar/NavigationRoutes';

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
    }
  },
  methods: {
    hasActiveByDefault(item) {
      return item.children.some(child => child.name === this.$route.name);
    }
  }
};
</script>

<style lang="scss">
.app-sidebar {
  overflow: auto;
  display: flex;
  max-height: 100%;
  flex: 0 0 16rem;

  &--minimized {
    flex: 0 0 3.25rem;
  }

  &__menu {
    margin-bottom: 0;
    padding-top: 2.5625rem;
    padding-bottom: 2.5rem;
    list-style: none;
    padding-left: 0;
    width: 100%;
  }
}
</style>
