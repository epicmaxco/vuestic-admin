<template>
  <div class="va-input-wrapper">
    <div class="va-input-wrapper__control">
      <div
        tabindex="0"
        class="va-input-wrapper__slot">
        <div
          v-if="hasPrependData"
          class="va-input-wrapper__prepend-inner">
          <slot name="prepend"/>
        </div>
        <div class="va-input-wrapper__content">
          <slot/>
          <div class="va-input-wrapper__details py-0 px-2">
            <va-message-list
              :color="(error && 'danger') || (success && 'success') || ''"
              :value="error ? errorMessages : messages"
              :limit="error ? errorCount : 99"
            />
          </div>
        </div>
        <div
          v-if="hasAppendData"
          class="va-input-wrapper__append-inner">
          <slot name="append"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VaMessageList from './VaMessageList'
export default {
  name: 'va-input-wrapper',
  components: { VaMessageList },
  props: {
    disabled: Boolean,
    error: Boolean,
    success: Boolean,
    messages: {
      type: Array,
      default: () => [],
    },
    errorMessages: {
      type: Array,
      default: () => [],
    },
    errorCount: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    computedErrorMessages () {
      const isArray = Array.isArray(this.errorMessages)
      const errorMessages = isArray ? this.errorMessages : [this.errorMessages]
      return errorMessages.slice(0, this.errorCount)
    },
    messageStyles () {
      return {
        color:
          this.error ? this.$themes.danger
            : this.success ? this.$themes.success : this.$themes.gray,
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
@import '../../vuestic-sass/resources/resources';

.va-input-wrapper {
  display: flex;
  flex: 1 1 auto;
  align-items: flex-end;
  font-size: 1rem;
  text-align: left;
  margin-bottom: 1rem;

  &__control, &__content {
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__prepend-inner, &__append-inner {
    display: inline-flex;
    align-items: center;
  }

  &__prepend-inner {
    margin-right: 0.5rem;
  }

  &__append-inner {
    margin-left: 0.5rem;
  }

  &__slot {
    display: flex;
    position: relative;
    outline: none;
  }

  &__details {
    padding: 0 0.5rem;
    width: 100%;
  }

  &__messages__wrapper {
    font-size: 0.875rem;
  }
}
</style>
