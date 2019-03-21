<template>
  <component
    :is="computedTag"
    class="va-button"
    :class="buttonClass"
    :style="buttonStyle"
    :disabled="disabled"
    :type="type"
    :href="href"
    :target="target"
    :to="to"
    :replace="replace"
    :append="append"
    :active-class="activeClass"
    :exact="exact"
    :exact-active-class="exactActiveClass"
    v-on="inputListeners"
    @mouseenter="updateHoverState(true)"
    @mouseleave="updateHoverState(false)"
    @focus="updateFocusState(true)"
    @blur="updateFocusState(false)"
    tabindex="0"
  >
    <div class="va-button__content">
      <va-icon
        v-if="icon"
        fixed-width
        class="va-button__content__icon va-button__content__icon-left"
        :icon="icon"
      />
      <div
        v-if="hasTitleData"
        class="va-button__content__title">
        <slot/>
      </div>
      <va-icon
        v-if="iconRight"
        fixed-width
        class="va-button__content__icon va-button__content__icon-right"
        :icon="iconRight"
      />
    </div>
  </component>
</template>

<script>
import { getGradientColor, getHoverColor, getFocusColor, getBoxShadowColor } from '../../../services/colors'
import VaIcon from '../va-icon/VaIcon'

export default {
  name: 'va-button',
  components: { VaIcon },
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    outline: {
      type: Boolean
    },
    flat: {
      type: Boolean
    },
    color: {
      type: String,
      default: 'success'
    },
    small: {
      type: Boolean
    },
    large: {
      type: Boolean
    },
    icon: {
      type: String
    },
    iconRight: {
      type: String
    },
    type: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    /* Link props */
    href: {
      type: String
    },
    target: {
      type: String,
    },
    /* Router link props */
    to: {
      type: [String, Object]
    },
    replace: {
      type: Boolean
    },
    append: {
      type: Boolean
    },
    activeClass: {
      type: String
    },
    exact: {
      type: Boolean
    },
    exactActiveClass: {
      type: String
    }
  },
  data () {
    return {
      hoverState: false,
      focusState: false,
    }
  },
  computed: {
    buttonClass () {
      return {
        'va-button--default': !this.flat && !this.outline,
        'va-button--flat': this.flat,
        'va-button--outline': this.outline,
        'va-button--disabled': this.disabled,
        'va-button--without-title': !this.hasTitleData,
        'va-button--with-left-icon': this.icon,
        'va-button--with-right-icon': this.iconRight,
        'va-button--large': this.large,
        'va-button--small': this.small,
        'va-button--normal': !this.large && !this.small
      }
    },
    buttonStyle () {
      if (this.focusState) {
        if (this.outline || this.flat) {
          return {
            color: this.$themes[this.color],
            borderColor: this.outline ? this.$themes[this.color] : '',
            background: getFocusColor(this.color)
          }
        } else {
          return {
            backgroundImage: !this.flat && !this.outline
              ? 'linear-gradient(to right,' + getGradientColor(this.color)[0] +
              ',' + getGradientColor(this.color)[1] + ')' : '',
          }
        }
      } else if (this.hoverState) {
        if (this.outline || this.flat) {
          return {
            color: this.$themes[this.color],
            borderColor: this.outline ? this.$themes[this.color] : '',
            background: getHoverColor(this.color),
          }
        } else {
          return {
            backgroundImage: !this.flat && !this.outline
              ? 'linear-gradient(to right,' + getGradientColor(this.color)[0] +
              ',' + getGradientColor(this.color)[1] + ')' : '',
          }
        }
      } else {
        return {
          color: this.flat || this.outline ? this.$themes[this.color] : '#ffffff',
          borderColor: this.outline ? this.$themes[this.color] : '',
          backgroundImage: !this.flat && !this.outline
            ? 'linear-gradient(to right,' + getGradientColor(this.color)[0] +
              ',' + getGradientColor(this.color)[1] + ')' : '',
          boxShadow: !this.flat && !this.outline ? '0 0.125rem 0.19rem 0 ' + getBoxShadowColor(this.color) : ''

        }
      }
    },
    hasTitleData () {
      return this.$slots.default
    },
    computedTag () {
      if (this.tag === 'a' || this.href || this.target) {
        return 'a'
      }
      if (this.tag === 'router-link' || this.to || this.append || this.replace ||
        this.activeClass || this.exact || this.exactActiveClass) {
        return 'router-link'
      }
      return 'button'
    },
    inputListeners () {
      const vm = this
      return Object.assign({},
        this.$listeners,
        {
          click: function (event) {
            vm.$emit('click', event)
          },
        }
      )
    }
  },
  methods: {
    updateHoverState (isHover) {
      this.hoverState = isHover
    },
    updateFocusState (isHover) {
      this.focusState = isHover
    },
  }
}
</script>

<style lang='scss'>
@import "../../vuestic-sass/resources/resources";

  @mixin button-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {
    padding: $padding-y $padding-x;
    font-size: $font-size;
    line-height: $line-height;
    border-radius: $border-radius;
  }

  .va-button {
    display: inline-block;
    margin: $btn-margin;
    background-image: none;
    box-shadow: none;
    outline: none !important;
    border: $btn-border;
    font-family: $font-family-sans-serif;
    text-decoration: none !important;
    text-transform: initial;
    cursor: pointer;
    transition: $btn-transition;

    &__content {
      display: flex;

      &__title, &__icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
      }
    }

    &--default {
      color: $white;

      &:hover {
        filter: brightness(115%);
      }

      &:focus, &:active {
        filter: brightness(85%);
      }

      i {
        color: $white;
      }
    }

    &--outline {
      background-color: transparent;
      border: solid $btn-border-outline;
      text-decoration: none;

      &.va-button--disabled {
        background: transparent;
        @include va-disabled;

        &.va-button--active {

          .va-button__content, i {
            color: $white !important;
          }
        }
      }
    }

    &--flat {
      background: transparent;
      border: $btn-border solid transparent;
      text-decoration: none;
    }

    &.va-button--disabled {
      @include va-disabled;
    }

    &--large {
      @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-line-height-lg, $btn-border-radius-lg);
      letter-spacing: $btn-letter-spacing-lg;

      .va-button__content__icon {
        width: $btn-icon-width-lg;
      }

      &.va-button--with-left-icon {
        padding-left: $btn-with-icon-wrapper-padding-lg;

        &.va-button--without-title {
          padding-right: $btn-with-icon-wrapper-padding-lg;
        }

        .va-button__content__title {
          padding-left: $btn-with-icon-content-padding-lg;
        }
      }

      &.va-button--with-right-icon {
        padding-right: $btn-with-icon-wrapper-padding-lg;

        .va-button__content__title {
          padding-right: $btn-with-icon-content-padding-lg;
        }
      }
    }

    &--small {
      @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-line-height-sm, $btn-border-radius-sm);
      letter-spacing: $btn-letter-spacing-sm;

      .va-button__content__icon {
        width: $btn-icon-width-sm;
      }

      &.va-button--with-left-icon {
        padding-left: $btn-with-icon-wrapper-padding-sm;

        &.va-button--without-title {
          padding-right: $btn-with-icon-wrapper-padding-sm;
        }

        .va-button__content__title {
          padding-left: $btn-with-icon-content-padding-sm;
        }
      }

      &.va-button--with-right-icon {
        padding-right: $btn-with-icon-wrapper-padding-sm;

        .va-button__content__title {
          padding-right: $btn-with-icon-content-padding-sm;
        }
      }
    }

    &--normal {
      @include button-size($btn-padding-y-nrm, $btn-padding-x-nrm, $btn-font-size-nrm, $btn-line-height-nrm, $btn-border-radius-nrm);
      letter-spacing: $btn-letter-spacing-nrm;

      .va-button__content__icon {
        width: $btn-icon-width-nrm;
      }

      &.va-button--with-left-icon {
        padding-left: $btn-with-icon-wrapper-padding-nrm;

        &.va-button--without-title {
          padding-right: $btn-with-icon-wrapper-padding-nrm;
        }

        .va-button__content__title {
          padding-left: $btn-with-icon-content-padding-nrm;
        }
      }

      &.va-button--with-right-icon {
        padding-right: $btn-with-icon-wrapper-padding-nrm;

        .va-button__content__title {
          padding-right: $btn-with-icon-content-padding-nrm;
        }
      }
    }
  }
</style>
