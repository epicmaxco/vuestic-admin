<template>
  <div
    class="va-toggle"
    :class="computedClass"
    @click="toggle"
    :tabindex="tabIndex"
  >
    <div class="va-toggle__inner">
      <span
        class="va-toggle__track"
        :style="trackStyles"
      />
      <span
        class="va-toggle__input"
        :style="indicatorStyles"
      />
    </div>
    <div class="va-toggle__label">
      <slot name="label">
        {{ label }}
      </slot>
    </div>
  </div>
</template>

<script>
import { ColorThemeMixin } from '../../../services/ColorThemePlugin'

export default {
  name: 'va-toggle',
  mixins: [ColorThemeMixin],
  props: {
    value: {
      type: Boolean,
    },
    label: {
      type: String,
    },
    small: {
      type: Boolean,
    },
    large: {
      type: Boolean,
    },
  },
  computed: {
    computedClass () {
      return {
        'va-toggle--small': this.small,
        'va-toggle--large': this.large,
      }
    },
    trackStyles () {
      return { backgroundColor: this.value ? this.colorComputed : '#babfc2' }
    },
    indicatorStyles () {
      const moveStartPoint = this.small ? 1.5 : this.large ? 2.5 : 2
      return { transform: this.value ? `translateX(${moveStartPoint}rem)` : 'translateX(0rem)' }
    },
  },
  methods: {
    toggle () {
      this.$emit('input', !this.value)
    },
  },
}
</script>

<style lang="scss">
  .va-toggle {
    cursor: pointer;
    display: flex;
    align-items: center;
    &__inner {
      display: inline-block;
      position: relative;
      height: 2rem;
      width: 4rem;
      border-radius: 1rem;
      margin: $btn-margin;
      &:focus {
        outline: 0;
        box-shadow: 0 0 0 4px rgba(52,144,220,.5);
      }
    }
    &--small {
      .va-toggle {
        &__inner {
          height: 1.5rem;
          width: 3rem;
        }
        &__input {
          top: .128rem;
          left: .1275rem;
          height: 1.2rem;
          width: 1.2rem;
        }
        &__track {
          border-radius: .75rem;
        }
      }
    }
    &--large {
      .va-toggle {
        &__inner {
          height: 2.5rem;
          width: 5rem;
        }
        &__input {
          top: .375rem;
          left: .375rem;
          height: 1.8rem;
          width: 1.8rem;
        }
        &__track {
          border-radius: 1.25rem;
        }
      }
    }
    &__label {
      margin-left: 0.25rem;
    }
    &__track {
      display: inline-block;
      border-radius: 1rem;
      height: 100%;
      width: 100%;
      background: $white;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
      transition: background-color .2s ease;
    }
    &__input {
      position: absolute;
      top: .25rem;
      left: .25rem;
      height: 1.5rem;
      width: 1.5rem;
      background-color: $white;
      border-radius: 50%;
      box-shadow:  0 2px 4px rgba(0,0,0,0.1);
      transition: transform .2s ease;
    }
  }

</style>
