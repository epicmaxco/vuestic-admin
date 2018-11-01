<template>
  <div
    class="form-group with-icon-right dropdown select-form-group multiselect-form-group"
    v-dropdown
    :class="{'has-error': hasErrors()}">
    <div class="input-group dropdown-toggle">
      <input
        readonly
        :class="{'has-value': !!displayValue}"
        v-bind:value="displayValue"
        required/>
      <label class="control-label">{{label}}</label><i class="bar"></i>
      <small v-show="hasErrors()" class="help text-danger">{{
        showRequiredError() }}
      </small>
      <i class="ion ion-ios-arrow-down icon-right input-icon dropdown-ion"></i>
    </div>
    <div v-if="isClearable">
      <i
        class="fa fa-close icon-cross icon-right input-icon multiselect-form-group__unselect"
        @click="unselectOptions"
      />
    </div>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <scrollbar ref="scrollbar">
        <div class="dropdown-menu-content">
          <div
            class="dropdown-item"
            :class="{'selected': isOptionSelected(option)}"
            v-for="(option, index) in options"
            :key="index"
            @click="toggleSelection(option)"
          >
            <span
              class="ellipsis">{{optionKey ? option[optionKey] : option}}</span>
            <i class="fa fa-check selected-icon"></i>
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
  name: 'vuestic-multi-select',
  components: {
    Scrollbar,
  },
  directives: {
    dropdown: Dropdown,
  },
  data () {
    return {
      displayValue: '',
      validated: false,
    }
  },
  props: {
    label: String,
    itemsChosenPlaceholder: {
      type: String,
      default: 'chosen',
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    options: Array,
    value: Array,
    optionKey: String,
    required: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: 'multiselect',
    },
  },
  mounted () {
    this.$emit('input', this.value)
  },

  updated: function () {
    this.updateDisplayValue(this.value)
  },

  methods: {
    unselectOptions () {
      this.value.splice(0, this.value.length)
      this.displayValue = ''
      this.$emit('input', this.value)
    },
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
        this.displayValue = `${newVal.length}/${this.options.length} ${this.itemsChosenPlaceholder}`
      } else {
        this.displayValue = (this.optionKey ? newVal.map(item => item[this.optionKey]) : newVal).join(', ')
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
    },
  },
  computed: {
    isClearable () {
      return (this.clearable && this.value.length !== 0 && this.displayValue !== '')
    },
  },
}
</script>

<style lang="scss" scoped>
.multiselect-form-group {
  &__unselect {
    margin-right: 20px;
    cursor: pointer;
  }

  .dropdown-ion {
    top: 12px;
    cursor: pointer;
  }

  .dropdown-menu {
    padding: 0;
    .vuestic-scrollbar {
      max-height: $dropdown-item-height * 4;
    }
  }
}
</style>
