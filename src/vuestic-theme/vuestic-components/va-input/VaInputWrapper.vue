<template>
  <div
    class="va-input-wrapper d-flex align--start">
    <div class="va-input-wrapper__control">
      <div
        tabindex="0"
        :style="slotStyles"
        class="va-input-wrapper__slot pt-2">
        <div
          v-if="hasPrependData"
          class="va-input-wrapper__prepend-inner ml-2">
          <slot name="prepend"/>
        </div>
        <div>
          <slot/>
        </div>
        <div
          v-if="hasAppendData"
          class="va-input-wrapper__append-inner mr-2">
          <slot name="append"/>
        </div>
      </div>
      <div class="va-input-wrapper__details">
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
export default {
  name: 'va-input-wrapper',
  props: {
    error: {
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
        backgroundColor: this.error ? '#ffebeb' : '#f5f8f9',
        borderColor: this.error ? '#e34b4a' : '#babfc2'
      }
    },
    messageStyles () {
      return {
        color: this.error ? '#e34b4a' : '#babfc2'
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
    text-align: left;

    &__prepend-inner, &__append-inner {
      display: inline-flex;
      align-items: center;
    }

    &__slot {
      position: relative;
      display: flex;
      min-height: 1.5rem;
      border-style: solid;
      border-width: 0 0 thin 0;
      outline: none;

      /* &:focus {
        border-bottom: 1px solid #555555 !important;
      } */
    }

    .va-input-wrapper__slot:focus{
      border-bottom: 1px solid #555555 !important;
    }

    &__details {
      padding: 0 0.5rem;

      .va-input-wrapper__messages__wrapper {
        font-family: $font-family-sans-serif;
      }
    }
  }
</style>
