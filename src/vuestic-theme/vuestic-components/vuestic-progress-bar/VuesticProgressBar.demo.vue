<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 300px">
      <vuestic-progress-bar :value="55" size="thin"/>
      <vuestic-progress-bar :value="55"/>
      <vuestic-progress-bar :value="55" size="thick"/>
    </div>
    <div class="demo-container__item" style="width: 300px">
      <vuestic-progress-bar :value="55" type="vertical" size="thin"/>
      <vuestic-progress-bar :value="55" type="vertical"/>
      <vuestic-progress-bar :value="55" type="vertical" size="thick"/>
    </div>
    <div class="demo-container__item" style="width: 300px">
      <vuestic-progress-bar :value="90" color="primary"/>
      <vuestic-progress-bar :value="90" color="danger"/>
      <vuestic-progress-bar :value="90" color="info"/>
      <vuestic-progress-bar :value="90" color="success"/>
      <vuestic-progress-bar :value="90" color="warning"/>
      <vuestic-progress-bar :value="90" color="white"/>
      <vuestic-progress-bar :value="90" color="black"/>
      <vuestic-progress-bar :value="90" color="fontColor"/>
      <vuestic-progress-bar :value="90" color="transparent"/>
      <vuestic-progress-bar :value="90" color="lighterGray"/>
    </div>
    <div class="demo-container__item" style="width: 300px;">
      <vuestic-progress-bar
        :value="15"
        type="circle"
        color="warning"
        background-color="white"
      />
    </div>
  </div>
</template>

<script>

import VuesticProgressBar from './VuesticProgressBar'

export default {
  components: {
    VuesticProgressBar,
  },
}
</script>
