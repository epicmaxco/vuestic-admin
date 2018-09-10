<template>
  <div class="vuestic-input input-group">
    <input :type="type" :value="value" @input="$emit('input', $event.target.value)" required/>
    <slot name="logo"></slot>
    <i class="fa fa-times icon-right input-icon pointer"
       v-if="clearable"
       @click="$emit('input', '')"></i>
    <label class="control-label"
           :class="classObject">
      {{ title }}
    </label>
    <i class="bar"></i>
    <small class="help text-secondary">
      <slot name="description"></slot>
    </small>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-input',
    props: {
      value: '',
      type: {
        type: String,
        default: 'text'
      },
      title: {
        type: String,
        default: ''
      },
      clearable: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      hasSlotData () {
        return this.$slots.default
      },
      classObject: function () {
        return {
          'control-label_with-icon': this.hasSlotData
        }
      }
    }
  }
</script>

<style lang="scss">
  .vuestic-input {
    .input-icon {
      right: 10px;
    }
  }

  .control-label_with-icon {
    padding-left: 1.375rem;
  }
</style>
