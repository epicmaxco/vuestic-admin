<template>
  <vue-flatpickr-component
    v-on="$listeners"
    v-model="valueProxy"
    :config="fullConfig"
  />
</template>

<script>
  import VueFlatpickrComponent from 'vue-flatpickr-component'

  export default {
    components: {
      VueFlatpickrComponent,
    },
    props: {
      value: {
        required: true,
      },
      config: {
        default: () => {
          return {}
        },
      },
    },
    computed: {
      valueProxy: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      },
      fullConfig () {
        return Object.assign({}, this.defaultConfig, this.config)
      },
      defaultConfig () {
        return {
          nextArrow: '<span aria-hidden="true" class="ion ion-ios-arrow-forward"></span>',
          prevArrow: '<span aria-hidden="true" class="ion ion-ios-arrow-back"></span>',
        }
      },
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

  $borderPadding: 0.5rem;
  $dayPadding: 0.375rem;
  $daySize: 1.75rem;

  .flatpickr-calendar {
    background-color: $datepickerBackground;
    border-radius: 0;

    &.arrowTop {
      &:before {
        border-bottom-color: $datepickerBackground;
      }
      &:after {
        border-bottom-color: $datepickerBackground;
      }
    }

    .flatpickr-days {
      width: $daySize * 7 + $dayPadding * 6 + $borderPadding * 2;
      padding: 0 $borderPadding $borderPadding;
      display: block;
      .dayContainer {
        width: ($daySize + $dayPadding) * 7;
        max-width: ($daySize + $dayPadding) * 7;
        min-width: ($daySize + $dayPadding) * 7;
        margin-top: -$dayPadding;
        margin-right: -$dayPadding;
        .flatpickr-day {
          height: $daySize;
          line-height: 1.7;
          font-size: 1rem;
          flex: 0 0 $daySize;
          margin-top: $dayPadding;
          margin-right: $dayPadding;
          border: none;
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
          &.startRange, &.endRange, &.inRange {
            border-radius: 2rem;
            box-shadow: none;
          }
          &.startRange, &.endRange {
            background-color: $datepickerActive;
          }
          &.inRange {
            background-color: $datepickerDayRange;
          }
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
        color: $datepickerText;
        &:hover {
          color: $datepickerActive;
        }
      }
    }

    .flatpickr-weekdays {
      padding: 0 $borderPadding;
      .flatpickr-weekdaycontainer {
        justify-content: space-between;
        .flatpickr-weekday {
          letter-spacing: 0.0625rem;
          flex: 0 0 $daySize;
          color: $datepickerWeekday;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 0.6875rem;
        }
      }
    }

    &.showTimeInput.hasTime .flatpickr-time {
      border-top: solid 0.125rem $datepickerDayRange;

      .numInputWrapper {
        &:hover {
          background-color: $datepickerDayHover;
        }
        .numInput {
          color: $datepickerText;
        }
        .arrowUp {
          &::after {
            border-bottom-color: $datepickerText;
          }
          &:hover::after {
            border-bottom-color: $datepickerActive;
          }
        }
        .arrowDown {
          &::after {
            border-top-color: $datepickerText;
          }
          &:hover::after {
            border-top-color: $datepickerActive;
          }
        }
      }
      .flatpickr-time-separator {
        color: $datepickerText;
      }
      .flatpickr-am-pm {
        color: $datepickerText;
        &:hover {
          background-color: $datepickerDayHover;
        }
      }
    }
  }
</style>
