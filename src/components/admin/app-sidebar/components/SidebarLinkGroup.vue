<template>
  <li :class="computedClass">
    <a
      href="#"
      target="_self"
      @mouseenter="updateHoverState(true)"
      @mouseleave="updateHoverState(false)"
      @click.stop.prevent="toggleMenuItem()"
      :style="sidebarLinkStyles"
      v-if="!minimized && !navbarView"
      :class="computedLinkClass">
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
        <va-icon
          class="va-sidebar-link-group__dropdown-icon"
          :style="iconStyles"
          :icon="`fa fa-angle-${expanded ? 'up' : 'down'}`"/>
      </div>
    </a>
    <expanding v-if="!minimized && !navbarView">
      <ul
        class="va-sidebar-link-group__submenu in"
        v-show="expanded"
        ref="linkGroupWrapper"
      >
        <slot/>
      </ul>
    </expanding>
    <va-dropdown
      v-if="minimized || navbarView"
      :position="navbarView ? 'bottom' : 'right'"
      fixed
      :preventOverflow="false"
      @trigger="toggleDropdownState"
    >
      <a
        href="#"
        slot="anchor"
        target="_self"
        @mouseenter="updateHoverState"
        @mouseleave="updateHoverState"
        :style="sidebarLinkStyles"
        class="va-sidebar-link"
        :class="computedLinkClass"
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
          <va-icon
            class="va-sidebar-link-group__expanded-icon"
            :style="iconStyles"
            :icon="`fa fa-angle-${dropdownOpened ? 'up' : 'down'}`"/>
        </span>
        </div>
      </a>
      <ul
        class="va-sidebar-link-group__submenu in"
        :style="{backgroundColor: $themes[color]}"
      >
        <slot/>
      </ul>
    </va-dropdown>
  </li>
</template>

<script>
import SidebarLink from './SidebarLink'
import Expanding from 'vue-bulma-expanding/src/Expanding'
import { getHoverColor } from './../../../../services/color-functions'

export default {
  name: 'sidebar-link-group',
  props: {
    icon: [String, Array],
    title: String,
    minimized: Boolean,
    navbarView: Boolean,
    activeByDefault: Boolean,
    color: {
      type: String,
      default: 'secondary',
    },
  },
  components: {
    SidebarLink,
    Expanding,
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
    let linkGroup = this.$refs.linkGroupWrapper
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
    navbarView (value) {
      if (!value && !this.minimized) {
        this.isActive = false
      }
    },
    minimized (value) {
      if (!value && !this.navbarView) {
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
          this.isActive = (this.navbarView || this.minimized) && !!this.$children[0].$children.filter(item => item.isActive).length
        })
      }
    },
  },
  computed: {
    computedLinkClass () {
      return {
        'va-sidebar-link': true,
        'va-sidebar-link--expanded': this.expanded,
        'va-sidebar-link--navbar-view': this.navbarView,
        'va-sidebar-link--active': this.isActive,
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
      return (this.isHovered || this.isActive)
        ? {
          color: this.$themes['success'],
          backgroundColor: getHoverColor(this.$themes[this.color]),
          borderColor: this.$themes['success'],
        }
        : {
          color: this.$themes['info'],
        }
    },
    iconStyles () {
      return (this.isHovered || this.isActive)
        ? { color: this.$themes['success'] }
        : { color: 'white' }
    },
  },
}

</script>

<style lang="scss">
@import "../../../../vuestic-theme/vuestic-sass/resources/resources";
.va-sidebar-link-group {
  flex-direction: column;

  &__submenu {
    list-style: none;
    padding-left: 0;
    width: 100%;

    li {
      display: block;
      padding-left: 3rem;
    }
  }

  .va-sidebar-link__content {
    width: 100%;
    position: relative;
    padding-right: 2rem;
    display: flex;
    align-items: center;
  }

  &__expanded-icon {
    width: 1.5rem;
    text-align: center;
  }

  &__dropdown-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: .5rem;
    font-weight: $font-weight-bold;
    line-height: 1.5rem;
  }

  &--minimized {
    .va-sidebar-link-group__submenu {
      background: $sidebar_bg;
      width: 10rem;
      border-radius: .375rem;
      margin-left: 1px;
      max-height: 80vh;
    }

    .va-sidebar-link-group__submenu li {
      padding: .75rem 1rem;
      border-left: none;
    }
  }

  &--navbar-view {

    .va-sidebar-link-group__submenu {
      background: $light-gray3 !important;
      display: flex;
      flex-wrap: wrap;
      width: 100% !important;
      li {
        width: 50%;
        border: none;
        margin: 0;
        padding-left: 3rem;
      }
    }

    .va-dropdown-popper__content {
      max-height: 14.25rem;
      max-width: 30.9275rem;
      width: 100% !important;
      overflow-y: auto;
      box-shadow: $datepicker-box-shadow;
      border-radius: .5rem;
    }

    .va-sidebar-link__content {
      padding-right: 0;
      &__title {
        opacity: 1 !important;
      }
    }
  }
}
</style>
