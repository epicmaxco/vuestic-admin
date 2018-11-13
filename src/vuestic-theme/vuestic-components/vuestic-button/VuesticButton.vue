<template>
  <button v-if="computedTag === 'button'"
          class="vuestic-button"
          :class="buttonClass"
          :disabled="disabled"
          :type="type">
    <div class="d-flex">
      <div class="vuestic-button__icon-left">
        <slot name="icon"></slot>
      </div>
      <div class="vuestic-button__content">
        <slot/>
      </div>
      <div v-if="hasRightIconData" class="vuestic-button__icon-right">
        <slot name="icon-right"></slot>
      </div>
    </div>
  </button>
  <a v-else-if="computedTag === 'a'"
     :href="href"
     :target="target">
    <slot name="icon"></slot>
    <slot name="icon-right"></slot>
    <slot/>
  </a>
  <router-link v-else-if="computedTag === 'router-link'"
               :to="to"
               :replace="replace"
               :append="append"
               :active-class="activeClass"
               :exact="exact"
               :exact-active-class="exactActiveClass">
    <slot name="icon"></slot>
    <slot name="icon-right"></slot>
    <slot/>
  </router-link>
</template>

<script>
export default {
  name: 'vuestic-button',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    outline: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'vuestic-button--success'
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
      validator: function (value) {
        return ['button', 'reset', 'submit'].indexOf(value) !== -1
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /* Link props */
    href: {
      type: [String, Object],
      default: undefined
    },
    target: {
      type: String,
      default: undefined
    },
    /* Router link props */
    to: {
      default: undefined
    },
    replace: {
      type: Boolean,
      default: false,
    },
    append: {
      type: Boolean,
      default: false,
    },
    activeClass: {
      type: String,
      default: undefined
    },
    exact: {
      type: Boolean,
      default: false,
    },
    exactActiveClass: {
      type: String,
      default: undefined
    }
  },
  computed: {
    buttonClass: function () {
      return {
        'vuestic-button--success': this.color === 'vuestic-button--success',
        'vuestic-button--info': this.color === 'vuestic-button--info',
        'vuestic-button--danger': this.color === 'vuestic-button--danger',
        'vuestic-button--warning': this.color === 'vuestic-button--warning',
        'vuestic-button--gray': this.color === 'vuestic-button--gray',
        'vuestic-button--dark': this.color === 'vuestic-button--dark',
        'vuestic-button--default': !this.flat && !this.outline,
        'vuestic-button--flat': this.flat,
        'vuestic-button--outline': this.outline,
        'vuestic-button--with-icon': this.hasIconData || this.hasRightIconData,
        'vuestic-button--disabled': this.disabled,
        'vuestic-button--large': this.large,
        'vuestic-button--small': this.small,
        'vuestic-button--normal': !this.large && !this.small
      }
    },
    hasIconData () {
      return this.$slots.icon
    },
    hasRightIconData () {
      console.log(this.$slots)
      return this.$slots['icon-right']
    },
    computedTag () {
      if (this.tag === 'a' || this.href || this.target) {
        return 'a'
      } else if (this.tag === 'router-link' || this.to || this.append || this.replace ||
        this.activeClass || this.exact || this.exactActiveClass) {
        return 'router-link'
      } else {
        return 'button'
      }
    }
  },
}
</script>
