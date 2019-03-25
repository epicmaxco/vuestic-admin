<template>
  <div
    class="va-input-wrapper d-flex align--end text--left"
    :class="{ 'va-input-wrapper--disabled' : disabled }"
  >
    <div class="va-input-wrapper__control">
      <div
        tabindex="0"
        :style="slotStyles"
        class="va-input-wrapper__slot d-flex align--end pt-2">
        <div
          v-if="hasPrependData"
          class="va-input-wrapper__prepend-inner d-inline-flex align--center ml-2">
          <slot name="prepend"/>
        </div>
        <div class="va-input-wrapper__content">
          <slot/>
        </div>
        <div
          v-if="hasAppendData"
          class="va-input-wrapper__append-inner d-inline-flex align--center mr-2">
          <slot name="append"/>
        </div>
      </div>
      <div class="va-input-wrapper__details py-0 px-2">
        <div class="va-input-wrapper__messages">
          <div
            v-if="error"
            :style="messageStyles"
            class="va-input-wrapper__messages__wrapper">
            <template
              v-for="message in errorMessages">
              {{ message }}
            </template>
          </div>
          <div
            v-else
            :style="messageStyles"
            class="va-input-wrapper__messages__wrapper">
            <template v-for="message in messages">
              {{ message }}
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHoverColor } from '../../../services/colors'

export default {
  name: 'va-input-wrapper',
  props: {
    disabled: {
      type: Boolean
    },
    error: {
      type: Boolean
    },
    success: {
      type: Boolean
    },
    messages: {
      type: Array
    },
    errorMessages: {
      type: Array
    },
  },
  computed: {
    slotStyles () {
      return {
        backgroundColor: this.error ? getHoverColor('danger') : this.success ? getHoverColor('success') : '#f5f8f9',
        borderColor: this.error ? this.$themes.danger : this.success ? this.$themes.success : '#babfc2'
      }
    },
    messageStyles () {
      return {
        color: this.error ? this.$themes.danger : '#babfc2'
      }
    },
    hasPrependData () {
      return this.$slots.prepend
    },
    hasAppendData () {
      return this.$slots.append
    },
  },
}
</script>

<style lang='scss'>
  .va-input-wrapper {
    flex: 1 1 auto;
    font-size: 1rem;

    &--focused {

      .va-input-wrapper__slot {
        border-color: $charcoal !important;
      }
    }

    &--disabled {

      .va-input-wrapper__slot {
        border-color: $brand-secondary !important;
      }
    }

    &__control, &__content {
      width: 100%;
    }

    &__slot {
      position: relative;
      min-height: 1.5rem;
      border-style: solid;
      border-width: 0 0 thin 0;
      outline: none;
    }
  }
</style>
