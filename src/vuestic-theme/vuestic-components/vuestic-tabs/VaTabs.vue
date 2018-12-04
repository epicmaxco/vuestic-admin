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
      <div
        v-for="item in this.$slots.default"
        :key="item.value"
        class="va-tabs__bar-item"
        @mouseover="setMouseover(item, true)"
        @mouseleave="setMouseover(item, false)"
        :class="{
          'active': getItemValue(item) === valueProxy,
          'mouseover': isMouseover(item)
        }"
        @click="valueProxy = getItemValue(item)"
      >
        {{ getItemValue(item) }}
        <div
          class="va-tabs__slider"
          :class="{
            'active': getItemValue(item) === valueProxy && !hideSlider
          }"
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
      }
    }
  },
  methods: {
    setMouseover (item, value) {
      this.mouseover.itemKey = item
      this.mouseover.isOn = value
    },
    isMouseover (item) {
      return this.mouseover.itemKey === item &&
        this.mouseover.isOn === true
    },
    getItemValue (item) {
      return item.componentOptions.propsData.value
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
    &.grow {
      justify-content: space-around;
    }
  }

  &__bar-item {
    margin-right: 2.4rem;
    font-size: $font-size-root;
    cursor: pointer;
    opacity: 0.4;
    &.active, &.mouseover {
      opacity: 1;
      font-weight: $font-weight-bold;
    }
  }

  &__slider {
    height: 2px;
    margin-top: 0.2rem;
    opacity: 0;
    &.active {
      opacity: 1;
      transition: background-color 1s;
      background-color: $vue-green
    }
  }
}
</style>
