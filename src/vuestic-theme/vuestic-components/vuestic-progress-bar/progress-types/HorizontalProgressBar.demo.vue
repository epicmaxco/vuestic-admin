<template>
  <VbDemo>
    <VbContainer style="width: 400px">
      <div>
        <span>No value</span>
        <horizontal-progress-bar/>
        <span>Default</span>
        <horizontal-progress-bar :value="value"/>
        <span>Danger</span>
        <horizontal-progress-bar :value="value" theme="Danger"/>
        <span>Static slot</span>
        <horizontal-progress-bar :value="value">Slot</horizontal-progress-bar>
        <span>Dynamic slot</span>
        <horizontal-progress-bar :value="value">{{ value + '%' }}</horizontal-progress-bar>
        <span>Slot Success</span>
        <horizontal-progress-bar :value="value" theme="Success">{{ value + '%' }}</horizontal-progress-bar>
        <span>Buffer</span>
        <horizontal-progress-bar :value="value" :buffer="value * 1.5"/>
        <span>Indeterminate</span>
        <horizontal-progress-bar indeterminate/>
        <span>Indeterminate Info</span>
        <horizontal-progress-bar indeterminate theme="Info"/>
        <span>Indeterminate Slot</span>
        <horizontal-progress-bar indeterminate>Slot</horizontal-progress-bar>
        <span>Indeterminate with :value and :buffer</span>
        <horizontal-progress-bar :value="value" :buffer="value * 1.5" indeterminate/>
      </div>
    </VbContainer>
    <VbContainer>
      <button @click="value -= 100">-100</button>
      <button @click="value -= 10">-10</button>
      {{ value }}
      <button @click="value += 10">+10</button>
      <button @click="value += 100">+100</button>
    </VbContainer>
  </VbDemo>
</template>

<script>
import HorizontalProressBar from './HorizontalProgressBar.vue'

export default {
  components: {
    'horizontal-progress-bar': HorizontalProressBar
  },
  data () {
    return {
      value: 35
    }
  }
}
</script>
