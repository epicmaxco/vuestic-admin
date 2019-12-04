<template>
  <li
    class="app-topbar-link-group"
    :class="computedClass"
  >
    <va-dropdown
      position="bottom"
      fixed
      :preventOverflow="false"
      ref="dropdown"
    >
      <app-topbar-link
        slot="anchor"
        target="_self"
        @mouseenter="updateHoverState"
        @mouseleave="updateHoverState"
        :style="sidebarLinkStyles"
        class="app-topbar-link"
        :class="computedLinkClass"
        :icon="icon"
      >
        {{title}}
      </app-topbar-link>
      <ul
        class="app-topbar-link-group__submenu in"
        :style="{backgroundColor: $themes.color}"
      >
        <slot/>
      </ul>
    </va-dropdown>
  </li>
</template>

<script>
import { getHoverColor } from './../../../../services/vuestic-ui'
import AppTopbarLink from './AppTopbarLink'

export default {
  name: 'topbar-link-group',
  components: {
    AppTopbarLink,
  },
  props: {
    icon: [String, Array],
    title: String,
    minimized: Boolean,
    isActive: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'secondary',
    },
  },
  data () {
    return {
      isHovered: false,
      isOpen: false,
    }
  },
  watch: {
    $route () {
      this.$refs.dropdown.hide()
    },
  },
  methods: {
    updateHoverState () {
      this.isHovered = !this.isHovered
    },
  },
  computed: {
    computedLinkClass () {
      return {
        'app-topbar-link--open': this.isOpen,
        'app-topbar-link--active': this.isActive,
      }
    },
    computedClass () {
      return {
        'app-topbar-link-group--minimized': this.minimized,
      }
    },
    sidebarLinkStyles () {
      if (this.isHovered || this.isActive) {
        return {
          color: this.$themes.success,
          backgroundColor: getHoverColor(this.$themes[this.color]),
          borderColor: this.$themes.success,
        }
      }

      return {
        color: this.$themes.info,
      }
    },
  },
}
</script>

<style lang="scss">

.app-topbar-link-group {
  flex-direction: column;

  &__submenu {
    list-style: none;
    padding-left: 0;
    background: $light-gray3 !important;
    display: flex;
    flex-wrap: wrap;
    width: 100% !important;

    li {
      display: block;
      width: 50%;
      border: none;
      margin: 0;
      padding-left: 3rem;
    }
  }
}
</style>
