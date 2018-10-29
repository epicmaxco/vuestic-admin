<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 300px">
      <horizontal-bar :value="10" theme="Primary"/>
      <horizontal-bar :value="20" size="thin" theme="Danger"/>
      <horizontal-bar :value="40" theme="Success" :animated="true"/>
      <horizontal-bar :value="50" size="thick" theme="Warning"/>
      <horizontal-bar :value="60" theme="Info"/>
      <horizontal-bar :value="70" size="thick" theme="Primary" text="black"/>
      <horizontal-bar :value="80" theme="Success" size="basic"/>
      <horizontal-bar :value="90" size="thin" theme="Info"/>
      <horizontal-bar :value="100" theme="Danger"/>
    </div>
  </div>
</template>

<script>

import HorizontalBar from './../progress-types/HorizontalProgressBar'

export default {
  components: {
    HorizontalBar,
  },
}
</script>
