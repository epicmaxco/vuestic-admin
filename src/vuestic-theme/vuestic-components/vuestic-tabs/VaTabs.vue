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
             width: getBarWidth($slots.default),
             marginLeft: getMarginLeft($slots.default)
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
    }
  },
  methods: {
    setTabsWidth (slots) {
      let count = 0
      slots.forEach(vnode => {
        if (vnode.elm) {
          this.tabsWidth[count] = vnode.elm.clientWidth
          count++
        }
      })
    },
    getBarWidth (slots) {
      this.setTabsWidth(slots)
      return this.grow ? 100 / slots.length + '%' : `calc(` + this.tabsWidth[this.activeIndex] + `px - 1.25rem)`
    },
    getMarginLeft (slots) {
      this.setTabsWidth(slots)
      if (!this.grow && this.activeIndex === 0) {
        return 1.25 + 'rem'
      }
      if (!this.grow && this.activeIndex !== 0) {
        let marginLeft = 0
        for (let count = 0; count < this.activeIndex; count++) {
          marginLeft += this.tabsWidth[count]
        }
        return `calc(` + marginLeft + `px + ` + this.activeIndex + `rem + 1.2rem)`
      }
      if (this.grow && this.activeIndex !== 0) {
        return this.activeIndex * (100 / slots.length) + `%`
      }
    }
  },
  data () {
    return {
      activeIndex: 0,
      tabsWidth: []
    }
  },
  mounted () {
    let count = 0
    this.$slots.default.forEach(vnode => {
      if (vnode.elm.clientWidth) {
        this.tabsWidth[count] = vnode.elm.clientWidth
        count++
      }
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
          width: 100%;
          height: 2px;
          background-color: $vue-green;
        }
      }
    }
  }
}
</style>
