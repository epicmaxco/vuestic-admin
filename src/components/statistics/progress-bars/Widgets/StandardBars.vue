<template>
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
            <vuestic-progress-bar type="vertical"
                                  ref="vBasic"></vuestic-progress-bar>
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
          <vuestic-progress-bar type="circle"
                                ref="circle"></vuestic-progress-bar>
        </div>
      </div>
    </div>
  </vuestic-widget>
</template>

<script>
  export default {
    name: 'standard-bars',
    data () {
      return {
        valueAnimationInterval: 3000
      }
    },
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
  }
</script>
