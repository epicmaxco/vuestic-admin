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
    <div
      class="app-topbar-link__title"
    >
      <slot>
        {{title}}
      </slot>
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
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      isHover: false,
    }
  },
  computed: {
    computedStyle () {
      if (this.isActive) {
        return {
          color: this.$themes.primary,
          backgroundColor: getHoverColor(this.$themes.info),
          borderColor: this.$themes.primary,
        }
      }

      if (this.isHover) {
        return {
          color: this.$themes.primary,
          backgroundColor: getHoverColor(this.$themes.info),
        }
      }

      return {
        color: this.$themes.info,
      }
    },
    computedIconStyles () {
      if (this.isHover || this.isActive) {
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
    updateHoverState (isHover) {
      this.isHover = isHover
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
