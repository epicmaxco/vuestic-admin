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
      return this.grow ? 100 / slots.length + '%' : `calc(` + this.tabsWidth[this.value] + `px - 1.25rem)`
    },
    getMarginLeft (slots) {
      this.setTabsWidth(slots)
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
      if (this.grow && this.value !== 0) {
        return this.value * (100 / slots.length) + `%`
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
      margin-bottom: 2.5rem;
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
