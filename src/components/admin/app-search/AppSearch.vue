<template>
  <div
    class="app-search"
    :class="{'app-search--opened': opened}"
    :style="computedStyle">
    <va-input
      ref="input"
      class="app-search__input"
      v-model="valueProxy"
      v-show="opened"
      @blur="inputBlur"/>
    <va-icon
      class="app-search__icon"
      icon="fa fa-search"
      :color="iconColor"
      @click.native="opened = !opened"
    />
  </div>
</template>

<script>
export default {
  name: 'app-search',
  props: {
    value: {
      type: String,
      default: '',
    },
    defaultOpen: {
      type: Boolean,
    },
    width: {
      type: String,
      default: '9rem',
    },
    iconColor: {
      type: String,
      default: 'white',
    },
  },
  watch: {
    opened (value) {
      if (value) {
        this.$nextTick(() => {
          this.$refs.input.$el.querySelector('input').focus()
        })
      } else {
        this.valueProxy = ''
      }
    },
  },
  data () {
    return {
      opened: false,
    }
  },
  computed: {
    valueProxy: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    },
    computedStyle () {
      return {
        width: this.opened ? this.width : '1.5rem',
      }
    },
  },
  methods: {
    inputBlur () {
      if (!this.valueProxy) {
        // this.opened = false
      }
    },
  },
  mounted () {
    if (this.defaultOpen) {
      this.opened = true
    }
  },
}
</script>

<style lang="scss">
  @import "../../../vuestic-theme/vuestic-sass/resources/resources";
  .app-search {
    position: relative;
    &__icon {
      transition: all .5s ease;
      display: flex !important;
      align-items: center;
      cursor: pointer;
    }
    &__input {
      margin-bottom: 0;
      .va-input__container {
        padding-left: 2rem;
      }
    }
    &--opened {
      .app-search__icon {
        position: absolute;
        right: calc(100% - 2rem);
        left: .5rem;
        top: 0;
        bottom: 0;
        justify-content: center;
        color: $dark-blue !important;
      }
    }
  }
</style>
