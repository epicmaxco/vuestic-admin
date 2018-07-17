<template>
  <vuestic-widget headerText="Colorful Bars">
    <div class="row">
      <div class="col-sm-4 col-12">
        {{'progressBars.basic' | translate}}
        <vuestic-progress-bar :value="100" theme="Danger"/>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.thin' | translate}}
        <vuestic-progress-bar :value="100" size="thin" theme="Info"/>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.thick' | translate}}
        <vuestic-progress-bar :value="100" size="thick" theme="Warning"/>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.basicVertical' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar :value="100" type="vertical" theme="Success"/>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.thinVertical' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar :value="100" size="thin" type="vertical" theme="Black"/>
        </div>
      </div>
      <div class="col-sm-4 col-12">
        {{'progressBars.circle' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar :value="100" type="circle"/>
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
