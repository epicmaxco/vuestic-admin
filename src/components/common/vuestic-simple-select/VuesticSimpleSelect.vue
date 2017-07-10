<template>
  <div class="form-group with-icon-right dropdown select-form-group" v-dropdown.closeOnMenuClick>
    <div class="input-group dropdown-toggle">
      <input
        type="text"
        readonly
        :class="{'has-value': !!value}"
        v-bind:value="value"
        required="required"/>
      <i class="ion ion-chevron-down icon-right input-icon"></i>
      <label class="control-label">{{label}}</label><i class="bar"></i>
    </div>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <div class="dropdown-item"
           :class="{'selected': isOptionSelected(option)}" v-for="option in options"
           @click="selectOption(option)">
        <span class="ellipsis">{{option}}</span>
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
    props: {
      label: String,
      options: Array,
      value: {}
    },
    mounted () {
      this.$emit('input', this.value)
    },
    methods: {
      isOptionSelected (option) {
        return this.value === option
      },
      selectOption (option) {
        this.$emit('input', option)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";
</style>
