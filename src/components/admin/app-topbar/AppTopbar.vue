<template>
  <aside
    class="app-topbar"
    :style="computedStyles"
  >
    <ul class="app-topbar__menu">
      <template v-for="(item, key) in items">
        <app-topbar-link-group
          class="app-topbar__menu-group"
          v-if="item.children"
          :key="key"
          :is-active="hasActiveByDefault(item)"
          :icon="[ 'sidebar-menu-item-icon vuestic-iconset', item.meta.iconClass ]"
          :title="$t(item.displayName)"
          :is-multi-row="item.children.length > 10"
        >
          <app-topbar-link-group-item
            class="app-topbar__menu-group-item"
            :class="{'app-topbar__menu-group-item--multi-row': item.children.length > 10 }"
            v-for="(subMenuItem, key) in item.children"
            :key="key"
            :to="{ name: subMenuItem.name }"
            :is-active="subMenuItem.name === $route.name"
            :title="$t(subMenuItem.displayName)"
          />
        </app-topbar-link-group>
        <app-topbar-link
          class="app-topbar__link"
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
import AppTopbarLinkGroupItem from './components/AppTopbarLinkGroupItem'
import { navigationRoutes } from '../app-sidebar/NavigationRoutes'
import { ColorThemeMixin } from '../../../services/vuestic-ui'

export default {
  name: 'app-topbar',
  mixins: [ColorThemeMixin],
  inject: ['contextConfig'],
  components: {
    AppTopbarLink,
    AppTopbarLinkGroup,
    AppTopbarLinkGroupItem,
  },
  props: {
  },
  computed: {
    computedStyles () {
      if (this.contextConfig.invertedColor) {
        return {
          backgroundColor: 'white',
          boxShadow: '0 2px 3px 0 rgba(52, 56, 85, 0.25)',
        }
      }

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
  width: 100%;
  display: flex;

  &__menu {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    min-height: 4rem;
    margin: 0 auto;
    max-width: 90%;
    width: 100%;

    &-group {
      @include media-breakpoint-down(sm) {
        flex-grow: 1;
      }
    }

    &-group-item {
      display: inline-flex;
      flex-wrap: wrap;
      width: 100%;
      white-space: nowrap;
      color: inherit;

      &--multi-row {
        width: 33.33%;
      }
    }
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
