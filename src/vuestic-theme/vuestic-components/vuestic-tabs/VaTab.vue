<template>
  <div
    class="va-tab"
    v-if="isOn()"
  >
    <slot/>
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
