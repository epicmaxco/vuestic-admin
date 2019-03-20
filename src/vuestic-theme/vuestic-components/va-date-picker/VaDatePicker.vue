<template>
  <div
    class="va-date-picker va-row"
    :class="{
      'isClosed': !isOpen,
      'noWeekDays': !weekDays
    }"
    @click="onChange()"
  >
    <vue-flatpickr-component
      class="va-date-picker__flatpickr"
      v-model="valueProxy"
      :config="fullConfig"
      @on-close="onChange()"
    />
    <div class="va-date-picker__icon" data-toggle>
      <va-icon icon="fa fa-calendar" size="18px"/>
    </div>
  </div>
</template>

<script>
import VueFlatpickrComponent from 'vue-flatpickr-component'

export default {
  name: 'va-date-picker',
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
    weekDays: {
      type: Boolean
    },
    mode: {
      type: String,
      default: 'single'
    },
    enableTime: {
      type: Boolean
    },
    altInput: {
      type: Boolean
    },
    altFormat: {
      type: String,
      default: 'F j, Y'
    },
    dateFormat: {
      type: String,
      default: 'Y-m-d'
    },
    disable: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      inline: true,
      isOpen: false
    }
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
      let config = this.defaultConfig
      if (this.disable) {
        config = Object.assign({}, { disable: this.disable }, config)
      }
      this.$emit('onOpen')
      return Object.assign({}, config, this.config)
    },
    defaultConfig () {
      return {
        inline: this.inline,
        altFormat: this.altFormat,
        altInput: this.altInput,
        enableTime: this.enableTime,
        mode: this.mode,
        nextArrow: '<span aria-hidden="true" class="ion ion-ios-arrow-forward"/>',
        prevArrow: '<span aria-hidden="true" class="ion ion-ios-arrow-back"/>'
      }
    }
  },
  methods: {
    onChange () {
      this.isOpen = !this.isOpen
    }
  },
  mounted () {
    let el = this.$el.getElementsByClassName('flatpickr-calendar')[0]
    this.$el.removeChild(el)
    this.$el.appendChild(el)
  }
}
</script>

<style lang="scss">
@import "~flatpickr/dist/flatpickr.css";

$datepickerActiveBackground: $vue-darkest-blue;
$datepickerActiveColor: $vue-green;
$datepickerBackground: $light-gray3;
$datepickerText: $vue-darkest-blue;

$datepickerToday: lighten($datepickerBackground, 5);
$datepickerOtherMonth: darken($datepickerText, 40);
$datepickerWeekday: $brand-secondary;
$datepickerDayHover: $vue-darkest-blue;
$datepickerDayRange: $vue-green;
$datepickerSeparatorColor: #e6e9ec;

$borderPadding: 0.5rem;
$dayPadding: 0.375rem;
$daySize: 2rem;
$dayMargin: 0.6rem;

.va-date-picker {
  max-width: $daySize * 7 + ($dayPadding + $dayMargin * 2) * 6 + $borderPadding * 2;
  &__flatpickr {
    border: 0;
    border-bottom: 1px solid $brand-secondary;
    cursor: pointer;
    width: $daySize * 7 + ($dayPadding + $dayMargin * 2) * 6 + $borderPadding * 2 - 2rem !important;
    background-color: $datepickerBackground;
    height: 2.375rem;
    outline: none;
    padding: 0.5rem;
    color: $vue-darkest-blue;
  }
  &__icon {
    border-radius: 0 0.5rem 0 0;
    border-bottom: 1px solid $brand-secondary;
    color: $brand-secondary;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    height: 2.375rem;
    cursor: pointer;
    background-color: $datepickerBackground;
    width: 2rem;
  }
}

.flatpickr-calendar.flatpickr-calendar {
  @at-root {
    .va-date-picker.isClosed &{
      display: none;
    }
  }
  border-radius: 0.5rem;
  width: $daySize * 7 + ($dayPadding + $dayMargin * 2) * 6 + $borderPadding * 2 !important;
  background-color: $datepickerBackground;
  box-shadow: $datepicker-box-shadow;

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
    width: $daySize * 7 + ($dayPadding + $dayMargin * 2) * 6 + $borderPadding * 2 !important;
    display: block;
    .dayContainer {
      max-width: $daySize * 7 + ($dayPadding + $dayMargin * 2) * 6 + $borderPadding * 2 !important;
      width: $daySize * 7 + ($dayPadding + $dayMargin * 2) * 6 + $borderPadding * 2 !important;
      .flatpickr-day {
        @include va-flex-center();
        height: $daySize;
        line-height: 1.7;
        font-size: 1rem;
        flex: 0 0 $daySize;
        margin: $dayMargin;
        border: none;
        color: $datepickerText;
        &.today {
          color: $datepickerActiveBackground;
          &.selected {
            color: $datepickerActiveColor;
          }
        }
        &:hover {
          background-color: $datepickerDayHover;
          color: $vue-green;
        }
        &.selected {
          background-color: $datepickerActiveBackground;
          color: $datepickerActiveColor;
          &:hover {
            color: $datepickerActiveColor;
          }
        }
        &.nextMonthDay, &.prevMonthDay {
          color: $brand-secondary;
        }
        &.disabled {
          color: $brand-secondary;
          &:hover {
            background-color: inherit;
          }
        }
        &.startRange, &.endRange, &.inRange {
          border-radius: 2rem;
          box-shadow: none;
        }
        &.startRange, &.endRange {
          background-color: $datepickerActiveBackground;
          color: $datepickerActiveColor;
        }
        &.inRange {
          color: $datepickerDayRange;
          background-color: $light-gray3;
        }
      }
    }
  }

  .flatpickr-months {
    height: 2.625rem;
    border-bottom: solid 0.0625rem $datepickerSeparatorColor;
    .flatpickr-month {
      height: 100%;
      .flatpickr-current-month {
        padding-top: 0.625rem;
        color: $datepickerText;
        background-color: $datepickerBackground;
        .cur-month {
          font-size: 1rem;
          font-weight: inherit;
        }
        .cur-year {
          font-size: 1rem;
        }
        .numInputWrapper {
          border: 0;
          .numInput.cur-year {
            color: $vue-darkest-blue;
            &:hover {
              background-color: $datepickerBackground;
            }
          }
          .arrowUp {
            background-color: $datepickerBackground;
            &::after {
              border-bottom-color: $datepickerActiveColor;
            }
          }
          .arrowDown {
            background-color: $datepickerBackground;
            &::after {
              border-top-color: $datepickerActiveColor;
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
      color: $brand-secondary;
      &:hover {
        color: $datepickerActiveBackground;
      }
    }
  }

  .flatpickr-weekdays {
    @at-root {
      .va-date-picker.noWeekDays &{
        display: none;
      }
    }
    .flatpickr-weekdaycontainer {
      .flatpickr-weekday {
        color: $datepickerWeekday;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.625rem;
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
    border-top: solid 0.0625rem $datepickerSeparatorColor;
    .numInputWrapper {
      .flatpickr-hour {
        background-color: $datepickerBackground;
      }
      .numInput {
        &:hover, &:focus {
          background: $datepickerBackground;
        }
      }
      .arrowUp {
        &::after {
          border-bottom-color: $datepickerActiveColor;
        }
      }
      .arrowDown {
        &::after {
          border-top-color: $datepickerActiveColor;
        }
      }
    }
    .flatpickr-time-separator {
      color: $datepickerText;
    }
    .flatpickr-am-pm {
      color: $datepickerText;
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
