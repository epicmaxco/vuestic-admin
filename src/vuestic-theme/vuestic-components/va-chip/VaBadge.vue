<template>
  <div
    class="va-badge mr-2"
    :class="badgeClass"
    :style="badgeStyle"
  >
    <div class="va-badge__content d-flex">
      <div class="va-badge__content__title flex-center">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import { ColorThemeMixin } from '../../../services/ColorThemePlugin'

export default {
  name: 'va-badge',
  mixins: [ColorThemeMixin],
  props: {
    outline: {
      type: Boolean,
    },
    color: {
      type: String,
      default: 'success',
    },
  },
  computed: {
    badgeClass () {
      return {
        'va-badge--outline': this.outline,
      }
    },
    badgeStyle () {
      const computedStyles = {
        color: this.outline ? this.$themes[this.color] : '#ffffff',
        borderColor: this.$themes[this.color],
        backgroundColor: !this.outline ? this.$themes[this.color] : '',
      }

      if (this.outline) {
        computedStyles.color = this.colorComputed
        computedStyles.borderColor = this.colorComputed
      } else {
        computedStyles.backgroundColor = this.colorComputed
      }

      return computedStyles
    },
  },
}
</script>

<style lang='scss'>
@import "../../vuestic-sass/resources/resources";

.va-badge {
  display: inline-block;
  padding: $chip-padding-y-sm $chip-padding-x-sm;
  color: $white;
  border: solid $chip-border-outline;
  border-radius: $chip-border-radius-sm;
  font-size: $chip-font-size-sm;
  font-weight: bold;
  font-family: $font-family-sans-serif;
  text-transform: uppercase;
  line-height: $chip-line-height-sm;
  letter-spacing: $chip-letter-spacing-sm;
  white-space: nowrap;

  &__content {

    &__title {
      margin: auto;
    }
  }

  &--outline {
    background-color: transparent;
  }
}
</style>
