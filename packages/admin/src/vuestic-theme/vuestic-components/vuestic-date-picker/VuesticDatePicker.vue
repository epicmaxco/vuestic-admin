<template>
  <vue-flatpickr-component
    class="vuestic-date-picker"
    :class="{'has-value': valueProxy && valueProxy.length}"
    v-model="valueProxy"
    v-on="$listeners"
    :config="fullConfig"
  />
</template>

<script>
import VueFlatpickrComponent from 'vue-flatpickr-component'

export default {
  name: 'vuestic-date-picker',
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
      },
    },
    fullConfig () {
      return Object.assign({}, this.defaultConfig, this.config)
    },
    defaultConfig () {
      return {
        // allowInput: true, // false triggers `readonly` on input, which disables label animation.
        nextArrow: '<span aria-hidden="true" class="ion ion-ios-arrow-forward"></span>',
        prevArrow: '<span aria-hidden="true" class="ion ion-ios-arrow-back"></span>',
      }
    },
  },
}
</script>

<style lang="scss">
@import "~flatpickr/dist/flatpickr.css";

$datepickerActive: $vue-green;
$datepickerBackground: #333333;
$datepickerText: $white;

$datepickerToday: lighten($datepickerBackground, 5);
$datepickerOtherMonth: darken($datepickerText, 40);
$datepickerWeekday: darken($datepickerText, 50);
$datepickerDayHover: darken($datepickerText, 70);
$datepickerDayRange: $almost-black;
$datepickerSeparatorColor: $almost-black;

$borderPadding: 0.5rem;
$dayPadding: 0.375rem;
$daySize: 1.75rem;

.flatpickr-calendar {
  width: $daySize * 7 + $dayPadding * 6 + $borderPadding * 2 !important;
  background-color: $datepickerBackground;
  border-radius: 0;
  box-shadow: none;

  &.arrowTop {
    &:before {
      content: none;
      border-bottom-color: $datepickerBackground;
    }
    &:after {
      content: none;
      border-bottom-color: $datepickerBackground;
    }
  }

  &.arrowBottom {
    &:before {
      content: none;
      border-top-color: $datepickerBackground;
    }
    &:after {
      content: none;
      border-top-color: $datepickerBackground;
    }
  }

  .flatpickr-days {
    width: $daySize * 7 + $dayPadding * 6 + $borderPadding * 2 !important;
    padding: 0 $borderPadding $borderPadding;
    display: block;
    .dayContainer {
      width: ($daySize + $dayPadding) * 7;
      max-width: ($daySize + $dayPadding) * 7;
      min-width: ($daySize + $dayPadding) * 7;
      margin: -$dayPadding / 2;
      .flatpickr-day {
        height: $daySize;
        line-height: 1.7;
        font-size: 1rem;
        flex: 0 0 $daySize;
        margin: $dayPadding / 2;
        border: none;
        color: $datepickerText;
        &.today {
          color: $datepickerActive;
          &.selected {
            color: $datepickerText;
          }
        }
        &:hover {
          background-color: $datepickerDayHover;
        }
        &.selected {
          background-color: $datepickerActive;
        }
        &.nextMonthDay, &.prevMonthDay {
          color: $datepickerOtherMonth;
        }
        &.disabled {
          color: $datepickerOtherMonth;
          &:hover {
            background-color: inherit;
          }
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
    border-bottom: solid 0.125rem $datepickerSeparatorColor;
    .flatpickr-month {
      height: 100%;
      .flatpickr-current-month {
        padding-top: 0.625rem;
        color: $datepickerText;
        .cur-month {
          font-size: 1rem;
          font-weight: inherit;
        }
        .cur-year {
          font-size: 1rem;
        }
        .numInputWrapper {
          .numInput.cur-year {
            color: $white;
          }

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
      height: 2.625rem;
      width: 1.625rem;
      @include va-flex-center();
      padding: 0;
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

  .flatpickr-weekwrapper {
    .flatpickr-weekday {
      text-transform: uppercase;
      letter-spacing: 0.0625rem;
      color: $datepickerWeekday;
      font-weight: bold;
      font-size: 0.6875rem;
    }
    .flatpickr-weeks {
      box-shadow: 2px 0 0 $datepickerSeparatorColor;
      padding-bottom: $borderPadding;
      margin-top: -$dayPadding;
      .flatpickr-day {
        height: $daySize;
        line-height: 1.7;
        font-size: 1rem;
        flex: 0 0 $daySize;
        margin-top: $dayPadding;
        color: $datepickerOtherMonth;
      }
    }
  }

  &.showTimeInput.hasTime .flatpickr-time {
    border-top: solid 0.125rem $datepickerSeparatorColor;

    .numInputWrapper {
      &:hover {
        background-color: $datepickerDayHover;
      }
      .numInput {
        color: $datepickerText;
        &:hover, &:focus {
          background: $datepickerDayHover;
        }
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

.form-group {
  .flatpickr-input {
    width: 100%;
    background: none;
    outline: none;
    box-shadow: none;
  }
}
</style>
