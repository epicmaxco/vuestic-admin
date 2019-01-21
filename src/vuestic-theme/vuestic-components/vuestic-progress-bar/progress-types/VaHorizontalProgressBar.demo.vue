<template>
  <VbDemo>
    <VbContainer refresh width="400px">
      <span>No value</span>
      <VaHorizontalProgressBar/>
      <span>Default</span>
      <VaHorizontalProgressBar :value="value"/>
      <span>Danger</span>
      <VaHorizontalProgressBar :value="value" theme="Danger"/>
      <span>Static slot</span>
      <VaHorizontalProgressBar :value="value">Slot</VaHorizontalProgressBar>
      <span>Dynamic slot</span>
      <VaHorizontalProgressBar :value="value">{{ value + '%' }}</VaHorizontalProgressBar>
      <span>Slot Success</span>
      <VaHorizontalProgressBar :value="value" theme="Success">{{ value + '%' }}</VaHorizontalProgressBar>
      <span>Buffer</span>
      <VaHorizontalProgressBar :value="value" :buffer="bufferValue"/>
      <span>Indeterminate</span>
      <VaHorizontalProgressBar indeterminate/>
      <span>Indeterminate Info</span>
      <VaHorizontalProgressBar indeterminate theme="Info"/>
      <span>Indeterminate Slot</span>
      <VaHorizontalProgressBar indeterminate>Slot</VaHorizontalProgressBar>
      <span>Indeterminate with :value and :buffer should behave the same</span>
      <VaHorizontalProgressBar :value="value" :buffer="bufferValue" indeterminate/>
    </VbContainer>
    <VbContainer title="Value">
      <button @click="value -= 100">-100</button>
      <button @click="value -= 10">-10</button>
      {{ value }}
      <button @click="value += 10">+10</button>
      <button @click="value += 100">+100</button>
    </VbContainer>
    <VbContainer title="Buffer value">
      <button @click="bufferValue -= 100">-100</button>
      <button @click="bufferValue -= 10">-10</button>
      {{ bufferValue }}
      <button @click="bufferValue += 10">+10</button>
      <button @click="bufferValue += 100">+100</button>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaHorizontalProgressBar from './VaHorizontalProgressBar.vue'

export default {
  components: {
    VaHorizontalProgressBar
  },
  data () {
    return {
      bufferValue: 45,
      value: 35,
    }
  }
}
</script>
