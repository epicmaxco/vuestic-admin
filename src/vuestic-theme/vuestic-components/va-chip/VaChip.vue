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
        :color="color"
        :name="icon"
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
        :color="color"
        :name="removable ? 'ion ion-md-close ion' : iconRight"
      />
    </div>
  </div>
</template>

<script>
import VaIcon from '../va-icon/VaIcon'
import {
  getHoverColor,
  getBoxShadowColor,
} from '../../../services/color-functions'

export default {
  name: 'va-chip',
  components: {
    VaIcon,
  },
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: 'success',
    },
    small: {
      type: Boolean,
    },
    large: {
      type: Boolean,
    },
    icon: {
      type: String,
    },
    iconRight: {
      type: String,
    },
    removable: {
      type: Boolean,
    },
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
        'va-chip--without-title': !this.hasTitleData,
        'va-chip--with-left-icon': this.icon,
        'va-chip--with-right-icon': this.iconRight || this.removable,
        'va-chip--large': this.large,
        'va-chip--small': this.small,
        'va-chip--normal': !this.large && !this.small,
      }
    },
    chipStyle () {
      if (this.focusState) {
        return {
          color: this.$themes[this.color],
          boxShadow: '0 0.125rem 0.19rem 0 ' + getBoxShadowColor(this.$themes[this.color]),
          borderColor: this.$themes[this.color],
          backgroundColor: getHoverColor(this.$themes[this.color]),
        }
      } else if (this.hoverState) {
        return {
          color: this.$themes[this.color],
          borderColor: this.$themes[this.color],
          backgroundColor: getHoverColor(this.$themes[this.color]),
        }
      } else {
        return {
          color: this.$themes[this.color],
          borderColor: this.$themes[this.color],
        }
      }
    },
    hasTitleData () {
      return this.$slots.default
    },
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
  color: $white;
  border: solid $chip-border-outline;
  font-family: $font-family-sans-serif;
  background-color: transparent;
  background-image: none;
  box-shadow: none;
  outline: none !important;
  letter-spacing: normal;
  text-decoration: none !important;
  cursor: pointer;

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
  &--large {
    @include va-button($chip-padding-y-lg, $chip-padding-x-lg, $chip-font-size-lg, $chip-line-height-lg, $chip-border-radius-lg);
    .va-chip__content__icon {
      width: $chip-icon-width-lg;
    }

    &.va-chip--with-left-icon {
      padding-left: $chip-with-icon-wrapper-padding-lg;

      &.va-chip--without-title {
        padding-right: $chip-with-icon-wrapper-padding-lg;
      }

      .va-chip__content__title {
        padding-left: $chip-with-icon-content-padding-lg;
      }
    }

    &.va-chip--with-right-icon {
      padding-right: $chip-with-icon-wrapper-padding-lg;

      .va-chip__content__title {
        padding-right: $chip-with-icon-content-padding-lg;
      }
    }
  }

  &--normal {
    @include va-button($chip-padding-y-nrm, $chip-padding-x-nrm, $chip-font-size-nrm, $chip-line-height-nrm, $chip-border-radius-nrm);

    .va-chip__content__icon {
      width: $chip-icon-width-nrm;
    }

    &.va-chip--with-left-icon {
      padding-left: $chip-with-icon-wrapper-padding-nrm;

      &.va-chip--without-title {
        padding-right: $chip-with-icon-wrapper-padding-nrm;
      }

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

  &--small {
    @include va-button($chip-padding-y-sm, $chip-padding-x-sm, $chip-font-size-sm, $chip-line-height-sm, $chip-border-radius-sm);
    letter-spacing: $chip-letter-spacing-sm;

    .va-chip__content__icon {
      width: $chip-icon-width-sm;
    }

    &.va-chip--with-left-icon {
      padding-left: $chip-with-icon-wrapper-padding-sm;

      &.va-chip--without-title {
        padding-right: $chip-with-icon-wrapper-padding-sm;
      }

      .va-chip__content__title {
        padding-left: $chip-with-icon-content-padding-sm;
      }
    }

    &.va-chip--with-right-icon {
      padding-right: $chip-with-icon-wrapper-padding-sm;

      .va-chip__content__title {
        padding-right: $chip-with-icon-content-padding-sm;
      }
    }
  }
}
</style>
