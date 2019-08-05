<template>
  <li :class="computedClass">
    <va-dropdown
      position="bottom"
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
        class="va-topbar-link"
        :class="computedLinkClass"
      >
        <div class="va-topbar-link__content">
          <va-icon
            v-if="icon"
            class="va-topbar-link__content__icon"
            :style="iconStyles"
            :name="icon"
          />
          <span class="va-topbar-link__content__title">
          <slot name="title">
            {{title}}
          </slot>
          <va-icon
            class="va-topbar-link-group__expanded-icon"
            :style="iconStyles"
            :icon="`fa fa-angle-${dropdownOpened ? 'up' : 'down'}`"/>
        </span>
        </div>
      </a>
      <ul
        class="va-topbar-link-group__submenu in"
        :style="{backgroundColor: $themes[color]}"
      >
        <slot/>
      </ul>
    </va-dropdown>
  </li>
</template>

<script>
import SidebarLink from './TopbarLink'
import Expanding from 'vue-bulma-expanding/src/Expanding'
import { getHoverColor } from './../../../../services/color-functions'

export default {
  name: 'topbar-link-group',
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
        'va-topbar-link': true,
        'va-topbar-link--expanded': this.expanded,
        'va-topbar-link--active': this.isActive,
      }
    },
    computedClass () {
      return {
        'va-topbar-link-group': true,
        'va-topbar-link-group--minimized': this.minimized,
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
.va-topbar-link-group {
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

  .va-topbar-link__content {
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
    right: .1rem;
    width: 1.5rem;
    height: 1.5rem;
    font-weight: $font-weight-bold;
    line-height: 1.5rem;
  }

  .va-dropdown-popper__content {
    max-height: 14.25rem;
    max-width: 30.9275rem;
    width: 100% !important;
    overflow-y: auto;
    box-shadow: $datepicker-box-shadow;
    border-radius: .5rem;
  }

  .va-topbar-link__content {
    padding-right: 0;
    &__title {
      opacity: 1 !important;
    }
  }
  &.va-topbar-link-group--minimized {
    .va-topbar-link__content__icon {
      margin-right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &--minimized {

    .va-topbar-link-group__submenu {
      width: 10rem;
      border-radius: .375rem;
      margin-left: 1px;
      max-height: 80vh;

      padding: .375rem 0;
      overflow-y: auto;
      overflow-x: hidden;
      .va-sidebar-link__content {
        &__title {
          display: inline-block;
          opacity: 1;
        }
      }
      li {
        padding: .75rem 1rem;
        border-left: none;
      }
    }
  }
}
</style>
