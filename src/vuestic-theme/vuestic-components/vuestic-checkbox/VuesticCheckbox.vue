<template>
    <div class="form-check abc-checkbox" :class="classArray">
        <input class="form-check-input" :id="id" type="checkbox" :checked="checked" @change="onChange"
               :disabled="disabled">
        <label class="form-check-label" :for="id">
            <template v-if="label">
                <span class="abc-label-text" v-html="label"></span>
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
      contextualColor: {
        type: String,
        default: 'primary',
        validator: value => {
          return ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'pale'].indexOf(value) >= 0
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
      classArray () {
        return [
          this.isCircle ? 'abc-checkbox-circle' : false,
          'abc-checkbox-' + this.contextualColor
        ]
      }
    }
  }
</script>

<style lang="scss">
    @import "../../../sass/variables";


</style>
