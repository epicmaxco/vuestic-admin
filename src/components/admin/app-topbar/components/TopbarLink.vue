<template>
  <router-link
    tag="li"
    :class="computedLinkClass"
    @mouseenter.native="updateHoverState(true)"
    @mouseleave.native="updateHoverState(false)"
    :style="computedLinkStyles"
    active-class="va-topbar-link--active"
    :to="to"
    :target="target"
  >
    <va-icon
      v-if="icon"
      class="va-topbar-link__content__icon"
      :style="computedIconStyles"
      :name="icon"
    />
    <div class="va-topbar-link__content__title">
      <slot name="title"/>
      {{title}}
    </div>
  </router-link>
</template>

<script>
import { getHoverColor, ColorThemeMixin } from './../../../../services/vuestic-ui'

export default {
  name: 'topbar-link',
  mixins: [ColorThemeMixin],
  props: {
    to: {
      type: [Object, String],
      default: '',
    },
    target: {
      type: String,
      default: '_self',
    },
    icon: {
      type: [String, Array],
    },
    title: {
      type: String,
    },
    activeByDefault: {
      type: Boolean,
    },
    minimized: {
      type: Boolean,
    },
  },
  data () {
    return {
      isHovered: false,
      isActive: this.activeByDefault,
    }
  },
  watch: {
    $route (route) {
      this.setActiveState()
    },
  },
  computed: {
    computedLinkClass () {
      return {
        'va-topbar-link': true,
        'va-topbar-link--minimized': this.minimized,
      }
    },
    computedLinkStyles () {
      return (this.isHovered || this.isActive)
        ? {
          color: this.$themes['success'],
          backgroundColor: getHoverColor(this.$themes['info']),
          borderColor: this.$themes['success'],
        }
        : {
          color: this.$themes['info'],
        }
    },
    computedIconStyles () {
      return (this.isHovered || this.isActive)
        ? {
          color: this.$themes['success'],
        }
        : {
          color: 'white',
        }
    },
  },
  methods: {
    updateHoverState (isHovered) {
      this.isHovered = isHovered
    },
    setActiveState () {
      this.$nextTick(() => {
        this.isActive = this.$el.classList.contains('va-topbar-link--active')
        if (!this.isActive) {
          return
        }
        const linkGroup = this.$parent && this.$parent.$parent
        if (linkGroup.$options.name === 'topbar-link-group') {
          linkGroup.expanded = true
          linkGroup.isActive = this.minimized
        }
      })
    },
  },
  mounted () {
    this.setActiveState()
  },
}
</script>

<style lang="scss">
.va-topbar-link {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-left: none;
  border-bottom: 0.25rem solid transparent;
  margin: 0 0.25rem;
  height: 4rem;
  padding: 1.25rem 0 1rem;

  &__content {
    &__icon {
      width: 1.5rem;
      text-align: center;
      font-size: $sidebar-menu-item-icon-size;
      margin-right: 0.5rem;
    }

    &__title {
      line-height: 1.5em;
    }
  }

  &--minimized {
    .va-topbar-link__content {
      &__title {
        display: none;
      }

      &__icon {
        margin-right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

</style>
