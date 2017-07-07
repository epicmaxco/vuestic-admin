<template>
  <div class="form-group with-icon-right dropdown select-form-group multiselect-form-group" v-dropdown>
    <div class="input-group dropdown-toggle">
      <input
        type="text"
        readonly
        :class="{'has-value': !!displayValue}"
        v-bind:value="displayValue"
        required="required"/>
      <i class="ion ion-chevron-down icon-right input-icon"></i>
      <label class="control-label">{{label}}</label><i class="bar"></i>
    </div>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <div class="dropdown-item"
           :class="{'selected': isOptionSelected(option)}" v-for="option in options"
           @click="toggleSelection(option)">
        <span class="ellipsis">{{option}}</span>
        <i class="fa fa-check selected-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import Dropdown from 'directives/Dropdown'

  export default {
    directives: {
      dropdown: Dropdown
    },
    data () {
      return {
        displayValue: ''
      }
    },
    props: {
      label: String,
      options: Array,
      value: Array
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
        this.displayValue = newVal.join(', ')
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";
</style>
