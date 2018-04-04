<template>
  <div class="vuestic-date-picker form-group">
    <div class="input-group simple-date-time-picker" v-if="type === 'simple'">
      <input
        :id="id"
        :name="name"
        v-model="value"
        v-validate="(validateRules && validateRules.length ? validateRules +   '|' : '') + 'date_format:' + format"
        v-init-date-picker="initDatePicker"
        required/>
      <i class="fa fa-exclamation-triangle error-icon icon-right input-icon" v-if="errors.has(name)"></i>
      <i class="fa fa-check valid-icon icon-right input-icon" v-else></i>
      <label class="control-label" :for="id">{{name}}</label><i class="bar"></i>
      <small v-show="errors.has(name)" class="help text-danger">
        {{ errors.first(name) }}
      </small>
    </div>
    <div class="input-group simple-date-time-picker" v-else-if="type === 'month'">
      <input
        :id="id"
        :name="name"
        v-model="value"
        v-validate="(validateRules && validateRules.length ? validateRules +   '|' : '') + 'date_format:' + format"
        v-init-date-picker="initDatePicker"
        required/>
      <i class="fa fa-exclamation-triangle error-icon icon-right input-icon" v-if="errors.has(name)"></i>
      <i class="fa fa-check valid-icon icon-right input-icon" v-else></i>
      <label class="control-label" :for="id">{{name}}</label><i class="bar"></i>
      <small v-show="errors.has(name)" class="help text-danger">
        {{ errors.first(name) }}
      </small>
    </div>
  </div>
</template>

<script>
  import Pikaday from 'pikaday'
  import moment from 'moment'

  window.moment = moment

  export default {
    name: 'vuestic-date-time-picker',
    props: {
      className: {
        type: String,
        default: ''
      },
      validateRules: {
        type: String
      },
      id: {
        required: true
      },
      name: {
        required: true
      },
      format: {
        default: 'DD-MM-YYYY'
      },
      type: {
        default: 'month'
      },
      options: {
        default () {
          return {}
        }
      }
    },
    directives: {
      'init-date-picker': {
        inserted (el, binding) {
          binding.value(el)
        }
      }
    },
    data () {
      return {
        picker: null,
        value: ''
      }
    },
    computed: {
      computedValue: {
        get () {
          return this.value
        },
        set (value) {
          if (this.$validator) {
            this.$emit('update:value', value)
          }
        }
      }
    },
    methods: {
      initDatePicker (field) {
        this.picker = new Pikaday({
          field,
          format: this.format,
          showDaysInNextAndPreviousMonths: true,
          weekdaysUltraShort: true,
          pickMonth: this.type === 'month',
          firstDay: 1,
          onMonthClick: this.showMonthSelect,
          onYearClick: this.showYearSelect
        })
      },
      showMonthSelect (el, months, gotoMonth) {

      },
      showYearSelect (el, minYear, maxYear) {
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../../Pikaday/scss/pikaday";
  .calendar-trigger {
    &:hover {
      cursor: pointer;
      color: #4ae387;
    }
  }
  .pika-single {
    background-color: #333333;
    &.is-bound {
      box-shadow: 0 8px 14.7px 1.3px rgba(101, 169, 119, 0.5);
    }
    &.is-hidden {
      display: block;
    }
    .pika-lendar {
      margin: 0;
      width: auto;
      .pika-title {
        border-bottom: solid #161616 2px;
        .pika-label {
          background: none;
          color: white;
          font-size: 1rem;
          font-weight: normal;
        }
        .pika-next, .pika-prev {
          color: #4ae487;
        }
      }
      .pika-table-container {
        padding: .3rem;
      }
      .pika-table {
        thead {
          padding-left: .5rem;
          th {
            color: white;
            opacity: .2;
            text-transform: uppercase;
            font-weight: bold;

          }
        }
        td {
          width: auto;
          &.is-selected {
            .pika-button {
              background: #4ae487;
              box-shadow: none;
            }
          }
          &.is-outside-current-month {
            .pika-button {
              opacity: .5;
            }
          }
          .pika-button {
            text-align: center;
            font-size: 1rem;
            background: none;
            color: white;
            height: 2.3rem;
            width: 2.3rem;
            margin: .05rem .1rem;
            border-radius: 1.15rem;
            &.pika-month {
              height: 2.3rem;
              width: auto;
              margin: 0 .5rem;
            }
            &:hover {
              color: #4ae487;
            }
          }
        }
      }
    }
  }
</style>
