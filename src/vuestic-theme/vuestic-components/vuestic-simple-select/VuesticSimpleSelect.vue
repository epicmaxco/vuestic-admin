<template>
  <div
    class="form-group with-icon-right dropdown select-form-group"
    v-dropdown.isBlocked
    :class="{'has-error': hasErrors()}">
    <div class="input-group dropdown-toggle">
      <input
        @focus="showDropdown()"
        :class="{'has-value': !!value}"
        v-model="displayValue"
        :name="name"
        :options="options"/>
      <i class="ion ion-ios-arrow-down icon-right input-icon"></i>
      <label class="control-label">{{label}}</label><i class="bar"></i>
      <small v-show="hasErrors()" class="help text-danger">
        {{ showRequiredError() }}
      </small>
    </div>
    <div
      class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <scrollbar ref="scrollbar">
        <div class="dropdown-menu-content">
          <div class="dropdown-item"
               :class="{'selected': isOptionSelected(option)}"
               v-for="option in filteredList"
               @click="selectOption(option)">
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
    },
    data () {
      return {
        validated: false,
        displayValue: this.value,
      }
    },
    watch: {
      value: {
        handler (value) {
          this.displayValue = value || ''
        },
        immediate: true,
      }
    },
    computed: {
      filteredList () {
        return this.options.filter(item => item.search(this.displayValue) === 0)
      },
    },
    methods: {
      showDropdown () {
        this.displayValue = ''
      },
      isOptionSelected (option) {
        return this.displayValue === option
      },
      selectOption (option) {
        this.displayValue = option
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
    }
  }
</script>

<style lang="scss">
  .select-form-group {
    .dropdown-menu {
      padding: 0;
      .vuestic-scrollbar {
        height: $dropdown-item-height * 4;
      }
    }
  }
</style>
