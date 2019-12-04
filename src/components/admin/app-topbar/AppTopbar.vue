<template>
  <aside
    class="app-topbar"
    :style="computedStyles"
  >
    <ul class="app-topbar__menu">
      <template v-for="(item, key) in items">
        <app-topbar-link-group
          v-if="item.children"
          :key="key"
          :is-active="hasActiveByDefault(item)"
          :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
          :title="$t(item.displayName)"
        >
          <app-topbar-link
            v-for="(subMenuItem, key) in item.children"
            :key="key"
            :is-active="subMenuItem.name === $route.name"
            :to="{ name: subMenuItem.name }"
          >
            {{$t(subMenuItem.displayName)}}
          </app-topbar-link>
        </app-topbar-link-group>
        <app-topbar-link
          v-else
          :key="key"
          :is-active="item.name === $route.name"
          :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
          :to="{ name: item.name }"
        >
          {{ $t(item.displayName) }}
        </app-topbar-link>
      </template>
    </ul>
  </aside>
</template>

<script>
import AppTopbarLink from './components/AppTopbarLink'
import AppTopbarLinkGroup from './components/AppTopbarLinkGroup'
import { navigationRoutes } from '../app-sidebar/NavigationRoutes'
import { ColorThemeMixin } from '../../../services/vuestic-ui'

export default {
  name: 'app-topbar',
  mixins: [ColorThemeMixin],
  components: {
    AppTopbarLink,
    AppTopbarLinkGroup,
  },
  props: {
  },
  computed: {
    computedStyles () {
      return {
        backgroundColor: this.$themes.secondary,
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

.app-topbar {
  transition: all 0.3s ease;
  overflow-y: auto;
  width: 100%;
  min-height: 4rem;

  &__menu {
    list-style: none;
    padding-left: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    max-width: 90%;
    width: 100%;
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
