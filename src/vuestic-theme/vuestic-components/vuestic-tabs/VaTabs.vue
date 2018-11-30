<template>
  <div class="va-tabs">
    <div class="va-tabs__bar">
      <div v-for="title in titles" @click="setActive(title)" v-bind:key="title">{{ title }}</div>
    </div>
    <slot/>
  </div>
</template>

<script>
import VaTab from './VaTab'

export default {
  name: 'va-tabs',
  components: {
    VaTab
  },
  props: {
    value: null,
    titles: {
      type: Array
    }
  },
  computed: {
    valueProxy: {
      set (valueProxy) {
        this.$emit('input', valueProxy)
      },
      get () {
        return this.value
      }
    }
  },
  methods: {
    setActive (value) {
      this.valueProxy = value
    }
  }
}
</script>

<style lang="scss">
.va-tabs {
  &__content {
  }

  &__bar {
    display: flex;
    flex-wrap: nowrap;
  }
}
</style>
