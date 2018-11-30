<template>
  <div @click="$emit('click', value)"
       class="va-tab"
  >
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  name: 'va-tab',
  props: {
    value: null,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
