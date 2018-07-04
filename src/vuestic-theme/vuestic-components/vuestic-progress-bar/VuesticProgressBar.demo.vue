<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 300px">
      <vuestic-progress-bar :value="55" size="thin"/>
      <vuestic-progress-bar :value="35" text="progress"/>
      <vuestic-progress-bar :value="75" size="thick"/>
    </div>
    <div class="demo-container__item" style="width: 300px">
      <vuestic-progress-bar :value="55" type="vertical" size="thin"/>
      <vuestic-progress-bar :value="55" text="second" type="vertical"/>
      <vuestic-progress-bar :value="55" type="vertical" size="thick"/>
    </div>
    <div class="demo-container__item" style="width: 300px">
      <vuestic-progress-bar :value="10" color="primary"/>
      <vuestic-progress-bar :value="20" color="danger"/>
      <vuestic-progress-bar :value="230" text="blue" color="info"/>
      <vuestic-progress-bar :value="40" color="success"/>
      <vuestic-progress-bar :value="50" color="warning"/>
      <vuestic-progress-bar :value="60" color="white"/>
      <vuestic-progress-bar :value="70" text="black" color="black"/>
      <vuestic-progress-bar :value="80" color="fontColor"/>
      <vuestic-progress-bar :value="90" color="transparent"/>
      <vuestic-progress-bar :value="100" color="lighterGray"/>
    </div>
    <div class="demo-container__item" style="width: 300px;">
      <vuestic-progress-bar
        :value="15"
        type="circle"
        color="warning"
        background-color="white"
      />
      <vuestic-progress-bar
        :value="55"
        text="circle"
        type="circle"
        color="info"
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
