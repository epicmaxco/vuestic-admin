<template>
  <div class="va-tabs">
    <div
      class="va-tabs__bar"
      :class="{
       'align-right': right,
       'grow': grow
      }"
    >
      <div
        class="va-tabs__bar-content"
        :class="{'grow': grow}"
        :style="{'background-color': color}"
      >
        <div
          class="va-tabs__bar-content-items"
          :class="{'grow': grow}"
        >
          <slot/>
        </div>
        <div v-if="!hideSlider" class="va-tabs__bar-content-slider">
          <div
            class="va-tabs__bar-content-slider-line"
            :style="{
              'width': 100/items.length + '%',
              'margin-left': activeIndex * (100/items.length) + '%'
            }"
          />
        </div>
      </div>
    </div>
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
    &-content {
      &.grow {
        width: 100%;
      }
      &-items {
        display: flex;
        &.grow {
          justify-content: space-around;
        }
      }
      &-slider {
        display: flex;
        width: 100%;
        &.align-right {
          justify-content: flex-end;
        }
        &.grow {
          justify-content: space-around;
        }
        &-line {
          height: 2px;
          background-color: $vue-green;
          transition: margin-left 0.3s;
        }
      }
    }
  }
}
</style>
