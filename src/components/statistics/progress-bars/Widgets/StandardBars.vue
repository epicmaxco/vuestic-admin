<template>
  <vuestic-widget headerText="Progress Bars">
    <div class="row">
      <div class="col-sm-4 col-12">
        {{'progressBars.basic' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar/>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.thin' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar size="thin"/>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.thick' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar size="thick"/>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.basicVertical' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar type="vertical"/>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.thinVertical' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar size="thin" type="vertical"/>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.circle' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar type="circle"/>
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
    }
  }
</script>
