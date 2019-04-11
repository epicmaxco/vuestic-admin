<template>
  <li class="sidebar-link">
    <router-link
      class="sidebar-link__router-link"
      @mouseenter.native="updateHoverState(true)"
      @mouseleave.native="updateHoverState(false)"
      @click.native="isActive = !isActive"
      :style="sidebarLinkStyles"
      :to="to"
      :target="target">
      <div
        class="sidebar-link__content">
        <va-icon
          v-if="icon"
          class="sidebar-link__content__icon"
          :style="iconStyles"
          :icon="icon"
        />
        <slot name="title"/>
      </div>
    </router-link>
  </li>
</template>

<script>
import VaIcon from './../../../../vuestic-theme/vuestic-components/va-icon/VaIcon'
import {
  getHoverColor,
} from './../../../../services/color-functions'

export default {
  name: 'sidebar-link',
  components: {
    VaIcon,
  },
  props: {
    to: {
      type: Object,
      required: true,
    },
    target: {
      type: String,
      default: '_self',
    },
    icon: {
      type: [String, Array],
    },
  },
  data () {
    return {
      isHovered: false,
      isActive: false,
    }
  },
  watch: {
    $route (route) {
      this.$nextTick(() => {
        this.isActive = this.$children[0].$el.classList.contains('router-link-active')
        if (!this.isActive) {
          return
        }
        const linkGroup = this.$parent && this.$parent.$parent
        if (linkGroup.$options.name !== 'sidebar-link-group') {
          return
        }
        linkGroup.expanded = true
      })
    },
  },
  computed: {
    sidebarLinkStyles () {
      if (this.isHovered) {
        return {
          color: this.$themes['success'],
          backgroundColor: getHoverColor(this.$themes['info']),
        }
      } else if (this.isActive) {
        return {
          color: this.$themes['success'],
          backgroundColor: getHoverColor(this.$themes['info']),
          borderLeft: '0.25rem solid ' + this.$themes['success'],
        }
      } else {
        return {
          color: this.$themes['info'],
        }
      }
    },
    iconStyles () {
      if (this.isHovered || this.isActive) {
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
  methods: {
    updateHoverState (isHovered) {
      this.isHovered = isHovered
    },
  },
}
</script>

<style lang="scss">
.sidebar-link {
  &__router-link {
    position: relative;
    height: 3rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      padding-left: 0.75rem;
    }

    .sidebar-menu-item-icon {

      &.fa-dashboard {
        /* Temp fix */
        position: relative;
        top: -2px;
      }
    }
  }

  &__content {
    display: flex;
    align-items: center;
    // color: #8c9fc7;
    text-decoration: none;

    &__icon {
      width: 24px;
      text-align: center;
      font-size: $sidebar-menu-item-icon-size;
      margin-right: 0.5rem;
    }
  }
}

</style>
