<template>
  <div
    class="va-badge mr-2"
    :class="badgeClass"
    :style="badgeStyle"
    :color="color"
    :outline="outline"
  >
    <div class="va-badge__content d-flex">
      <div class="va-badge__content__title flex-center">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'va-badge',
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
      return {
        color: this.outline ? this.$themes[this.color] : '#ffffff',
        borderColor: this.outline ? this.$themes[this.color] : '',
        backgroundColor: !this.outline ? this.$themes[this.color] : '',
      }
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
  border: $chip-border;
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
    border: solid $chip-border-outline;
  }
}
</style>
