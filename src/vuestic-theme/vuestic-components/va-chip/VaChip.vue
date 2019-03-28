<template>
  <div
    v-if="value"
    class="va-chip mr-2"
    :class="chipClass"
    :style="chipStyle"
    @mouseenter="updateHoverState(true)"
    @mouseleave="updateHoverState(false)"
    @focus="updateFocusState(true)"
    @blur="updateFocusState(false)"
    tabindex="0"
  >
    <div class="va-chip__content d-flex">
      <va-icon
        v-if="icon"
        fixed-width
        class="va-chip__content__icon va-chip__content__icon-left flex-center"
        :color="outline ? color : ''"
        :icon="icon"
      />
      <div
        v-if="hasTitleData"
        class="va-chip__content__title flex-center">
        <slot/>
      </div>
      <va-icon
        @click.native="hideChip()"
        v-if="iconRight || removable"
        fixed-width
        class="va-chip__content__icon scr va-chip__content__icon-right flex-center"
        :color="outline ? color : ''"
        :icon="removable ? 'ion ion-md-close ion' : iconRight"
      />
    </div>
  </div>
</template>

<script>
import { getFocusColor, getHoverColor, getBoxShadowColor } from '../../../services/color-functions'

export default {
  name: 'va-chip',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    outline: {
      type: Boolean
    },
    color: {
      type: String,
      default: 'success'
    },
    icon: {
      type: String
    },
    iconRight: {
      type: String
    },
    removable: {
      type: Boolean
    }
  },
  data () {
    return {
      hoverState: false,
      focusState: false,
    }
  },
  computed: {
    chipClass () {
      return {
        'va-chip--default': !this.outline,
        'va-chip--outline': this.outline,
        'va-chip--without-title': !this.hasTitleData,
        'va-chip--with-left-icon': this.icon,
        'va-chip--with-right-icon': this.iconRight || this.removable,
      }
    },
    chipStyle () {
      if (this.focusState) {
        return {
          color: this.outline ? this.$themes[this.color] : '#ffffff',
          boxShadow: '0 0.125rem 0.19rem 0 ' + getBoxShadowColor(this.$themes[this.color]),
          backgroundColor: this.outline ? getFocusColor(this.$themes[this.color]) : this.$themes[this.color]
        }
      } else if (this.hoverState) {
        return {
          color: this.outline ? this.$themes[this.color] : '#ffffff',
          borderColor: this.outline ? this.$themes[this.color] : '',
          backgroundColor: this.outline ? getHoverColor(this.$themes[this.color]) : this.$themes[this.color]
        }
      } else {
        return {
          color: this.outline ? this.$themes[this.color] : '#ffffff',
          borderColor: this.outline ? this.$themes[this.color] : '',
          backgroundColor: this.outline ? '' : this.$themes[this.color]
        }
      }
    },
    hasTitleData () {
      return this.$slots.default
    }
  },
  methods: {
    hideChip () {
      if (this.removable) {
        this.$emit('input', false)
      }
    },
    updateHoverState (isHover) {
      this.hoverState = isHover
    },
    updateFocusState (isHover) {
      this.focusState = isHover
    },
  },
}
</script>

<style lang='scss'>
@import "../../vuestic-sass/resources/resources";

  .va-chip {
    display: inline-block;
    padding: $chip-padding-y-nrm $chip-padding-x-nrm;
    color: $white;
    border: $chip-border;
    border-radius: $chip-border-radius-nrm;
    font-size: $chip-font-size-nrm;
    font-family: $font-family-sans-serif;
    background-image: none;
    box-shadow: none;
    outline: none !important;
    line-height: $chip-line-height-nrm;
    letter-spacing: normal;
    text-decoration: none !important;
    cursor: pointer;

    &--outline {
      background-color: transparent;
      border: solid $chip-border-outline;
      text-decoration: none;
    }

    &__content {

      &__title, &__icon {
        margin: auto;
      }

      &__icon {
        width: $chip-icon-width-nrm;
      }

      .va-icon {
        color: $white;
      }
    }

    &.va-chip--with-left-icon {
      padding-left: $chip-with-icon-wrapper-padding-nrm;

      .va-chip__content__title {
        padding-left: $chip-with-icon-content-padding-nrm;
      }
    }

    &.va-chip--with-right-icon {
      padding-right: $chip-with-icon-wrapper-padding-nrm;

      .va-chip__content__title {
        padding-right: $chip-with-icon-content-padding-nrm;
      }
    }
  }
</style>
