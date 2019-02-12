<template>
  <VbDemo>
    <VbContainer title="No Value">
      <VaProgressCircle/>
    </VbContainer>

    <VbContainer dashed no-padding>
      <VaProgressCircle :value="value"/>
    </VbContainer>

    <VbContainer refresh title="Default">
      <VaProgressCircle :value="value"/>
    </VbContainer>

    <VbContainer title="Danger">
      <VaProgressCircle :value="value" theme="Danger"/>
    </VbContainer>

    <VbContainer title="Static Slot">
      <VaProgressCircle :value="value">Static</VaProgressCircle>
    </VbContainer>

    <VbContainer title="Dynamic Slot">
      <VaProgressCircle :value="value">{{ value + '%' }}</VaProgressCircle>
    </VbContainer>

    <VbContainer title="Slot Success">
      <VaProgressCircle :value="value" theme="Success">{{ value + '%' }}</VaProgressCircle>
    </VbContainer>

    <VbContainer refresh title="Indeterminate">
      <VaProgressCircle indeterminate/>
    </VbContainer>

    <VbContainer title="Indeterminate Info">
      <VaProgressCircle indeterminate theme="Info"/>
    </VbContainer>

    <VbContainer title="Indeterminate Slot">
      <VaProgressCircle indeterminate>Slot</VaProgressCircle>
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
import VaProgressCircle from './VaProgressCircle'

export default {
  components: {
    VaProgressCircle
  },
  data () {
    return {
      value: 35
    }
  }
}
</script>
