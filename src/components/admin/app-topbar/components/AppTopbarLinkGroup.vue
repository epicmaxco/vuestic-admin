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
        class="app-topbar-link-group__submenu"
        :class="computedSubMenuClass"
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
    isMultiRow: {
      type: Boolean,
      defaul: false,
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
    computedSubMenuClass () {
      return {
        'app-topbar-link-group__submenu--multi-row': this.isMultiRow,
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
    background: $light-gray3 !important;
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.8rem;
    max-width: 200px;
    padding: 0.3rem 0.5rem;

    &--multi-row {
      max-width: 600px;
    }
  }
}
</style>
