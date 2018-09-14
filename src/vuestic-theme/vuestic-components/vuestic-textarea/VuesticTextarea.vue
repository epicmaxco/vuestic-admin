<template>
  <div class="vuestic-textarea input-group">
    <textarea :value="value" @input="$emit('input', $event.target.value)" required></textarea>
    <i v-if="clearable"
       class="fa fa-times icon-right input-icon pointer"
       @click="$emit('input', '')"></i>
    <label class="control-label">
      {{ title }}
    </label>
    <i class="bar"></i>
  </div>
</template>

<script>
export default {
  name: 'vuestic-textarea',
  props: {
    value: '',
    title: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss">
  .vuestic-textarea {
    .input-icon {
      right: 10px;
    }
  }
</style>
