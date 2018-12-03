<template>
  <div class="va-tabs">
    <div class="va-tabs__bar">
      <div
        v-for="title in titles"
        class="va-tabs__bar-item"
        :class="{'active': checkForActive(title)}"
        @click="setActive(title)"
        v-bind:key="title"
      >
        {{ title }}
      </div>
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
    },
    checkForActive (value) {
      return this.valueProxy === value
    }
  }
}
</script>

<style lang="scss">
.va-tabs {
  &__bar {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin-bottom: 3rem;
    padding-top: 1rem;
  }

  &__bar-item {
    margin-right: 2.4rem;
    font-size: $font-size-root;
    cursor: pointer;
    opacity: 0.4;
    &.active {
      opacity: 1;
      font-weight: $font-weight-bold;
    }
  }

}
</style>
