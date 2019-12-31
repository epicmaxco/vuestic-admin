<template>
  <li
    class="app-sidebar-link"
    :class="computedLinkClass"
  >
    <router-link
      class="app-sidebar-link__item"
      @mouseenter.native="updateHoverState(true)"
      @mouseleave.native="updateHoverState(false)"
      :style="computedLinkStyles"
      :to="to"
      :target="target"
    >
      <va-icon
        v-if="icon"
        class="app-sidebar-link__item-icon"
        :style="computedIconStyles"
        :name="icon"
      />
      <div class="app-sidebar-link__item-title" v-if="title">
        <slot>
          {{title}}
        </slot>
      </div>

      <va-icon
        v-if="iconRight"
        class="app-sidebar-link__item-icon-right"
        :style="computedIconStyles"
        :name="iconRight"
      >{{iconRightContent}}
      </va-icon>
    </router-link>
  </li>
</template>

<script>
import { colorShiftHsl, ColorThemeMixin } from '../../../../services/vuestic-ui'

export default {
  name: 'app-sidebar-link',
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
    iconRightContent: {
      type: String,
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
    $route () {
      this.updateActiveState()
    },
  },
  computed: {
    computedLinkClass () {
      return {
        'app-sidebar-link--minimized': this.minimized,
      }
    },
    computedLinkStyles () {
      const style = {}

      if (this.contextConfig.invertedColor) {
        if (this.isHovered || this.isActive) {
          style.color = 'white'
        } else {
          style.color = this.$themes.gray
        }
      } else {
        style.color = this.$themes.primary
      }

      if (this.isHovered || this.isActive) {
        style.backgroundColor = this.contextConfig.gradient ? colorShiftHsl(this.$themes.secondary, {
          s: -13,
          l: 15,
        }).css : this.$themes.primary

        if (this.contextConfig.gradient) {
          style.borderColor = this.isActive ? this.$themes.primary : 'transparent'
        } else {
          style.borderColor = colorShiftHsl(this.$themes.primary, {
            s: 13,
            l: -15,
          }).css
        }
      }

      return style
    },
    computedIconStyles () {
      if (this.contextConfig.invertedColor) {
        if (this.isHovered || this.isActive) {
          return {
            color: 'white',
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
  },
  mounted () {
    this.updateActiveState()
  },
}
</script>

<style lang="scss">
.app-sidebar-link {
  display: flex;

  &__item {
    position: relative;
    display: flex;
    min-height: 3rem;
    cursor: pointer;
    padding: 0.75rem 0.75rem 0.75rem 0.75rem; // 0.75 - border size as 0.25
    align-items: center;
    text-decoration: none;
    border-left: 0.25rem solid transparent;
    color: rgba(255, 255, 255, 0.65);
    box-sizing: border-box;
    width: 20rem;

    @include media-breakpoint-down(sm) {
      flex: 0 0 100%;
    }

    .app-sidebar-link--minimized & {
      justify-content: center;
      padding-left: 0.5rem;
      width: 3.5rem;
    }

    &-icon {
      width: 1.5rem;
      text-align: center;
      font-size: $sidebar-menu-item-icon-size;
    }

    &-icon-right {
      display: block;
      font-weight: bold;
      position: absolute;
      right: 0.75rem;
      bottom: auto;

      .app-sidebar-link--minimized & {
        bottom: 1.25rem;
        right: auto;
        height: 0;
        display: block;
        text-align: center;
        font-weight: normal;
      }
    }

    &-title {
      line-height: 1.5em;

      .app-sidebar-link__item-icon + & {
        margin-left: 0.5rem;
      }

      .app-sidebar-link--minimized & {
        display: none;
      }
    }
  }
}
</style>
