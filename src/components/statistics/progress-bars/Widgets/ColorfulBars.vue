<template>
  <vuestic-widget headerText="Colorful Bars">
    <div class="row">
      <div class="col-sm-4 col-12">
        {{'progressBars.basic' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar :color="'danger'"/>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.thin' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar size="thin" :color="'info'"/>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.thick' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar size="thick" :color="'warning'"/>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.basicVertical' | translate}}
        <div class="pb-container">
          <div>
            <vuestic-progress-bar type="vertical" :color="'success'"/>
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.thinVertical' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar size="thin" type="vertical" :color="'black'"/>
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
    name: 'standard-bars'
  }
</script>
