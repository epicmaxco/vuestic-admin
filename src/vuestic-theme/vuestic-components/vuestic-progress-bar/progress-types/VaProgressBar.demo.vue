<template>
  <VbDemo>
    <VbContainer refresh width="400px">
      <span>No value</span>
      <VaProgressBar/>
      <span>Default</span>
      <VaProgressBar :value="value"/>
      <span>Danger</span>
      <VaProgressBar :value="value" theme="Danger"/>
      <span>Static slot</span>
      <VaProgressBar :value="value">Slot</VaProgressBar>
      <span>Dynamic slot</span>
      <VaProgressBar :value="value">{{ value + '%' }}</VaProgressBar>
      <span>Slot Success</span>
      <VaProgressBar :value="value" theme="Success">{{ value + '%' }}</VaProgressBar>
      <span>Buffer</span>
      <VaProgressBar :value="value" :buffer="bufferValue"/>
      <span>Indeterminate</span>
      <VaProgressBar indeterminate/>
      <span>Indeterminate Info</span>
      <VaProgressBar indeterminate theme="Info"/>
      <span>Indeterminate Slot</span>
      <VaProgressBar indeterminate>Slot</VaProgressBar>
      <span>Indeterminate with :value and :buffer should behave the same</span>
      <VaProgressBar :value="value" :buffer="bufferValue" indeterminate/>
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
import VaProgressBar from './VaProgressBar.vue'

export default {
  components: {
    VaProgressBar
  },
  data () {
    return {
      bufferValue: 45,
      value: 35,
    }
  }
}
</script>
