<template>
  <router-link
    tag="li"
    :class="computedLinkClass"
    @mouseenter.native="updateHoverState(true)"
    @mouseleave.native="updateHoverState(false)"
    :style="computedLinkStyles"
    active-class="va-sidebar-link--active"
    :to="to"
    :target="target"
  >
    <va-icon
      v-if="icon"
      class="va-sidebar-link__content__icon"
      :style="computedIconStyles"
      :name="icon"
    />
    <div class="va-sidebar-link__content__title">
      <slot name="title"/>
      {{title}}
    </div>
  </router-link>
</template>

<script>
import { getHoverColor } from './../../../../services/color-functions'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

export default {
  name: 'sidebar-link',
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
        'va-sidebar-link': true,
        'va-sidebar-link--minimized': this.minimized,
      }
    },
    computedLinkStyles () {
      return (this.isHovered || this.isActive)
        ? {
          color: this.$themes['success'],
          backgroundColor: getHoverColor(this.$themes['info']),
          borderColor: this.isActive ? this.$themes['success'] : 'transparent',
        }
        : {
          color: this.$themes['info'],
        }
    },
    computedIconStyles () {
      return (this.isHovered || this.isActive)
        ? { color: this.$themes['success'] }
        : { color: 'white' }
    },
  },
  methods: {
    updateHoverState (isHovered) {
      this.isHovered = isHovered
    },
    setActiveState () {
      this.$nextTick(() => {
        this.isActive = this.$el.classList.contains('va-sidebar-link--active')
        if (!this.isActive) {
          return
        }
        const linkGroup = this.$parent && this.$parent.$parent
        if (linkGroup.$options.name === 'sidebar-link-group') {
          linkGroup.expanded = true
          if (this.minimized) {
            linkGroup.isActive = true
          }
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
@import "../../../../vuestic-theme/vuestic-sass/resources/resources";
.va-sidebar-link {
  position: relative;
  min-height: 3rem;
  cursor: pointer;
  padding-left: .75rem;
  padding-top: .75rem;
  padding-bottom: .75rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-left: .25rem solid transparent;

  &__content {

    &__icon {
      width: 1.5rem;
      min-width: 1.5rem;
      text-align: center;
      font-size: $sidebar-menu-item-icon-size;
      margin-right: 0.5rem;
    }

    &__title {
      line-height: 1.5em;
    }
  }

  &--minimized {
    .va-sidebar-link__content {
      &__title {
        display: none;
      }
    }
  }
}

</style>
