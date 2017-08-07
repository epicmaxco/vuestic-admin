<template>
  <div class="form-group with-icon-right dropdown select-form-group multiselect-form-group"
       v-dropdown
       :class="{'has-error': hasErrors()}">
    <div class="input-group dropdown-toggle" @click="$refs.scrollbar.onContainerResize()">
      <input
        readonly
        :class="{'has-value': !!displayValue}"
        v-bind:value="displayValue"
        required/>
      <i class="ion ion-chevron-down icon-right input-icon"></i>
      <label class="control-label">{{label}}</label><i class="bar"></i>
      <small v-show="hasErrors()" class="help text-danger">{{ showRequiredError() }}</small>
    </div>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <scrollbar ref="scrollbar">
        <div class="dropdown-menu-content">
          <div class="dropdown-item"
               :class="{'selected': isOptionSelected(option)}" v-for="option in options"
               @click="toggleSelection(option)">
            <span class="ellipsis">{{option}}</span>
            <i class="fa fa-check selected-icon"></i>
          </div>
        </div>
      </scrollbar>
    </div>
  </div>
</template>

<script>
  import Dropdown from '../../../directives/Dropdown'
  import Scrollbar from '../vuestic-scrollbar/VuesticScrollbar.vue'

  export default {
    name: 'vuestic-multi-select',
    components: {
      Scrollbar
    },
    directives: {
      dropdown: Dropdown
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

  .multiselect-form-group {
    .dropdown-menu {
      padding: 0;
      .vuestic-scrollbar {
        height: $dropdown-item-height * 4;
      }
    }
  }
</style>
