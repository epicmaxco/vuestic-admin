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
      @click.native="handleDropdownClick"
      @clickOutside="handleOutsideClick"
    >
      <app-topbar-link
        slot="anchor"
        target="_self"
        class="app-topbar-link-group__item"
        @mouseenter="updateHoverState"
        @mouseleave="updateHoverState"
        :class="computedLinkClass"
        :icon="icon"
        :icon-right="isOpen ? 'fa fa-angle-up' : 'fa fa-angle-down'"
        :is-active="isActive"
      >
        {{title}}
      </app-topbar-link>
      <ul
        class="app-topbar-link-group__submenu"
        :class="computedSubMenuClass"
      >
        <slot/>
      </ul>
    </va-dropdown>
  </li>
</template>

<script>
import AppTopbarLink from './AppTopbarLink'

export default {
  name: 'topbar-link-group',
  inject: ['contextConfig'],
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
    handleDropdownClick () {
      const hasDropdownContent = this.$refs.dropdown.$el.getElementsByClassName('va-dropdown__content').length > 0

      if (hasDropdownContent) {
        this.isOpen = true
      } else {
        this.isOpen = false
      }
    },
    handleOutsideClick () {
      this.isOpen = false
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
    computedIconStyles () {
      return {
        backgroundColor: this.contextConfig.invertedColor ? this.$themes[this.color] : 'white',
      }
    },
  },
}
</script>

<style lang="scss">

.app-topbar-link-group {
  flex-direction: column;

  &__item {
  }

  &__submenu {
    list-style: none;
    background: $light-gray3 !important;
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.8rem;
    max-width: 200px;
    padding: 0.3rem 0.5rem;
    box-shadow: $gray-box-shadow;

    &--multi-row {
      max-width: 600px;
    }
  }
}
</style>
