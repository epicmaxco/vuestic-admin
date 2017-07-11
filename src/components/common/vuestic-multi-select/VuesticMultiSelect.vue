<template>
  <div class="form-group with-icon-right dropdown select-form-group multiselect-form-group"
       v-dropdown
       :class="{'has-error': hasErrors()}">
    <div class="input-group dropdown-toggle">
      <input
        type="text"
        readonly
        :class="{'has-value': !!displayValue}"
        v-bind:value="displayValue"
        required="required"/>
      <i class="ion ion-chevron-down icon-right input-icon"></i>
      <label class="control-label">{{label}}</label><i class="bar"></i>
      <small v-show="hasErrors()" class="help text-danger">{{ showRequiredError() }}</small>
    </div>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <vue-scrollbar class="dropdown-multi-scrollbar" :speed="120" ref="Scrollbar">
        <div>
          <div class="dropdown-item"
               :class="{'selected': isOptionSelected(option)}" v-for="option in options"
               @click="toggleSelection(option)">
            <span class="ellipsis">{{option}}</span>
            <i class="fa fa-check selected-icon"></i>
          </div>
        </div>
      </vue-scrollbar>
    </div>
  </div>
</template>

<script>
  import Dropdown from 'directives/Dropdown'
  import VueScrollbar from 'vue2-scrollbar'

  export default {
    directives: {
      dropdown: Dropdown
    },
    components: {
      VueScrollbar
    },
    data () {
      return {
        displayValue: '',
        validated: false
      }
    },
    props: {
      label: String,
      options: Array,
      value: Array,
      required: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: 'multiselect'
      }
    },
    mounted () {
      this.$emit('input', this.value)
    },
    methods: {
      toggleSelection (option) {
        let newVal = this.isOptionSelected(option) ? this.deselectOption(option) : this.selectOption(option)
        this.updateDisplayValue(newVal)
        this.$emit('input', newVal)
      },
      isOptionSelected (option) {
        return this.value.includes(option)
      },
      selectOption (option) {
        return this.value.concat(option)
      },
      deselectOption (option) {
        return this.value.filter(item => item !== option)
      },
      updateDisplayValue (newVal) {
        if (newVal.length > 2) {
          this.displayValue = `${newVal.length} of ${this.options.length} chosen`
        } else {
          this.displayValue = newVal.join(', ')
        }
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
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .dropdown-multi-scrollbar {
    background-color: $dropdown-background;
    max-height: $dropdown-item-height * $dropdown-multi-visible-items;
  }
  .vue-scrollbar__scrollbar-vertical .scrollbar {
    width: 4px;
  }
</style>
