<template>
  <VbDemo>
    <VbCard title="No Value">
      <VaProgressCircle/>
    </VbCard>

    <VbCard dashed no-padding>
      <VaProgressCircle :value="value"/>
    </VbCard>

    <VbCard refresh title="Default">
      <VaProgressCircle :value="value"/>
    </VbCard>

    <VbCard title="Danger">
      <VaProgressCircle :value="value" color="danger"/>
    </VbCard>

    <VbCard title="Static Slot">
      <VaProgressCircle :value="value">Static</VaProgressCircle>
    </VbCard>

    <VbCard title="Dynamic Slot">
      <VaProgressCircle :value="value">{{ value + '%' }}</VaProgressCircle>
    </VbCard>

    <VbCard title="Slot Success">
      <VaProgressCircle :value="value" color="success">{{ value + '%' }}</VaProgressCircle>
    </VbCard>

    <VbCard refresh title="Indeterminate">
      <VaProgressCircle indeterminate/>
    </VbCard>

    <VbCard title="Indeterminate Info">
      <VaProgressCircle indeterminate color="info"/>
    </VbCard>

    <VbCard title="Indeterminate Slot">
      <VaProgressCircle indeterminate>Slot</VaProgressCircle>
    </VbCard>

    <VbCard>
      <button @click="value -= 100">-100</button>
      <button @click="value -= 10">-10</button>
      {{ value }}
      <button @click="value += 10">+10</button>
      <button @click="value += 100">+100</button>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaProgressCircle from './VaProgressCircle'

export default {
  components: {
    VaProgressCircle,
  },
  data () {
    return {
      value: 35,
    }
  },
}
</script>
