<template>
  <aside
    class="app-topbar"
    :class="computedClass"
    :style="{ backgroundColor: colorComputed }"
  >
    <ul class="app-topbar__menu">
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
    </ul>
  </aside>
</template>

<script>
import VaTopbarLink from './components/AppTopbarLink'
import VaTopbarLinkGroup from './components/AppTopbarLinkGroup'
import { navigationRoutes } from '../app-sidebar/NavigationRoutes'
import { ColorThemeMixin } from '../../../services/vuestic-ui'

export default {
  name: 'app-topbar',
  mixins: [ColorThemeMixin],
  components: {
    VaTopbarLink,
    VaTopbarLinkGroup,
  },
  props: {
    minimized: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    computedClass () {
      return {
        'va-topbar--minimized': this.minimized,
      }
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

<style lang="scss">
@import "../../../services/vuestic-ui/styles";

.app-topbar {
  height: $sidebar-viewport-height;
  left: 0;
  transition: all 0.3s ease;
  overflow-y: auto;
  width: 100%;
  position: relative;
  top: 0;
  min-height: 4rem;

  &__menu {
    max-height: 100%;
    list-style: none;
    padding-left: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    max-width: 90%;
    width: 100%;
    height: 100%;
    min-height: 4rem;
    margin: 0 auto;
  }

  & + .content-wrap {
    margin-left: 0;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @include media-breakpoint-down(sm) {
    top: $sidebar-mobile-top;

    &__menu {
      max-width: 100%;
      padding: 0 1rem;
    }
  }

  &--minimized {
    left: 0;

    .va-topbar-link-group {
      .va-topbar-link__content {
        padding-right: 0;
      }
    }

    & + .content-wrap {
      margin-left: $sidebar-width--hidden !important;
    }
  }
}
</style>
