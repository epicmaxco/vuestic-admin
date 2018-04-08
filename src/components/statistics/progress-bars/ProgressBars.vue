<template>
  <div class="progress-bars">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Progress Bars">
          <div class="row">
            <div class="col-sm-4 col-12">
              {{'progressBars.basic' | translate}}
              <div class="pb-container">
                <vuestic-progress-bar ref="hBasic">
                </vuestic-progress-bar>
              </div>
            </div>
            <div class="col-sm-4 col-12">
              {{'progressBars.thin' | translate}}
              <div class="pb-container">
                <vuestic-progress-bar size="thin" ref="hThin">
                </vuestic-progress-bar>
              </div>
            </div>
            <div class="col-sm-4 col-12">
              {{'progressBars.thick' | translate}}
              <div class="pb-container">
                <vuestic-progress-bar size="thick" ref="hThick">
                </vuestic-progress-bar>
              </div>
            </div>
            <div class="col-sm-4 col-12">
              {{'progressBars.basicVertical' | translate}}
              <div class="pb-container">
                <div>
                  <vuestic-progress-bar type="vertical" ref="vBasic"></vuestic-progress-bar>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-12">
              {{'progressBars.thinVertical' | translate}}
              <div>
                <vuestic-progress-bar size="thin" type="vertical" ref="vThin">
                </vuestic-progress-bar>
              </div>
            </div>
            <div class="col-sm-4 col-12">
              {{'progressBars.circle' | translate}}
              <div>
                <vuestic-progress-bar type="circle" ref="circle"></vuestic-progress-bar>
              </div>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Colorful Bars">
          <div class="row">
            <div class="col-sm-4 col-12">
              {{'progressBars.basic' | translate}}
              <div class="pb-container">
                <vuestic-progress-bar ref="chBasic" colorName="danger">
                </vuestic-progress-bar>
              </div>
            </div>
            <div class="col-sm-4 col-12">
              {{'progressBars.thin' | translate}}
              <div class="pb-container">
                <vuestic-progress-bar size="thin" ref="chThin" colorName="info">
                </vuestic-progress-bar>
              </div>
            </div>
            <div class="col-sm-4 col-12">
              {{'progressBars.thick' | translate}}
              <div class="pb-container">
                <vuestic-progress-bar size="thick" ref="chThick" colorName="warning">
                </vuestic-progress-bar>
              </div>
            </div>
            <div class="col-sm-4 col-12">
              {{'progressBars.basicVertical' | translate}}
              <div class="pb-container">
                <div>
                  <vuestic-progress-bar type="vertical" ref="cvBasic" colorName="success"></vuestic-progress-bar>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-12">
              {{'progressBars.thinVertical' | translate}}
              <div class="pb-container">
                <vuestic-progress-bar size="thin" type="vertical" ref="cvThin" colorName="black">
                </vuestic-progress-bar>
              </div>
            </div>
            <div class="col-sm-4 col-12">
              {{'progressBars.circle' | translate}}
              <div class="pb-container">
                <vuestic-progress-bar type="circle" ref="ccircle"></vuestic-progress-bar>
              </div>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "../../../sass/mixins";

  .progress-bars {
    .vuestic-progress-bar {
      .progress.thick {
        margin-top: calc(#{$progress-bar-width-thick} / 2 - .125rem);
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
