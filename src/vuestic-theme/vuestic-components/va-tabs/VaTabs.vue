<template>
  <div class="va-tabs">
    <div class="va-tabs__wrapper">
      <div
        class="va-tabs__container"
        :class="containerClass"
      >
        <div class="va-tabs__slider-wrapper" :style="sliderStyles">
          <div class="va-tabs__slider"/>
        </div>
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>

import VaTab from './VaTab'

export default {
  name: 'va-tabs',
  components: {
    VaTab,
  },
  provide () {
    return {
      tabGroup: {
        register: this.register,
        unregister: this.unregister,
      },
    }
  },
  data () {
    return {
      tabs: [],
      tabsWidth: [],
      sliderLeft: 0,
      sliderWidth: 0,
    }
  },
  subs: {
    resizeEnd () {
      this.updateSlider()
    },
  },
  props: {
    value: { type: Number },
    right: Boolean,
    center: Boolean,
    grow: Boolean,
    hideSlider: Boolean,
  },
  mounted () {
    this.updateSlider()
  },
  watch: {
    value: 'syncStateWithValue',
    right: 'updateSlider',
    grow: 'updateSlider',
    hideSlider: 'updateSlider',
  },
  computed: {
    valueProxy: {
      set (valueProxy) {
        this.$emit('input', valueProxy)
      },
      get () {
        return this.value
      },
    },
    containerClass () {
      return {
        'va-tabs__container--grow': this.grow,
        'va-tabs__container--right': this.right,
        'va-tabs__container--center': this.center,
      }
    },
    sliderStyles () {
      return {
        left: `${this.sliderLeft}px`,
        width: `${this.sliderWidth}px`,
      }
    },
    selectedTab () {
      return this.tabs[this.value] || null
    },
  },
  methods: {
    syncStateWithValue () {
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === this.value
      })
      this.updateSlider()
    },
    register (tab) {
      const index = this.tabs.push(tab) - 1
      tab.$on('tabClick', () => this.onTabClick(tab))

      if (index === this.value) {
        tab.isActive = true
      }
    },
    unregister (tab) {
      if (this._isDestroyed) return

      this.tabs.splice(this.tabs.indexOf(tab), 1)

      this.syncStateWithValue()
    },
    onTabClick (tab) {
      const index = this.tabs.indexOf(tab)
      this.valueProxy = index
    },
    async updateSlider () {
      await this.$nextTick()

      if (this.hideSlider) {
        return
      }
      const selectedTab = this.selectedTab
      if (!selectedTab || !selectedTab.$refs.content) {
        return
      }
      const content = selectedTab.$refs.content
      this.sliderWidth = content.scrollWidth + 4
      this.sliderLeft = content.offsetLeft - 2
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-tabs {
  position: relative;

  &--right {
    display: flex;
    justify-content: flex-end;
  }

  .va-tabs__wrapper {
    overflow: auto;
    contain: content;
    display: flex;
  }

  .va-tabs__container {
    flex: 1 0 auto;
    display: flex;
    height: 2.5rem;
    list-style-type: none;
    transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1);
    white-space: nowrap;
    position: relative;

    &--grow {
      .va-tab {
        flex: 1 0 auto;
        max-width: none;
      }
    }

    &--center, &--right {
      > .va-tab:first-child {
        margin-left: auto
      }

      .va-tabs__slider-wrapper + .va-tab {
        margin-left: auto;
      }
    }

    &--center {
      > .va-tab:last-child {
        margin-right: auto;
      }
    }
  }

  .va-tabs__slider-wrapper {
    bottom: 0;
    margin: 0 !important;
    position: absolute;
    z-index: 4000;
    transition: $transition-primary;

    .va-tabs__slider {
      width: 100%;
      height: 0.125rem;
      background-color: $brand-primary;
    }
  }
}
</style>
