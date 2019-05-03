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
      :icon="icon"
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
    navbarView: {
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
        'va-sidebar-link--navbar-view': this.navbarView,
      }
    },
    computedLinkStyles () {
      return (this.isHovered || this.isActive)
        ? {
          color: this.$themes['success'],
          backgroundColor: this.navbarView ? 'transparent' : getHoverColor(this.$themes['info']),
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
        this.isActive = this.$el.classList.contains('va-sidebar-link--active')
        if (!this.isActive) {
          return
        }
        const linkGroup = this.$parent && this.$parent.$parent
        if (linkGroup.$options.name === 'sidebar-link-group') {
          linkGroup.expanded = true
          if (this.navbarView || this.minimized) {
            linkGroup.isActive = true
          } else {
            linkGroup.isActive = false
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
  height: 3rem;
  cursor: pointer;
  padding-left: 1rem;
  padding-top: .725rem;
  padding-bottom: .725rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-left: .25rem solid transparent;

  &__content {

    &__icon {
      width: 1.5rem;
      text-align: center;
      font-size: $sidebar-menu-item-icon-size;
      margin-right: 0.5rem;
    }

    &__title {
      line-height: 1.71em;
    }
  }

  &--minimized {
    .va-sidebar-link__content__title {
      display: none;
    }
  }

  &--navbar-view {
    border-left: none;
    border-bottom: .25rem solid transparent;
    padding-left: 0;
    margin: 0 .25rem;
  }
}

</style>
