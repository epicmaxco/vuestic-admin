<template>
    <div class="form-check abc-checkbox abc-checkbox-primary" :class="{'abc-checkbox-circle': circle}">
        <input class="form-check-input" :id="id" type="checkbox" :checked="checked" @change="onChange" :disabled="disabled">
        <label class="form-check-label" :for="id">
            <span class="abc-label-text">{{label}}</span>
        </label>
    </div>
</template>

<script>

  export default {
    name: 'vuestic-checkbox',
    props: {
      label: String,
      id: {
        type: String,
        required: true
      },
      value: String,
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ''
      },
      circle: {
        type: Boolean,
        default: false
      }
    },
    model: {
      prop: 'checked',
      event: 'change'
    },
    mounted () {
      this.$emit('change', this.checked)
    },
    methods: {
      onChange (event) {
        this.$emit('change', event.target.checked)
      },
      validate () {
        this.validated = true
      },
      isValid () {
        let isValid = true
        return isValid
      },
      hasErrors () {
        let hasErrors = false
        return hasErrors
      }
    }
  }
</script>

<style lang="scss">
    @import "../../../sass/variables";


</style>
