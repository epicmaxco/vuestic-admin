<template>
  <button v-if="tag === 'button'"
          class="vuestic-button btn"
          :class="buttonClass"
          :disabled="disabled"
          :type="type">
    <slot></slot>
    <slot name="title"/>
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
        'outline': this.outline,
        'btn-large': this.large,
        'btn-small': this.small,
        'btn-default': !this.large && !this.small
      }
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
  background-image: linear-gradient(to right, #63e5b3, #23e066);
  box-shadow: none;

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

.vuestic-blue {
  background-image: linear-gradient(to right, #32b5e4, #2c82e0);
  box-shadow: none;

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

.vuestic-red {
  background-image: linear-gradient(to right, #ff7455, #e34b4a);
  box-shadow: none;

  &:hover {
    background-image: linear-gradient(to right, lighten(#ff7455, 15%), lighten(#e34b4a, 15%));
  }

  &:active {
    background-image: linear-gradient(to right, darken(#ff7455, 15%), darken(#e34b4a, 15%));
  }

  &.outline {
    outline: solid 2px #e34b4a;
  }
}

.vuestic-red.outline {
  box-shadow: 0 2px 3px 0 rgba(137, 13, 12, 0.6);
}

.vuestic-yellow {
  background-image: linear-gradient(to right, #ffd72d, #feb900);
  box-shadow: none;

  &:hover {
    background-image: linear-gradient(to right, lighten(#ffd72d, 15%), lighten(#feb900, 15%));
  }

  &:active {
    background-image: linear-gradient(to right, darken(#ffd72d, 15%), darken(#feb900, 15%));
  }

  &.outline {
    outline: solid 2px #ffc202;
  }
}

.vuestic-yellow.outline {
  box-shadow: 0 2px 3px 0 rgba(169, 124, 14, 0.6);
}

.vuestic-gray {
  background-image: linear-gradient(to right, #cdd0d5, #b4b6b9);
  box-shadow: none;

  &:hover {
    background-image: linear-gradient(to right, lighten(#cdd0d5, 15%), lighten(#b4b6b9, 15%));
  }

  &:active {
    background-image: linear-gradient(to right, darken(#cdd0d5, 15%), darken(#b4b6b9, 15%));
  }

  &.outline {
    outline: solid 2px #babfc2;
  }
}

.vuestic-gray.outline {
  box-shadow: 0 2px 3px 0 rgba(104, 115, 125, 0.61);
}

.vuestic-dark {
  background-image: linear-gradient(to right, #576675, #34495e);
  box-shadow: none;

  &:hover {
    background-image: linear-gradient(to right, lighten(#576675, 15%), lighten(#34495e, 15%));
  }

  &:active {
    background-image: linear-gradient(to right, darken(#576675, 15%), darken(#34495e, 15%));
  }

  &.outline {
    outline: solid 2px #34495e;
  }
}

.vuestic-dark.outline {
  box-shadow: 0 2px 3px 0 #aebcca;
}
</style>
