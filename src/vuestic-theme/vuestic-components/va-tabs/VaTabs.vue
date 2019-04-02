<template>
  <div
    class="va-tabs"
    :class="{'va-tabs--align-right': right}"
  >
    <div class="va-tabs__bar-content">
      <div class="va-tabs__bar-content-items">
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
      slots.forEach((vnode, index) => {
        if (vnode.elm) {
          this.tabsWidth[index] = vnode.elm.clientWidth
        }
      })
    },
    getBarWidth (slots) {
      this.setTabsWidth(slots)
      if (this.grow && this.tabsWidth[this.value]) {
        return this.tabsWidth[this.value] + `px`
      }
      return this.grow ? 100 / slots.length + '%' : `calc(` + this.tabsWidth[this.value] + `px - 1.25rem)`
    },
    getMarginLeft (slots) {
      this.setTabsWidth(slots)
      let sum = 0
      if (!this.grow && this.value === 0) {
        return 1.25 + 'rem'
      }
      if (!this.grow && this.value !== 0) {
        let marginLeft = 0
        for (let count = 0; count < this.value; count++) {
          marginLeft += this.tabsWidth[count]
        }
        return `calc(` + marginLeft + `px + ` + this.value + `rem + 1.2rem)`
      }
      if (this.grow) {
        this.tabsWidth.forEach((item, index) => {
          if (index < this.value) {
            sum += item
          }
        })
        return `calc(` + sum + `px + ` + (0.5 + this.value) + `rem)`
      }
      if (this.tabsWidth !== this.$slots.default && this.tabsWidth.length > 0) {
        this.setTabsWidth(this.$slots.default)
      }
    },
    selectTab (tabToSelect) {
      this.$slots.default.forEach((tabSlot, index) => {
        if (tabSlot.componentInstance === tabToSelect) {
          this.valueProxy = index
        }
      })
    },
    tabSelected (tabToCompare) {
      if (this.tabsWidth !== this.$slots.default && this.tabsWidth.length > 0) {
        this.setTabsWidth(this.$slots.default)
      }
      return this.$slots.default.some((tabSlot, index) => {
        if (tabSlot.componentInstance === tabToCompare) {
          return index === this.value
        }
      })
    }
  },
  data () {
    return {
      tabsWidth: []
    }
  },
  mounted () {
    let count = 0
    this.$slots.default.forEach(vnode => {
      if (vnode.elm) {
        this.tabsWidth[count] = vnode.elm.clientWidth
        count++
      }
    })
  }
}
</script>

<style lang="scss">
.va-tabs {
  &--align-right {
    display: flex;
    justify-content: flex-end;
  }
  &__bar {
    padding-top: 1rem;
    &-content {
      height: 4rem;
      overflow: auto;
      margin-bottom: 2.5rem;
      &-items {
        display: flex;
        &.grow {
          justify-content: space-around;
        }
      }
      &-slider {
        display: flex;
        transition: margin-left 0.3s;
        &.align-right {
          justify-content: flex-end;
        }
        &.grow {
          justify-content: space-around;
        }
        &-line {
          width: 100%;
          height: 0.125rem;
          background-color: $vue-green;
        }
      }
    }
  }
}
</style>
