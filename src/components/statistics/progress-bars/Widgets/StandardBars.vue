<template>
  <vuestic-widget headerText="Progress Bars">
    <div class="va-row">
      <div class="flex sm4 md4">
        {{'progressBars.basic' | translate}}
        <vuestic-progress-bar :value="100" :animated="true"/>
      </div>
      <div class="flex sm4 md4">
        {{'progressBars.thin' | translate}}
        <vuestic-progress-bar :value="100" size="thin" :animated="true"/>
      </div>
      <div class="flex sm4 md4">
        {{'progressBars.thick' | translate}}
        <vuestic-progress-bar :value="100" size="thick" :animated="true"/>
      </div>
    </div>
    <div class="va-row">
      <div class="flex sm4 md4">
        {{'progressBars.basicVertical' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar :value="100" type="vertical" :animated="true"/>
        </div>
      </div>
      <div class="flex sm4 md4">
        {{'progressBars.thinVertical' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar :value="100" size="thin" type="vertical"
                                :animated="true"/>
        </div>
      </div>
      <div class="flex sm4 md4">
        {{'progressBars.circle' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar :value="100" type="circle" :animated="true"/>
        </div>
      </div>
    </div>
  </vuestic-widget>
</template>

<script>
export default {
  name: 'standard-bars',
}
</script>

<style lang="scss">
.pb-container {
  margin-top: 1.25rem;
  margin-left: .125rem;
}
</style>
