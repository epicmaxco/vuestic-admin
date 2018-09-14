<template>
  <div class="vuestic-accordion" @click="toggleAccordion($event)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vuestic-accordion',
  props: {
    expand: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      lastClickedTab: {}
    }
  },
  methods: {
    toggleAccordion (event) {
      if (event.target.classList.contains('collapse-content')) {
        return
      }
      this.$nextTick(() => {
        if (this.expand) {
          return
        }
        const collapsesArray = this.$children
        // HACK Accordion behaviour
        //
        // 1. Check, if last clicked tab is changed or not
        // 2. If last clicked tab isn't changed, toggle state of opened tab into opposite
        // 3. If last clicked tab is changed, collapse previous clicked tab and all tabs,
        // except of recently clicked tab
        let accordionActiveTabChanged = false
        for (let i = 0; i < collapsesArray.length; i++) {
          if (collapsesArray[i].show) {
            if (collapsesArray[i] !== this.lastClickedTab) {
              this.lastClickedTab.show = false
              this.lastClickedTab = collapsesArray[i]
              accordionActiveTabChanged = true
            } else {
              this.lastClickedTab.show = !this.lastClickedTab.show
            }
          } else {
            collapsesArray[i].show = false
          }
        }
        if (accordionActiveTabChanged) {
          for (let i = 0; i < collapsesArray.length; i++) {
            if (collapsesArray[i] !== this.lastClickedTab) {
              collapsesArray[i].$el.lastChild.style.height = 0
              collapsesArray[i].show = false
            }
          }
        }
      })
    }
  }
}
</script>

// HACK Accordion for presentation page
<style lang="scss">
  .vuestic-accordion {
    .btn {
      width: 100%;
      padding-left: 10px;
      border-radius: 0;
      text-align: left;
    }

    .vuestic-collapse__body {
      margin-top: 0;
    }
  }
</style>
