<template>
  <li :class="computedClass">
    <a
      href="#"
      target="_self"
      @mouseenter="updateHoverState(true)"
      @mouseleave="updateHoverState(false)"
      @click.stop.prevent="toggleMenuItem()"
      :style="sidebarLinkStyles"
      class="va-sidebar-link"
      v-if="!minimized && !navbarView"
      :class="classObject">
      <div class="va-sidebar-link__content">
        <va-icon
          v-if="icon"
          class="va-sidebar-link__content__icon"
          :style="iconStyles"
          :icon="icon"
        />
        <span class="va-sidebar-link__content__title">
          <slot name="title">
            {{title}}
          </slot>
        </span>
      </div>
    </a>
    <expanding v-if="!minimized && !navbarView">
      <ul
        class="va-sidebar-link-group__submenu in"
        v-show="this.expanded"
        ref="linkGroupWrapper"
      >
        <slot/>
      </ul>
    </expanding>
    <va-dropdown
    v-if="minimized || navbarView"
    :position="navbarView ? 'bottom' : 'right'"
    fixed
    >
      <a
        href="#"
        slot="anchor"
        target="_self"
        @mouseenter="updateHoverState(true)"
        @mouseleave="updateHoverState(false)"
        :style="sidebarLinkStyles"
        class="va-sidebar-link"
        :class="classObject"
      >
        <div class="va-sidebar-link__content">
          <va-icon
            v-if="icon"
            class="va-sidebar-link__content__icon"
            :style="iconStyles"
            :icon="icon"
          />
          <span class="va-sidebar-link__content__title">
          <slot name="title">
            {{title}}
          </slot>
        </span>
        </div>
      </a>
      <ul
        class="va-sidebar-link-group__submenu in"
        ref="linkGroupWrapper"
        :style="{backgroundColor: $themes[color]}"
      >
        <slot/>
      </ul>
    </va-dropdown>
  </li>
</template>

<script>
import VaIcon from './../../../../vuestic-theme/vuestic-components/va-icon/VaIcon'
import SidebarLink from './SidebarLink'
import Expanding from 'vue-bulma-expanding/src/Expanding'
import { getHoverColor } from './../../../../services/color-functions'
import VaDropdown from '../../../../vuestic-theme/vuestic-components/va-dropdown/VaDropdown'

export default {
  name: 'sidebar-link-group',
  props: {
    icon: [String, Array],
    title: String,
    minimized: Boolean,
    navbarView: Boolean,
    color: {
      type: String,
      default: 'secondary',
    },
  },
  components: {
    VaDropdown,
    VaIcon,
    SidebarLink,
    Expanding,
  },
  data () {
    return {
      isHovered: false,
      expanded: this.expanded,
    }
  },
  mounted () {
    let linkGroup = this.$refs.linkGroupWrapper
    if (linkGroup && linkGroup.querySelector('.router-link-active') !== null) {
      this.expanded = true
    }
  },
  watch: {
    $route (route) {
      this.expanded = false
    },
  },
  methods: {
    toggleMenuItem () {
      this.expanded = !this.expanded
    },
    updateHoverState (isHovered) {
      this.isHovered = isHovered
    },
  },
  computed: {
    classObject () {
      return {
        'expanded': this.expanded,
        'va-sidebar-link--navbar-view': this.navbarView,
      }
    },
    computedClass () {
      return {
        'va-sidebar-link-group': true,
        'va-sidebar-link-group--minimized': this.minimized,
        'va-sidebar-link-group--navbar-view': this.navbarView,
      }
    },
    sidebarLinkStyles () {
      if (this.isHovered) {
        return {
          color: this.$themes['success'],
          backgroundColor: getHoverColor(this.$themes[this.color]),
          borderColor: this.$themes['success'],
        }
      } else {
        return {
          color: this.$themes['info'],
        }
      }
    },
    iconStyles () {
      if (this.isHovered) {
        return {
          color: this.$themes['success'],
        }
      } else {
        return {
          color: 'white',
        }
      }
    },
  },
}

</script>

<style lang="scss">
.va-sidebar-link-group {
  height: fit-content;
  flex-direction: column;
  .va-sidebar-link__router-link {
    width: 100%;
  }
  &__submenu {
    list-style: none;
    padding-left: 0;
    width: 100%;

    li {
      display: block;
      padding-left: 3rem;
    }
  }
  &--minimized {
    .va-sidebar-link-group__submenu {
      background: $sidebar_bg;
      width: 10rem;
      border-radius: .375rem;
      margin-left: 1px;
      .va-sidebar-link__content__title {
        display: block;
      }
    }
    .va-sidebar-link-group__submenu li {
      padding: .75rem 1rem;
      border-left: none;
    }
  }
}
</style>
