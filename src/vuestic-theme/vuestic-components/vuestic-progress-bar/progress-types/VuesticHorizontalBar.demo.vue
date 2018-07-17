<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 300px">
      <horizontal-bar :value="35" size="thin"/>
      <horizontal-bar :value="55" text="progress"/>
      <horizontal-bar :value="75" size="thick" :animated="true"/>
    </div>
    <div class="demo-container__item" style="width: 300px">
      <horizontal-bar :value="10" color="primary"/>
      <horizontal-bar :value="20" color="danger"/>
      <horizontal-bar :value="40" color="success" :animated="true"/>
      <horizontal-bar :value="50" color="warning"/>
      <horizontal-bar :value="60" color="white"/>
      <horizontal-bar :value="70" text="black" color="black"/>
      <horizontal-bar :value="80" size="basic" color="info"/>
      <horizontal-bar :value="90" color="transparent"/>
      <horizontal-bar :value="100" color="lighterGray"/>
    </div>
  </div>
</template>

<script>

import HorizontalBar from './../progress-types/HorizontalProgressBar'

export default {
  components: {
    HorizontalBar,
  }
}
</script>
