<template>
  <div class="vuestic-datepicker">
    <input ref="input">
  </div>
</template>

<script>
  /**
   * NOTE Totally WIP
   */
  import flatpickr from 'flatpickr'

  export default {
    name: 'vuestic-datepicker',
    mounted () {
      flatpickr(this.$refs.input, {
        appendTo: this.$el,
      })
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/mixins";

  .vuestic-datepicker {
    .flatpickr-months {
      height: 2.625rem;
      border-bottom: 0.125rem;
    }
    .flatpickr-prev-month, .flatpickr-next-month {
      @include flex-center();
      height: 2.625rem;
      width: 1.625rem;
      padding: 0px;
    }
    .flatpickr-current-month {
      .cur-month {
        font-weight: inherit;
      }
    }
  }
</style>
