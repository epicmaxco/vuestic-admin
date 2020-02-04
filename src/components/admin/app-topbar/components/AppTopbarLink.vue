<template>
  <router-link
    class="app-topbar-link"
    tag="li"
    @mouseenter.native="updateHoverState(true)"
    @mouseleave.native="updateHoverState(false)"
    :style="computedStyle"
    :to="to"
    :target="target"
  >
    <va-icon
      v-if="icon"
      class="app-topbar-link__icon"
      :style="computedIconStyles"
      :name="icon"
    />
    <div class="app-topbar-link__title">
      <slot>
        {{title}}
      </slot>
    </div>
    <va-icon
      class="app-topbar-link__icon"
      :name="iconRight"
      :style="computedIconStyles"
    />
  </router-link>
</template>

<script>
import { colorShiftHsl, ColorThemeMixin } from './../../../../services/vuestic-ui'

export default {
  name: 'topbar-link',
  inject: ['contextConfig'],
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
    iconRight: {
      type: [String, Array],
    },
    title: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      isHovered: false,
    }
  },
  computed: {
    computedStyle () {
      // TODO Inverted color condition is incorrect here.
      if (this.contextConfig.invertedColor) {
        if (this.isHovered || this.isActive) {
          return {
            color: this.$themes.primary,
            borderColor: colorShiftHsl(this.$themes.primary, { s: 13, l: -15 }).css,
          }
        }

        return {
          color: this.$themes.gray,
        }
      }

      if (this.isActive) {
        return {
          color: this.$themes.primary,
          borderColor: this.$themes.primary,
          backgroundColor: colorShiftHsl(this.$themes.secondary, { s: -13, l: 15 }).css,
        }
      }

      if (this.isHovered) {
        return {
          color: this.$themes.primary,
          backgroundColor: colorShiftHsl(this.$themes.secondary, { s: -13, l: 15 }).css,
        }
      }

      return {
        color: this.$themes.info,
      }
    },
    computedIconStyles () {
      if (this.contextConfig.invertedColor) {
        if (this.isHovered || this.isActive) {
          return {
            color: this.$themes.primary,
          }
        }

        return {
          color: this.$themes.gray,
        }
      }

      if (this.isHovered || this.isActive) {
        return {
          color: this.$themes.primary,
        }
      }

      return {
        color: 'white',
      }
    },
  },
  methods: {
    updateHoverState (isHovered) {
      this.isHovered = isHovered
    },
    updateActiveState () {
      this.isActive = (this.$route.name === this.to.name) || this.activeByDefault
    },
    mounted () {
      this.updateActiveState()
    },
  },
}
</script>

<style lang="scss">

.app-topbar-link {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-left: none;
  border-bottom: 0.25rem solid transparent;
  height: 4rem;
  padding: 1.25rem 0.25rem 1rem;

  @include media-breakpoint-down(sm) {
    flex-grow: 1;
  }

  &__icon {
    width: 1.5rem;
    text-align: center;
    font-size: $sidebar-menu-item-icon-size;
  }

  &__title {
    line-height: 1.5em;
    margin-left: 0.5rem;

    @include media-breakpoint-down(sm) {
      display: none;
    }
  }
}
</style>
