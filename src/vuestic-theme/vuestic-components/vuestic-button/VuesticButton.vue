<template>
  <button class="vuestic-button btn"
          :class="buttonClass"
          :disabled="disabled"
          :type="type"
    v-if="tag === 'button'">
    <slot name="title"/>
  </button>
  <a v-else-if="tag === 'a' || href !== ''" :href="href">
    <slot name="title"/>
  </a>
  <router-link v-else-if="tag === 'router-link'" :to="to">
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
    href: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    buttonClass: function () {
      return {
        'vuestic-green': this.color === 'vuestic-green',
        'vuestic-blue': this.color === 'vuestic-blue',
        'btn-micro': this.small
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

  &:hover {
    background-blend-mode: lighten;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));
  }
}
.vuestic-blue {
  background-image: linear-gradient(to right, #32b5e4, #2c82e0);

  &:hover {
    background-blend-mode: lighten;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));
  }
}
</style>
