<template>
  <div class="form-check radio abc-radio" :class="additionalClasses">
    <input class="form-check-input" type="radio" :name="name" :id="id" :value="value" :checked="state" @change="onChange" :disabled="disabled">
    <label class="form-check-label" :for="id">
      <span class="abc-label-text">{{'forms.controls.radio' | translate}}</span>
    </label>
  </div>
</template>

<script>

  export default {
    name: 'vuestic-radiobutton',
    props: {
      label: String,
      value: {
        type: String,
        default: '',
        required: true
      },
      checked: {
        type: Boolean,
        default: false
      },
      id: {
        type: String,
        required: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        required: true
      },
      modelValue: {
        default: undefined
      },
      brandColor: {
        type: String,
        default: 'primary',
        validator: value => {
          return ['primary', 'secondary', 'success', 'info', 'warning', 'danger'].indexOf(value) >= 0
        }
      }
    },
    model: {
      prop: 'modelValue',
      event: 'input'
    },
    mounted () {
      if (this.checked && !this.state) {
        this.toggle()
      }
    },
    methods: {
      onChange () {
        this.toggle()
      },
      toggle () {
        this.$emit('input', this.state ? '' : this.value)
      }
    },
    computed: {
      state () {
        if (this.modelValue === undefined) {
          return this.checked
        }
        return this.modelValue === this.value
      },
      additionalClasses () {
        return [
          'abc-radio-' + this.brandColor
        ]
      }
    },
    watch: {
      checked (newValue) {
        if (newValue !== this.state) {
          this.toggle()
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";


</style>
