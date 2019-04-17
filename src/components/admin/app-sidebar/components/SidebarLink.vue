<template>
  <li class="sidebar-link">
    <router-link
      class="sidebar-link__router-link"
      @mouseenter.native="updateHoverState(true)"
      @mouseleave.native="updateHoverState(false)"
      @click.native="isActive = !isActive"
      :style="sidebarLinkStyles"
      :to="to"
      :target="target"
      active-class="sidebar-link__router-link--active"
    >
      <va-icon
        v-if="icon"
        class="sidebar-link__content__icon"
        :style="iconStyles"
        :icon="icon"
      />
      <div class="sidebar-link__content__title">
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
    active: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      isHovered: false,
      isActive: this.active,
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler () {
        this.$nextTick(() => {
          this.setActiveStatus()
        })
      },
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
          borderLeftColor: this.$themes['success'],
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
    setActiveStatus () {
      this.isActive = this.$children[0].$el.classList.contains('sidebar-link__router-link--active')
      if (!this.isActive) {
        return
      }
      const linkGroup = this.$parent && this.$parent.$parent
      if (linkGroup.$options.name !== 'sidebar-link-group') {
        return
      }
      linkGroup.expanded = true
    },
  },
  beforeRouteUpdate () {
    this.setActiveStatus()
  },
}
</script>

<style lang="scss">
.sidebar-link {
  &__router-link {
    position: relative;
    height: 3rem;
    padding-left: 1rem;
    padding-top: .725rem;
    padding-bottom: .725rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    border-left: 0.25rem solid transparent;
    .sidebar-menu-item-icon {

      &.fa-dashboard {
        /* Temp fix */
        position: relative;
        top: -2px;
      }
    }
  }

  &__content {

    &__icon {
      width: 24px;
      text-align: center;
      font-size: $sidebar-menu-item-icon-size;
      margin-right: 0.5rem;
    }

    &__title {
      line-height: 1.71em;
    }
  }
}

</style>
