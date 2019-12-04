<template>
  <router-link
    class="app-topbar-link"
    tag="li"
    :class="computedClass"
    @mouseenter.native="updateHoverState(true)"
    @mouseleave.native="updateHoverState(false)"
    :style="computedStyle"
    active-class="app-topbar-link--active"
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
    minimized: {
      type: Boolean,
    },
  },
  data () {
    return {
      isHover: false,
    }
  },
  computed: {
    computedClass () {
      return {
        'app-topbar-link--minimized': this.minimized,
      }
    },
    computedStyle () {
      if (this.isHover || this.isActive) {
        return {
          color: this.$themes.success,
          backgroundColor: getHoverColor(this.$themes.info),
          borderColor: this.$themes.success,
        }
      }

      return {
        color: this.$themes.info,
      }
    },
    computedIconStyles () {
      if (this.isHover || this.isActive) {
        return {
          color: this.$themes.success,
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
  text-decoration: none;
  border-left: none;
  border-bottom: 0.25rem solid transparent;
  height: 4rem;
  padding: 1.25rem 0.25rem 1rem;

  &__icon {
    width: 1.5rem;
    text-align: center;
    font-size: $sidebar-menu-item-icon-size;
    margin-right: 0.5rem;
  }

  &__title {
    line-height: 1.5em;
  }

  &--minimized {
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
</style>
