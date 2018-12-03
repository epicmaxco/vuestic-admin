<template>
  <div
    v-if="isOn ()"
    @click="$emit('click', value)"
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
      type: Boolean
    }
  },
  methods: {
    isOn () {
      return this.value === this.$parent.valueProxy
    }
  },
}
</script>

<style lang="scss">

</style>
