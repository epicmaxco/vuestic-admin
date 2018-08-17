<template>
  <div class="vuestic-accordion" @click="toggleCollapse($event)">
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
      toggleCollapse (event) {
        if (!event.target.classList.contains('collapse-content')) {
          this.$nextTick(() => {
            if (!this.expand) {
              let collapsesArray = this.$children
              // Step 1
              let accordeonActiveTabChanged = false
              for (let i = 0; i < collapsesArray.length; i++) {
                if (collapsesArray[i].show) {
                  if (collapsesArray[i] !== this.lastClickedTab) {
                    this.lastClickedTab.show = false
                    this.lastClickedTab = collapsesArray[i]
                    accordeonActiveTabChanged = true
                  } else {
                    this.lastClickedTab.show = !this.lastClickedTab.show
                  }
                } else {
                  collapsesArray[i].show = false
                }
              }
              // Step 2
              if (accordeonActiveTabChanged) {
                for (let i = 0; i < collapsesArray.length; i++) {
                  if (collapsesArray[i] !== this.lastClickedTab) {
                    collapsesArray[i].$el.lastChild.style.height = 0
                    collapsesArray[i].show = false
                  }
                }
              }
            }
          })
        }
      }
    }
  }
</script>

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
