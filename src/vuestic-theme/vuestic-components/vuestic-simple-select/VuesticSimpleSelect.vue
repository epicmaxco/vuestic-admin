<template>
  <div class="vuestic-simple-select">
    <div
      class="form-group with-icon-right dropdown select-form-group"
      v-dropdown="{ isBlocked: true, onDropdownClose: onDropdownClose }"
      :class="{'has-error': hasErrors()}"
    >
      <div
        class="input-group dropdown-toggle vuestic-simple-select__dropdown-toggle">
        <div>
          <input
            @focus="showDropdown()"
            :class="{'has-value': !!value}"
            v-model="displayValue"
            :name="name"
            :options="options"
          >
          <label class="control-label">{{label}}</label><i class="bar"/>
          <small v-show="hasErrors()" class="help text-danger">
            {{ showRequiredError() }}
          </small>
        </div>
        <i
          class="ion ion-ios-arrow-down icon-right input-icon vuestic-simple-select__dropdown-arrow"
          @click="showDropdown"
        />
      </div>
      <div v-if="isClearable">
        <i
          class="fa fa-close icon-cross icon-right input-icon vuestic-simple-select__unselect"
          @click="unselectOption"
        />
      </div>
      <div
        class="dropdown-menu vuestic-simple-select__dropdown-menu"
        aria-labelledby="dropdownMenuButton">
        <scrollbar ref="scrollbar">
          <div
            class="dropdown-menu-content vuestic-simple-select__dropdown-menu-content">
            <div
              class="dropdown-item vuestic-simple-select__dropdown-item"
              v-for="(option, index) in filteredList"
              :key="index"
              :class="{'selected': isOptionSelected(option)}"
              @click="toggleSelection(option)"
            >
            <span
              class="ellipsis">{{optionKey ? option[optionKey] : option}}</span>
            </div>
          </div>
        </scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from 'vuestic-directives/Dropdown'
import Scrollbar from '../vuestic-scrollbar/VuesticScrollbar.vue'

export default {
  name: 'vuestic-simple-select',
  components: {
    Scrollbar,
  },
  directives: {
    dropdown: Dropdown,
  },
  props: {
    label: String,
    options: Array,
    value: {
      default: '',
      required: true,
    },
    optionKey: String,
    required: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      default: 'simple-select',
    },
  },
  data () {
    return {
      validated: false,
      displayValue: this.value || '',
      selectedValue: this.value,
    }
  },
  watch: {
    value: {
      handler (value) {
        if (!value || !this.optionKey) {
          this.displayValue = value || ''
          this.selectedValue = value || ''
          return
        }
        this.selectedValue = value[this.optionKey]
        this.displayValue = value[this.optionKey]
      },
      immediate: true,
    },
  },
  computed: {
    filteredList () {
      const optionKey = this.optionKey
      const displayValue = this.displayValue
      if (displayValue === '') {
        return this.options
      } else {
        // HACK This is done poorly.
        return this.options.filter(function (item) {
          if (optionKey && item && item[optionKey]) {
            // option is object
            if (displayValue) {
              return item[optionKey].toLowerCase()
                .search(displayValue.toLowerCase()) === 0
            }
          } else {
            // option is string
            return (item + '').toLowerCase()
              .search(displayValue.toLowerCase()) === 0
          }
        })
      }
    },
    isClearable () {
      return (this.clearable && this.selectedValue !== '' && this.displayValue !== '' && this.selectedValue !== undefined)
    },
    placeholder () {
      if (this.optionKey && this.selectedValue) {
        return this.selectedValue[this.optionKey]
      } else {
        return this.selectedValue
      }
    },
  },
  methods: {
    onDropdownClose () {
      if (!this.value) {
        this.displayValue = ''
      }
      if (this.value && this.optionKey) {
        this.displayValue = this.value[this.optionKey]
      }
    },
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
      if (this.optionKey) {
        return this.selectedValue === option[this.optionKey]
      } else {
        return this.selectedValue === option
      }
    },
    selectOption (option) {
      if (!option) {
        this.displayValue = ''
      }
      if (option && this.optionKey) {
        this.displayValue = option[this.optionKey]
      }
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
    },
  },
}
</script>

<style lang="scss">
.vuestic-simple-select {

  &__unselect {
    margin-right: 20px;
    cursor: pointer;
  }

  .vuestic-simple-select__dropdown-arrow.vuestic-simple-select__dropdown-arrow {
    top: 12px;
    cursor: pointer;
  }

  &__dropdown-menu {
    padding: 0;

    .vuestic-scrollbar {
      max-height: $dropdown-item-height * 4;
    }
  }
}
</style>
