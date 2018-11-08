<template>
  <button v-if="tag === 'button'"
          class="vuestic-button btn"
          :class="buttonClass"
          :disabled="disabled"
          :type="buttonType">
    <div class="d-flex">
      <slot></slot>
      <slot name="title"/>
    </div>
  </button>
  <a v-else-if="tag === 'a' || href !== ''"
     :href="href"
     :name="name"
     :title="title"
     :target="target"
     :rel="rel"
     :download="download">
    <slot></slot>
    <slot name="title"/>
  </a>
  <router-link v-else-if="tag === 'router-link'"
               :to="to"
               :replace="replace"
               :append="append"
               :active-class="activeClass"
               :exact="exact"
               :exact-active-class="exactActiveClass">
    <slot></slot>
    <slot name="title"/>
  </router-link>
</template>

<script>
export default {
  name: 'vuestic-button',
  data () {
    return {
      deleted: false,
    }
  },
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    outline: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'vuestic-green'
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
      default: 'default',
      validator: function (value) {
        return ['default', 'secondary', 'text'].indexOf(value) !== -1
      },
    },
    buttonType: {
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
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    },
    rel: {
      type: String,
      default: ''
    },
    download: {
      type: Boolean,
      default: false,
    },
    /* Router link props */
    to: {
      type: Object,
      default: () => {}
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
      default: 'router-link-active'
    },
    exact: {
      type: Boolean,
      default: false,
    },
    exactActiveClass: {
      type: String,
      default: 'router-link-exact-active'
    }
  },
  computed: {
    buttonClass: function () {
      return {
        'vuestic-green': this.color === 'vuestic-green',
        'vuestic-blue': this.color === 'vuestic-blue',
        'vuestic-red': this.color === 'vuestic-red',
        'vuestic-yellow': this.color === 'vuestic-yellow',
        'vuestic-gray': this.color === 'vuestic-gray',
        'vuestic-dark': this.color === 'vuestic-dark',
        'default': this.type === 'default',
        'secondary': this.type === 'secondary',
        'text': this.type === 'text',
        'outline': this.outline,
        'with-icon': this.hasSlotData,
        'disabled': this.disabled,
        'btn-large': this.large,
        'btn-small': this.small,
        'btn-default': !this.large && !this.small
      }
    },
    hasSlotData () {
      return this.$slots.default
    },
  },
  methods: {
    remove () {
      this.deleted = true
      setTimeout(() => {
        this.$emit('remove')
        this.deleted = false
      }, 500)
    },
  },
}
</script>

<style lang="scss">
.vuestic-green {
  background-image: none;
  box-shadow: none;
}

.vuestic-green.default{
  background-image: linear-gradient(to right, #63e5b3, #23e066);

  &:hover {
    background-image: linear-gradient(to right, lighten(#63e5b3, 15%), lighten(#23e066, 15%));
  }

  &:active {
    background-image: linear-gradient(to right, darken(#63e5b3, 15%), darken(#23e066, 15%));
  }
}

.vuestic-green.outline{
  box-shadow: 0 2px 3px 0 rgba(28, 173, 103, 0.6);
}

.vuestic-green.secondary{
  border: solid 2px #40e583;
  color: #40e583;

  &:hover {
    background-color: #d6ffd3;
  }

  &:active {
    background-color: #40e583;
    opacity: 0.15;
    border: none;
  }
}

.vuestic-green.text{
  color: #40e583;

  &:hover {
    background-color: #d6ffd3;
  }

  &:active {
    background-color: #40e583;
    opacity: 0.15;
    border: none;
  }

  &.disabled {
    opacity: 0.4;
  }
}

.vuestic-blue {
  background-image: none;
  box-shadow: none;
}

.vuestic-blue.default {
  background-image: linear-gradient(to right, #32b5e4, #2c82e0);

  &:hover {
    background-image: linear-gradient(to right, lighten(#32b5e4, 15%), lighten(#2c82e0, 15%));
  }

  &:active {
    background-image: linear-gradient(to right, darken(#32b5e4, 15%), darken(#2c82e0, 15%));
  }
}

.vuestic-blue.outline {
  box-shadow: 0 2px 3px 0 rgba(10, 82, 117, 0.6);
}

.vuestic-blue.secondary{
  border: solid 2px #2c82e0;
  color: #2c82e0;

  &:hover {
    background-color: #caeeff;
  }

  &:active {
    background-color: #2c82e0;
    opacity: 0.15;
    border: none;
  }
}

.vuestic-blue.text{
  color: #2c82e0;

  &:hover {
    background-color: #caeeff;
  }

  &:active {
    background-color: #2c82e0;
    opacity: 0.15;
    border: none;
  }

  &.disabled {
    opacity: 0.4;
  }
}

.vuestic-red {
  background-image: none;
  box-shadow: none;
}

.vuestic-red.default {
  background-image: linear-gradient(to right, #ff7455, #e34b4a);

  &:hover {
    background-image: linear-gradient(to right, lighten(#ff7455, 15%), lighten(#e34b4a, 15%));
  }

  &:active {
    background-image: linear-gradient(to right, darken(#ff7455, 15%), darken(#e34b4a, 15%));
  }
}

.vuestic-red.outline {
  box-shadow: 0 2px 3px 0 rgba(137, 13, 12, 0.6);
}

.vuestic-red.secondary{
  border: solid 2px #e34b4a;
  color: #e34b4a;

  &:hover {
    background-color: #ffebeb;
  }

  &:active {
    background-color: #e34b4a;
    opacity: 0.15;
    border: none;
  }
}

.vuestic-red.text{
  color: #e34b4a;

  &:hover {
    background-color: #ffebeb;
  }

  &:active {
    background-color: #e34b4a;
    opacity: 0.15;
    border: none;
  }

  &.disabled {
    opacity: 0.4;
  }
}

.vuestic-yellow {
  background-image: none;
  box-shadow: none;
}

.vuestic-yellow.default {
  background-image: linear-gradient(to right, #ffd72d, #feb900);

  &:hover {
    background-image: linear-gradient(to right, lighten(#ffd72d, 15%), lighten(#feb900, 15%));
  }

  &:active {
    background-image: linear-gradient(to right, darken(#ffd72d, 15%), darken(#feb900, 15%));
  }
}

.vuestic-yellow.outline {
  box-shadow: 0 2px 3px 0 rgba(169, 124, 14, 0.6);
}

.vuestic-yellow.secondary{
  border: solid 2px #ffc202;
  color: #ffc202;

  &:hover {
    background-color: #fff3d1;
  }

  &:active {
    background-color: #ffc202;
    opacity: 0.15;
    border: none;
  }
}

.vuestic-yellow.text{
  color: #ffc202;

  &:hover {
    background-color: #fff3d1;
  }

  &:active {
    background-color: #ffc202;
    opacity: 0.15;
    border: none;
  }

  &.disabled {
    opacity: 0.4;
  }
}

.vuestic-gray {
  background-image: none;
  box-shadow: none;
}

.vuestic-gray.default {
  background-image: linear-gradient(to right, #cdd0d5, #b4b6b9);

  &:hover {
    background-image: linear-gradient(to right, lighten(#cdd0d5, 15%), lighten(#b4b6b9, 15%));
  }

  &:active {
    background-image: linear-gradient(to right, darken(#cdd0d5, 15%), darken(#b4b6b9, 15%));
  }
}

.vuestic-gray.outline {
  box-shadow: 0 2px 3px 0 rgba(104, 115, 125, 0.61);
}

.vuestic-gray.secondary{
  border: solid 2px #babfc2;
  color: #babfc2;

  &:hover {
    background-color: #e6e9ec;
  }

  &:active {
    background-color: #babfc2;
    opacity: 0.15;
    border: none;
  }

  &.disabled {
    opacity: 0.4;
  }
}

.vuestic-gray.text{
  color: #babfc2;

  &:hover {
    background-color: #edf0f3;
  }

  &:active {
    background-color: #babfc2;
    opacity: 0.15;
    border: none;
  }
}

.vuestic-dark {
  background-image: none;
  box-shadow: none;
}

.vuestic-dark.default {
  background-image: linear-gradient(to right, #576675, #34495e);

  &:hover {
    background-image: linear-gradient(to right, lighten(#576675, 15%), lighten(#34495e, 15%));
  }

  &:active {
    background-image: linear-gradient(to right, darken(#576675, 15%), darken(#34495e, 15%));
  }
}

.vuestic-dark.outline {
  box-shadow: 0 2px 3px 0 #aebcca;
}

.vuestic-dark.secondary {
  border: solid 2px #34495e;
  color: #34495e;

  &:hover {
    background-color: #afb6bb;
  }

  &:active {
    background-color: #34495e;
    opacity: 0.15;
    border: none;
  }
}

.vuestic-dark.text{
  color: #34495e;

  &:hover {
    background-color: #afb6bb;
  }

  &:active {
    background-color: #34495e;
    opacity: 0.15;
    border: none;
  }

  &.disabled {
    opacity: 0.4;
  }
}
</style>
