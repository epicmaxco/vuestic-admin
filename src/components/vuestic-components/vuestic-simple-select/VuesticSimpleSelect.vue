<template>
  <div class="form-group with-icon-right dropdown select-form-group"
       v-dropdown.closeOnMenuClick
       :class="{'has-error': hasErrors()}">
    <div class="input-group dropdown-toggle" @click="$refs.scrollbar.onContainerResize()">
      <input
        readonly
        :class="{'has-value': !!displayValue}"
        v-model="displayValue"
        :name="name"
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
               @click="selectOption(option)">
            <span class="ellipsis">{{option}}</span>
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
    name: 'vuestic-simple-select',
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
      value: {},
      required: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: 'simple-select'
      }
    },
    mounted () {
      this.updateDisplayValue(this.value)
      this.$emit('input', this.value)
    },
    methods: {
      isOptionSelected (option) {
        return this.value === option
      },
      selectOption (option) {
        this.updateDisplayValue(option)
        this.$emit('input', option)
      },
      updateDisplayValue (val) {
        this.displayValue = val
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

  .select-form-group {
    .dropdown-menu {
      padding: 0;
      .vuestic-scrollbar {
        height: $dropdown-item-height * 4;
      }
    }
  }
</style>
