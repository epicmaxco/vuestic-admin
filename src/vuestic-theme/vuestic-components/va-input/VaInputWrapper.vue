<template>
  <div
    class="va-input-wrapper"
    :class="{ 'va-input-wrapper--disabled' : disabled }"
  >
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
            <div class="va-input-wrapper__messages">
              <div
                v-if="error"
                :style="messageStyles"
                class="va-input-wrapper__messages__wrapper">
                <template
                  v-for="errorMessage in errorMessages">
                  {{ errorMessage }}
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
export default {
  name: 'va-input-wrapper',
  props: {
    disabled: {
      type: Boolean,
    },
    error: {
      type: Boolean,
    },
    success: {
      type: Boolean,
    },
    messages: {
      type: Array,
      default: () => [],
    },
    errorMessages: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
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
