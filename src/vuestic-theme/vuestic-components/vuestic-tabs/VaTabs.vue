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
        <div
          v-if="!hideSlider"
          class="va-tabs__bar-content-slider"
          :style="{
            'width': 100/$slots.default.length  + '%' ,
            'margin-left': this.activeIndex * (100 / this.$slots.default.length) + '%'
          }"
        >
          <div class="va-tabs__bar-content-slider-line"/>
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
        margin-bottom: 40px;
        transition: margin-left 0.3s;
        &.align-right {
          justify-content: flex-end;
        }
        &.grow {
          justify-content: space-around;
        }
        &-line {
          width: calc(100% - 40px);
          height: 2px;
          margin-left: 20px;
          background-color: $vue-green;
        }
      }
    }
  }
}
</style>
