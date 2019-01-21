<template>
  <VbDemo>
    <VbContainer title="No Value">
      <VaCircleProgressBar/>
    </VbContainer>

    <VbContainer dashed no-padding>
      <VaCircleProgressBar :value="value"/>
    </VbContainer>

    <VbContainer refresh title="Default">
      <VaCircleProgressBar :value="value"/>
    </VbContainer>

    <VbContainer title="Danger">
      <VaCircleProgressBar :value="value" theme="Danger"/>
    </VbContainer>

    <VbContainer title="Static Slot">
      <VaCircleProgressBar :value="value">Static</VaCircleProgressBar>
    </VbContainer>

    <VbContainer title="Dynamic Slot">
      <VaCircleProgressBar :value="value">{{ value + '%' }}</VaCircleProgressBar>
    </VbContainer>

    <VbContainer title="Slot Success">
      <VaCircleProgressBar :value="value" theme="Success">{{ value + '%' }}</VaCircleProgressBar>
    </VbContainer>

    <VbContainer refresh title="Indeterminate">
      <VaCircleProgressBar indeterminate/>
    </VbContainer>

    <VbContainer title="Indeterminate Info">
      <VaCircleProgressBar indeterminate theme="Info"/>
    </VbContainer>

    <VbContainer title="Indeterminate Slot">
      <VaCircleProgressBar indeterminate>Slot</VaCircleProgressBar>
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
import VaCircleProgressBar from './VaCircleProgressBar'

export default {
  components: {
    VaCircleProgressBar
  },
  data () {
    return {
      value: 35
    }
  }
}
</script>
