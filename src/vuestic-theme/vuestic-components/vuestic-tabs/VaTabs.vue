<template>
  <div class="va-tabs">
    <div
      class="va-tabs__bar va-row"
      :class="{
       'va-tabs__bar--align-right': right,
       'va-tabs__bar--grow': grow
      }"
    >
      <div
        class="va-tabs__bar-content"
        :class="{'va-tabs__bar-content--grow': grow}"
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
             width: barWidth,
             marginLeft: this.activeIndex * (100 / $slots.default.length) + '%'
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
    value: {
      required: true
    },
    right: {
      type: Boolean
    },
    grow: {
      type: Boolean
    },
    hideSlider: {
      type: Boolean
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
    },
    barWidth () {
      return this.currentWidth + 'px'
    }
  },
  data () {
    return {
      activeIndex: 0,
      currentWidth: ''
    }
  },
  mounted () {
    this.$slots.default.forEach(vnode => {
      this.currentWidth = vnode.elm.clientWidth
    })
  }
}
</script>

<style lang="scss">
.va-tabs {
  &__bar {
    padding-top: 1rem;
    &--align-right {
      justify-content: flex-end;
    }
    &--grow {
      justify-content: space-around;
    }
    &-content {
      &--grow {
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
        margin-bottom: 2.5rem;
        transition: margin-left 0.3s;
        &.align-right {
          justify-content: flex-end;
        }
        &.grow {
          justify-content: space-around;
        }
        &-line {
          width: calc(100% - 2.5rem);
          height: 2px;
          margin-left: 1.25rem;
          background-color: $vue-green;
        }
      }
    }
  }
}
</style>
