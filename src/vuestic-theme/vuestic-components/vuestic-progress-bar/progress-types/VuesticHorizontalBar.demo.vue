<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 300px">
      <vuestic-progress-bar :value="35" size="thin"/>
      <vuestic-progress-bar :value="35" text="progress"/>
      <vuestic-progress-bar :value="75" size="thick" :animated="true"/>
    </div>
    <div class="demo-container__item" style="width: 300px">
      <vuestic-progress-bar :value="10" color="primary"/>
      <vuestic-progress-bar :value="20" color="danger"/>
      <vuestic-progress-bar :value="30" text="blue" color="info" :animated="true"/>
      <vuestic-progress-bar :value="40" color="success"/>
      <vuestic-progress-bar :value="50" color="warning"/>
      <vuestic-progress-bar :value="60" color="white" :animated="true"/>
      <vuestic-progress-bar :value="70" text="black" color="black"/>
      <vuestic-progress-bar :value="80" color="fontColor"/>
      <vuestic-progress-bar :value="190" color="transparent"/>
      <vuestic-progress-bar :value="100" color="lighterGray"/>
    </div>
  </div>
</template>

<script>

import VuesticProgressBar from './../VuesticProgressBar'

export default {
  components: {
    VuesticProgressBar,
  }
}
</script>
