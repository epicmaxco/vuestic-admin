<template>
  <div class="progress-bars">
    <div class="row">
      <vuestic-widget class="col-12" headerText="Progress Bars">
        <div class="row">
          <div class="col-sm-4 col-12">
            Basic
            <div class="pb-container">
              <vuestic-progress-bar ref="hBasic">
              </vuestic-progress-bar>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            Thin
            <div class="pb-container">
              <vuestic-progress-bar size="thin" ref="hThin">
              </vuestic-progress-bar>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            Thick
            <div class="pb-container">
              <vuestic-progress-bar size="thick" ref="hThick">
              </vuestic-progress-bar>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            Basic Vertical
            <div class="pb-container">
              <div>
                <vuestic-progress-bar type="vertical" ref="vBasic"></vuestic-progress-bar>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            Thin Vertical
            <div>
              <vuestic-progress-bar size="thin" type="vertical" ref="vThin">
              </vuestic-progress-bar>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            Circle
            <div>
              <vuestic-progress-bar type="circle" ref="circle"></vuestic-progress-bar>
            </div>
          </div>
        </div>
      </vuestic-widget>
      <vuestic-widget class="col-12" headerText="Colorful Bars">
        <div class="row">
          <div class="col-sm-4 col-12">
            Basic
            <div class="pb-container">
              <vuestic-progress-bar ref="chBasic" colorName="danger">
              </vuestic-progress-bar>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            Thin
            <div class="pb-container">
              <vuestic-progress-bar size="thin" ref="chThin" colorName="info">
              </vuestic-progress-bar>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            Thick
            <div class="pb-container">
              <vuestic-progress-bar size="thick" ref="chThick" colorName="warning">
              </vuestic-progress-bar>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            Basic Vertical
            <div class="pb-container">
              <div>
                <vuestic-progress-bar type="vertical" ref="cvBasic" colorName="success"></vuestic-progress-bar>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            Thin Vertical
            <div class="pb-container">
              <vuestic-progress-bar size="thin" type="vertical" ref="cvThin" colorName="black">
              </vuestic-progress-bar>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            Circle
            <div class="pb-container">
              <vuestic-progress-bar type="circle" ref="ccircle"></vuestic-progress-bar>
            </div>
          </div>
        </div>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  import VuesticWidget from '../../vuestic-components/vuestic-widget/VuesticWidget.vue'

  export default {
    components: {VuesticWidget},
    name: 'progress-bars',
    mounted () {
      let delay = 0
      for (let ref in this.$refs) {
        this.$refs[ref].$data.valueAnimationInterval = this.valueAnimationInterval
        let timeout = setTimeout(() => {
          if (!this.$refs[ref]) {
            clearTimeout(timeout)
            return
          }
          this.$refs[ref].$data.value = 100
        }, delay)
        delay += this.valueAnimationInterval
      }
    },
    data () {
      return {
        valueAnimationInterval: 3000
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";
  @import "../../../../node_modules/bootstrap/scss/variables";
  @import "../../../sass/mixins";

  .progress-bars {
    div[class^='col'] {
      margin-bottom: 3.75rem;
    }

    .vuestic-progress-bar {
      .progress.thick {
        margin-top: calc(#{$progress-bar-width-thick}/2 - .125rem);
      }
      .progress.thin {
        margin-top: .125rem;
      }
    }

    .vertical, .circle {
      margin-top: 1.25rem;
      margin-left: .125rem;
    }
  }
</style>

