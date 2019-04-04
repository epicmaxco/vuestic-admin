<template>
  <li class="sidebar-link-group sidebar-link">
    <a
      href="#"
      target="_self"
      @mouseenter="updateHoverState(true)"
      @mouseleave="updateHoverState(false)"
      @click.stop.prevent="toggleMenuItem()"
      :style="sidebarLinkStyles"
      class="sidebar-link__router-link"
      :class="classObject">
      <div class="sidebar-link__content">
        <va-icon
          v-if="icon"
          class="sidebar-link__content__icon"
          :style="iconStyles"
          :icon="icon"
        />
        <slot name="title"/>
      </div>
    </a>
    <expanding>
      <ul
        class="sidebar-submenu in"
        v-show="this.expanded"
        ref="linkGroupWrapper"
      >
        <slot/>
      </ul>
    </expanding>
  </li>
</template>

<script>
import VaIcon from './../../../../vuestic-theme/vuestic-components/va-icon/VaIcon'
import SidebarLink from './SidebarLink'
import Expanding from 'vue-bulma-expanding/src/Expanding'
import {
  getHoverColor,
} from './../../../../services/color-functions'

export default {
  name: 'sidebar-link-group',
  props: {
    icon: [String, Array],
  },
  components: {
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
    if (linkGroup.querySelector('.router-link-active') !== null) {
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
      }
    },
    sidebarLinkStyles () {
      if (this.isHovered) {
        return {
          color: this.$themes['success'],
          backgroundColor: getHoverColor(this.$themes['info']),
          borderLeft: '0.25rem solid ' + this.$themes['success'],
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
.sidebar-link-group {

  .sidebar-submenu {
    list-style: none;
    padding-left: 0;

    li {
      display: block;
      padding-left: 0;
    }

    .router-link-active {
      padding-left: 2.75rem !important;
    }

    .sidebar-link__router-link {
      padding-left: 3rem;
      font-size: $font-size-smaller;

      &:hover {
        padding-left: 2.75rem !important;
      }
    }
  }
}
</style>
