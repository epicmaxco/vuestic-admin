<template>
  <div
    class="form-group with-icon-right dropdown select-form-group"
    v-dropdown.isBlocked = "isShown"
    :class="{'has-error': hasErrors()}">
    <div class="input-group dropdown-toggle">
      <input
        @focus="showDropdown()"
        :class="{'has-value': !!displayValue}"
        v-model="displayValue"
        :name="name"
        @keyup="updateList()"
        required
        :options="options"
        :tempOptions="tempOptions"/>
      <i class="ion ion-ios-arrow-down icon-right input-icon"></i>
      <label class="control-label">{{label}}</label><i class="bar"></i>
      <small v-show="hasErrors()" class="help text-danger">{{ showRequiredError() }}</small>
    </div>
    <div
      class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <scrollbar ref="scrollbar">
        <div class="dropdown-menu-content">
          <div class="dropdown-item"
               :class="{'selected': isOptionSelected(option)}" v-for="option in tempOptions"
               @click="selectOption(option)">
            <span class="ellipsis">{{optionKey ? option[optionKey] : option}}</span>
          </div>
        </div>
      </scrollbar>
    </div>
  </div>
</template>

<script>
  import Dropdown from 'vuestic-directives/Dropdown'
  import Scrollbar from '../vuestic-scrollbar/VuesticScrollbar.vue'

  export default {
    name: 'vuestic-simple-select',
    components: {
      Scrollbar
    },
    directives: {
      dropdown: Dropdown
    },
    data () {
      return {
        validated: false,
        displayValue: this.value,
        currentOptions: this.options,
      }
    },
    props: {
      label: String,
      tempOptions: Array,
      options: Array,
      value: {
        type: String,
        default: '',
        required: true
      },
      optionKey: String,
      required: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: 'simple-select'
      },
      isShown: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      this.updateDisplayValue(this.value)
      this.$emit('input', this.value)
    },

    methods: {
      showDropdown () {
        this.isShown = true
      },
      onKeyUp () {
        this.$emit('check', this.displayValue)
      },

      isOptionSelected (option) {
        return this.value === option
      },
      selectOption (option) {
        this.updateDisplayValue(option)
        this.$emit('input', option)
      },
      updateDisplayValue (val) {
        this.displayValue = this.optionKey ? val[this.optionKey] : val
      },
      validate () {
        this.validated = true
      },
      isValid () {
        let isValid = true
        if (this.required) {
          isValid = !!this.displayValue
        }
        return isValid
      },
      hasErrors () {
        let hasErrors = false
        if (this.required) {
          hasErrors = this.validated && !this.displayValue
        }
        return hasErrors
      },
      showRequiredError () {
        return `The ${this.name} field is required`
      },
      updateList () {
        this.$emit('check', this.displayValue)
        this.tempOptions = this.options.filter(item => item.search(this.displayValue) === 0)
      },
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";

  .select-form-group {
    .dropdown-menu {
      padding: 0;
      .vuestic-scrollbar {
        height: $dropdown-item-height * 4;
        .track {
          width: 5px;
        }
      }
    }
  }
</style>
