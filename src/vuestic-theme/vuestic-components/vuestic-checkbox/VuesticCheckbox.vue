<template>
  <div class="vuestic-checkbox form-check abc-checkbox"
       :class="additionalClasses"
  >
    <input class="form-check-input"
           type="checkbox"
           :id="id"
           :name="name"
           :checked="checked"
           @change="onChange"
           :disabled="disabled"
    >
    <label class="form-check-label" :for="id">
      <span class="abc-label-text">
        <slot name="label">{{ label }}</slot>
      </span>
    </label>
  </div>
</template>

<script>
  function generateRandomId () {
    return Math.floor(Math.random() * Math.pow(10, 10))
  }

  export default {
    name: 'vuestic-checkbox',
    props: {
      label: String,
      id: {
        type: String,
        default () {
          // We require unique id to show label
          return 'label-' + generateRandomId()
        }
      },
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
      isCircle: {
        type: Boolean,
        default: false
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
    },
    computed: {
      additionalClasses () {
        return [
          this.isCircle ? 'abc-checkbox-circle' : false,
          'abc-checkbox-' + this.brandColor
        ]
      }
    }
  }
</script>

<style lang="scss">
  .vuestic-checkbox {

  }
</style>
