<template>
  <vuestic-widget headerText="Colorful Bars">
    <div class="row">
      <div class="col-sm-4 col-12">
        {{'progressBars.basic' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar ref="chBasic" colorName="danger"/>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.thin' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar size="thin" ref="chThin" colorName="info"/>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.thick' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar size="thick" ref="chThick" colorName="warning"/>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.basicVertical' | translate}}
        <div class="pb-container">
          <div>
            <vuestic-progress-bar type="vertical" ref="cvBasic"
                                  colorName="success"/>
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.thinVertical' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar size="thin" type="vertical" ref="cvThin"
                                colorName="black"/>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.circle' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar type="circle" ref="ccircle"/>
        </div>
      </div>
    </div>
  </vuestic-widget>
</template>

<script>
  export default {
    name: 'standard-bars',
    mounted () {
      for (let ref in this.$refs) {
        this.$refs[ref].value = 100
      }
    },
  }
</script>
