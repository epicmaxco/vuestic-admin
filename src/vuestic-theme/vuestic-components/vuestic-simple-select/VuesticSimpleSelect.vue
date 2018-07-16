<template>
  <div
    class="form-group with-icon-right dropdown select-form-group"
    v-dropdown.isBlocked
    :class="{'has-error': hasErrors()}">
    <div class="input-group dropdown-toggle">
      <div>
        <input
          @focus="showDropdown()"
          :class="{'has-value': !!value}"
          v-model="displayValue"
          :name="name"
          :options="options"
          :placeholder="placeholder">
        <label class="control-label">{{label}}</label><i class="bar"/>
        <small v-show="hasErrors()" class="help text-danger">
          {{ showRequiredError() }}
        </small>
      </div>
      <div>
        <i
          class="ion ion-ios-arrow-down icon-right input-icon dropdown-ion"
          @click="showDropdown"
        />
      </div>
    </div>
    <div v-if="isClearable">
      <i
        class="fa fa-close icon-cross icon-right input-icon select-form-group__unselect"
        @click="unselectOption"
      />
    </div>
    <div
      class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <scrollbar ref="scrollbar">
        <div class="dropdown-menu-content">
          <div class="dropdown-item"
               :class="{'selected': isOptionSelected(option)}"
               v-for="option in filteredList"
               @click="toggleSelection(option)">
            <span
              class="ellipsis">{{optionKey ? option[optionKey] : option}}</span>
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
  props: {
    label: String,
    options: Array,
    value: {
      default: '',
      required: true
    },
    optionKey: String,
    required: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: 'simple-select'
    },
  },
  data () {
    return {
      validated: false,
      displayValue: this.value,
      selectedValue: ''
    }
  },
  watch: {
    value: {
      handler (value) {
        if (this.optionKey) {
          this.displayValue = value[this.optionKey]
        } else {
          this.displayValue = value || ''
        }
      },
      immediate: true,
    }
  },
  computed: {
    filteredList () {
      const optionKey = this.optionKey
      const displayValue = this.displayValue
      if (displayValue === '') {
        return this.options
      } else {
        return this.options.filter(function (item) {
          if (optionKey && item[optionKey]) {
            return item[optionKey].search(displayValue) === 0
          } else {
            return item.search(displayValue) === 0
          }
        })
      }
    },
    isClearable () {
      return (this.clearable && this.selectedValue !== '' && this.displayValue !== '' && this.selectedValue !== undefined)
    },
    placeholder () {
      if (this.optionKey !== undefined) {
        return this.selectedValue[this.optionKey]
      } else {
        return this.selectedValue
      }
    }
  },
  methods: {
    toggleSelection (option) {
      this.isOptionSelected(option) ? this.unselectOption() : this.selectOption(option)
    },
    unselectOption () {
      this.selectedValue = ''
      this.$emit('input', this.selectedValue)
    },
    showDropdown () {
      this.displayValue = ''
    },
    isOptionSelected (option) {
      return this.selectedValue === option
    },
    selectOption (option) {
      this.displayValue = option
      this.selectedValue = option
      this.$emit('input', option)
    },
    validate () {
      this.validated = true
    },
    isValid () {
      let isValid = true
      if (this.required) {
        isValid = !!this.value
      }
      return isValid
    },
    hasErrors () {
      let hasErrors = false
      if (this.required) {
        hasErrors = this.validated && !this.value
      }
      return hasErrors
    },
    showRequiredError () {
      return `The ${this.name} field is required`
    }
  }
}
</script>

<style lang="scss" scoped>
.select-form-group {
  &__unselect {
    margin-right: 20px;
    cursor: pointer;
  }

  .dropdown-ion{
    top: 12px;
    cursor: pointer;
  }

  .dropdown-menu {
    padding: 0;
    .vuestic-scrollbar {
      height: $dropdown-item-height * 4;
    }
  }
}
</style>
