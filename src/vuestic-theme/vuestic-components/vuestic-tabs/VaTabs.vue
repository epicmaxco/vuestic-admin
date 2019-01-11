<template>
  <div class="va-tabs">
    <div
      class="va-tabs__bar"
      :class="{
      'align-right': right,
      'grow': grow
      }"
      :style="{'background-color': color}"
    >
      <slot/>
    </div>
    <div
      class="va-tabs__slider"
      :style="{
        'width': 100/items.length + '%',
        'margin-left': activeIndex * (100/items.length) + '%'
      }"
    />
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
  },
  data () {
    return {
      items: this.$slots.default,
      mouseover: {
        itemKey: null,
        isOn: false
      },
      activeIndex: 0
    }
  }
}
</script>

<style lang="scss">
.va-tabs {
  &__bar {
    display: flex;
    padding-top: 1rem;
    &.align-right {
      justify-content: flex-end;
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
  }
  &__slider {
    height: 2px;
    background-color: $vue-green;
    transition: margin-left 0.3s;
  }
}
</style>
