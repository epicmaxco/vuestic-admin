<template>
  <div class="va-tabs">
    <div
      class="va-tabs__bar"
      :class="{
      'align-right': right,
      'align-left': left,
      'grow': grow
      }"
      :style="{'background-color': color}"
    >
      <div
        v-for="item in $slots.default"
        v-bind:key="item.value"
        class="va-tabs__bar-item"
        :class="{
          'active': item.componentOptions.propsData.value === valueProxy
        }"
        @click="valueProxy = item.componentOptions.propsData.value"
      >
        {{ item.componentOptions.propsData.value }}
        <div
          class="va-tabs__slider"
          v-if="item.componentOptions.propsData.value === valueProxy
          && !hideSlider"
        />
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
    right: Boolean,
    left: Boolean,
    grow: Boolean,
    color: {
      type: String,
      default: 'white'
    },
    hideSlider: Boolean
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
  }
}
</script>

<style lang="scss">
.va-tabs {

  &__bar {
    display: flex;
    margin-bottom: 3rem;
    padding-top: 1rem;
    &.align-right {
      justify-content: flex-end;
    }
    &.align-left {
      justify-content: flex-start;
    }
    &.grow {
      justify-content: space-around;
    }
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

  &__slider {
    height: 2px;
    margin-top: 0.2rem;
    background-color: $vue-green
  }
}
</style>
