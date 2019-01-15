<template>
  <VbDemo>
    <VbContainer title="No Value">
      <circle-bar/>
    </VbContainer>

    <VbContainer title="Default">
      <circle-bar :value="value"/>
    </VbContainer>

    <VbContainer title="Danger">
      <circle-bar :value="value" :theme="'Danger'"/>
    </VbContainer>

    <VbContainer title="Static Slot">
      <circle-bar :value="value">Static</circle-bar>
    </VbContainer>

    <VbContainer title="Dynamic Slot">
      <circle-bar :value="value">{{ value }}</circle-bar>
    </VbContainer>

    <VbContainer title="Slot Success">
      <circle-bar :value="value" :theme="'Success'">{{ value }}</circle-bar>
    </VbContainer>

    <VbContainer title="Indeterminate">
      <circle-bar :indeterminate="true"/>
    </VbContainer>

    <VbContainer title="Indeterminate Info">
      <circle-bar :theme="'Info'" :indeterminate="true"/>
    </VbContainer>

    <VbContainer title="Indeterminate Slot">
      <circle-bar :indeterminate="true">Slot</circle-bar>
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
import CircleBar from './../progress-types/CircleProgressBar'

export default {
  components: {
    CircleBar
  },
  data () {
    return {
      value: 35
    }
  }
}
</script>
