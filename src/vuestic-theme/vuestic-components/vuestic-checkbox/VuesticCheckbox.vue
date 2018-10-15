<template>
  <div
    class="vuestic-checkbox"
  >
    <div class="vuestic-checkbox__container"
    >
      <div
        class="vuestic-checkbox__square"
        :class="{'onFocus': onFocus}"
        @click="selected = !selected"
        @keydown="selected = !selected"
      >
      <span class="vuestic-checkbox__icon selected"
            :class="{'error': isError}"
            v-if="selected && !disabled"
            @mousedown="toggleFocus"
            @mouseup="toggleFocus"
      >
      <span class="icon">
        <i class="ion ion-md-checkmark" aria-hidden="true"/>
      </span>
      </span>
        <input
          class="vuestic-checkbox__icon"
          @focus="toggleFocus"
          @blur="toggleFocus"
          v-else
        />
      </div>
      <label v-if="label" :for="id">
      <span class="vuestic-checkbox__label-text">
        <slot name="label">{{ label }}</slot>
      </span>
      </label>
    </div>
  </div>
</template>

<script>
function generateRandomId () {
  return Math.floor(Math.random() * Math.pow(10, 10))
}

export default {
  name: 'vuestic-checkbox',
  props: {
    label: String,
    value: {
      type: Boolean,
      required: true
    },
    isError: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default () {
        // We require unique id to show label
        return 'label-' + generateRandomId()
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      onFocus: false
    }
  },
  computed: {
    selected: {
      set (selected) {
        if (!this.readonly) {
          this.$emit('input', selected)
        }
      },
      get () {
        return this.value
      }
    }
  },
  methods: {
    toggleFocus () {
      if (!this.disabled && !this.readonly) {
        this.onFocus = !this.onFocus
      }
    }
  },
  created () {
    window.addEventListener('mouseover', (event) => {
      if (event.target !== this.$el.querySelector('.vuestic-checkbox__container') &&
        event.target !== this.$el.querySelector('.vuestic-checkbox__icon')) {
        this.onFocus = false
      }
    })
  }
}
</script>

<style lang="scss">
.vuestic-checkbox {
  cursor: pointer;
  margin-bottom: 2px;
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 1.375rem;
    width: 1.375rem;
    color: $white;
    border: solid 0.125rem $lighter-gray;
    @at-root {
      &.selected {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.4rem;
        width: 1.4rem;
        color: $white;
        background-color: $vue-green;
        border: 0;
      }
      &.error {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.4rem;
        width: 1.4rem;
        color: $white;
        background-color: $theme-red;
        border: 0;
      }
    }
  }
  &__label-text {
    display: inline-block;
    position: relative;
    padding-top: 5px;
    padding-left: 13px;
  }
  &__container {
    display: flex;
    flex-direction: row;
  }
  &__square {
    padding: 8px;
    &.onFocus {
      background-color: rgba(187, 180, 178, 0.33);
      border-radius: 15px;
    }
  }
}
</style>
