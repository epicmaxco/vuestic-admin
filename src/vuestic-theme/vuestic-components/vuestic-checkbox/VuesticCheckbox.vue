<template>
  <div class="form-check abc-checkbox" :class="additionalClasses">
    <input class="form-check-input" :id="id" type="checkbox" :name="name" :checked="checked" @change="onChange" :disabled="disabled">
    <label class="form-check-label" :for="id">
      <template v-if="label">
        <span class="abc-label-text">{{label}}</span>
      </template>
      <template v-else>
        <span class="abc-label-text">
          <slot name="label"></slot>
        </span>
      </template>
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
        required: false
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
      }
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
    @import "../../../sass/variables";


</style>
