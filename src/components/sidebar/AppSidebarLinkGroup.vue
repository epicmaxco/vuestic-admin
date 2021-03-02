<template>
  <li
    class="app-sidebar-link-group"
    :class="computedClass"
  >
    <div v-if="!minimized">
      <div @click.stop.prevent="toggleMenuItem()">
        <app-sidebar-link
          :icon="icon"
          :iconRight="expanded ? 'angle_up' : 'angle_down'"
          :title="title"
        />
      </div>

      <!-- <transition-expand> -->
      <ul
        class="app-sidebar-link-group__submenu"
        v-show="expanded"
        ref="linkGroupWrapper"
      >
        <slot/>
      </ul>
      <!-- </transition-expand> -->
    </div>
    
    <va-dropdown
      v-if="minimized"
      position="right"
      fixed
      :preventOverflow="false"
      ref="dropdown"
    >
      <template #anchor>
        <app-sidebar-link
          :icon="icon"
          iconRight="material-icons"
          iconRightContent="more_horiz"
          :activeByDefault="isActive"
          minimized
        />
      </template>
      <ul
        class="app-sidebar-link-group__submenu"
        :style="computedSubmenuColor"
      >
        <slot/>
      </ul>
    </va-dropdown>
  </li>
</template>

<script>
// import TransitionExpand from './TransitionExpand'
import AppSidebarLink from './AppSidebarLink'
import { useTheme } from 'vuestic-ui'

export default {
  name: 'app-sidebar-link-group',
  props: {
    icon: [String, Array],
    title: String,
    minimized: Boolean,
    activeByDefault: Boolean,
    children: Array,
    color: {
      type: String,
      default: 'secondary',
    },
  },
  components: {
    // TransitionExpand,
    AppSidebarLink,
  },
  data () {
    return {
      isActive: this.activeByDefault,
      isHovered: false,
      expanded: this.expanded,
    }
  },
  watch: {
    $route () {
      this.$refs.dropdown && this.$refs.dropdown.hide()
      this.updateActiveState()
    },
    minimized (value) {
      if (!value) {
        this.isActive = false
      } else {
        this.updateActiveState()
      }
    },
  },
  methods: {
    toggleMenuItem () {
      this.expanded = !this.expanded
    },
    updateHoverState () {
      this.isHovered = !this.isHovered
    },
    updateActiveState () {
      const active = this.children.some(item => item.name === this.$route.name)

      this.isActive = this.minimized ? active : false
      this.expanded = active
    },
  },
  computed: {
    theme() {
      return useTheme().getTheme()
    },
    computedClass () {
      return {
        'app-sidebar-link-group--minimized': this.minimized,
        'app-sidebar-link-group--isActive': this.isActive,
      }
    },
    computedLinkStyles () {
      if (this.isHovered || this.isActive) {
        return {
          color: this.theme.primary,
          // backgroundColor: shiftHslColor(this.$themes.secondary, { s: -13, l: 15 }),
          borderColor: this.isActive ? this.theme.primary : 'transparent',
        }
      }

      return {}
    },
    computedIconStyles () {
      if (this.isHovered || this.isActive) {
        return {
          color: this.theme.primary,
        }
      }

      return 'white'
    },

    computedSubmenuColor () {
      return {
        backgroundColor: this.theme[this.color],
      }
    },
  },
}

</script>

<style lang="scss" scoped>
/deep/ .app-sidebar-link-group {
  flex-direction: column;
  position: relative;
  display: flex;

  &__submenu {
    width: 100%;
    overflow: hidden;

    a {
      display: block;
      padding-left: 2.5rem;
      .app-sidebar-link__item-title {
        line-height: 3rem;
      }
    }

    .app-sidebar-link-group--minimized & {
      width: 10rem;
      border-radius: 0.375rem;
      margin-left: 2px;
      max-height: 80vh;
      padding: 0.375rem 0;
      overflow-y: auto;
      overflow-x: hidden;

      a {
        padding: 0.75rem 1rem;
        border: 0;
      }
    }
  }

  &--minimized {
    .va-dropdown {
      &__anchor {
        width: 100%;
      }
    }
  }
}
</style>
