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
    },
  }
</script>

<style lang="scss">
  @import "../../../sass/mixins";

  $datepickerActive: #4ae487;
  $datepickerBackground: #333333;
  $datepickerText: #ffffff;

  $datepickerBackground: #333333;
  $datepickerOtherMonth: darken($datepickerText, 40);
  $datepickerWeekday: darken($datepickerText, 50);
  $datepickerDayHover: darken($datepickerText, 70);
  $datepickerDayRange: #161616;

  $dayPadding: 0.375rem;
  $daySize: 1.75rem;

  .vuestic-datepicker {

    .flatpickr-calendar {
      background-color: $datepickerBackground;

      .dayContainer {
        padding: 0 0.5rem 0.5rem;
        .flatpickr-day {
          border: none;
          font-size: 1rem;
          color: $datepickerText;
          &:hover {
            background-color: $datepickerDayHover;
          }
          &.today {
            // TODO Add today styles
            /*background-color: #4ae487;*/
            /*color: #ffffff;*/
          }
          &.selected {
            background-color: $datepickerActive;
          }
          &.nextMonthDay, &.prevMonthDay {
            color: $datepickerOtherMonth;
          }
        }
      }

      .flatpickr-months {
        height: 2.625rem;
        border-bottom: solid 0.125rem $datepickerDayRange;
        .flatpickr-month {
          height: 100%;
          .flatpickr-current-month {
            padding-top: 0.625rem;
            color: $datepickerText;
            .cur-month {
              font-size: 16px;
              font-weight: inherit;
            }
            .cur-year {
              font-size: 16px;
            }
            .numInputWrapper {
              .arrowUp {
                &:hover {
                  &::after {
                    border-bottom-color: $datepickerActive;
                  }
                }
                &::after {
                  border-bottom-color: $datepickerText;
                }
              }
              .arrowDown {
                &:hover {
                  &::after {
                    border-top-color: $datepickerActive;
                  }
                }
                &::after {
                  border-top-color: $datepickerText;
                }
              }
            }
          }
        }

        .flatpickr-prev-month, .flatpickr-next-month {
          @include flex-center();
          height: 2.625rem;
          width: 1.625rem;
          padding: 0px;
          &:hover {
            svg {
              fill: $datepickerActive;
            }
          }
          svg {
            fill: $datepickerText;
          }
        }
      }

      .flatpickr-weekdays {
        .flatpickr-weekday {
          color: $datepickerWeekday;
        }
      }
    }
  }
</style>
