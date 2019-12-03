<template>
  <li
    class="app-topbar-link-group"
    :class="computedClass"
  >
    <va-dropdown
      position="bottom"
      fixed
      :preventOverflow="false"
      @trigger="toggleDropdownState"
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
    activeByDefault: Boolean,
    color: {
      type: String,
      default: 'secondary',
    },
  },
  data () {
    return {
      isActive: this.activeByDefault,
      isHovered: false,
      expanded: this.expanded,
      dropdownOpened: false,
    }
  },
  mounted () {
    const linkGroup = this.$refs.linkGroupWrapper
    if (linkGroup && linkGroup.querySelector('.router-link-active') !== null) {
      this.expanded = true
    }
    this.setActiveState()
  },
  watch: {
    $route () {
      this.expanded = false
      this.setActiveState()
    },
    minimized (value) {
      if (!value) {
        this.isActive = false
      }
    },
  },
  methods: {
    toggleMenuItem () {
      this.expanded = !this.expanded
    },
    toggleDropdownState (value) {
      this.dropdownOpened = value
    },
    updateHoverState () {
      this.isHovered = !this.isHovered
    },
    setActiveState () {
      if (!this.activeByDefault) {
        this.$nextTick(() => {
          this.isActive = !!this.$children[0].$children.filter(item => item.isActive).length
        })
      }
    },
  },
  computed: {
    computedLinkClass () {
      return {
        'app-topbar-link--expanded': this.expanded,
        'app-topbar-link--active': this.isActive,
      }
    },
    computedClass () {
      return {
        'app-topbar-link-group--minimized': this.minimized,
      }
    },
    sidebarLinkStyles () {
      return (this.isHovered || this.isActive)
        ? {
          color: this.$themes.success,
          backgroundColor: getHoverColor(this.$themes[this.color]),
          borderColor: this.$themes.success,
        }
        : {
          color: this.$themes.info,
        }
    },
    iconStyles () {
      return (this.isHovered || this.isActive)
        ? { color: this.$themes.success }
        : { color: 'white' }
    },
  },
}
</script>

<style lang="scss">
@import "../../../../services/vuestic-ui/styles";

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
