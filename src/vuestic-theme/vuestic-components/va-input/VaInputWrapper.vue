<template>
  <div
    class="va-input-wrapper d-flex align--start">
    <div class="va-input-wrapper__control">
      <div
        :style="slotStyles"
        class="va-input-wrapper__slot">
        <div class="va-input-wrapper__prepend-inner">
          <slot name="prepend"/>
        </div>
        <div class="va-input-wrapper__slot">
          <slot/>
        </div>
        <div class="va-input-wrapper__append-inner">
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
        backgroundColor: this.error ? '#ffebeb' : '#f5f8f9'
      }
    },
    messageStyles () {
      return {
        color: this.error ? '#e34b4a' : '#babfc2'
      }
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
    }

    &__details {
      padding: 0 0.5rem;

      .va-input-wrapper__messages__wrapper {
        font-family: $font-family-sans-serif;
      }
    }
  }
</style>
