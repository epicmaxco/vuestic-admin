<template>
  <VbDemo>
    <VbContainer title="Default">
      <circle-bar :value="value"/>
    </VbContainer>

    <VbContainer title="No value">
      <circle-bar/>
    </VbContainer>

    <VbContainer title="Disabled">
      <circle-bar
        :value="value"
        disabled
      />
    </VbContainer>

    <VbContainer title="Start animated" refresh>
      <circle-bar
        :value="value"
        start-animated
      />
    </VbContainer>

    <VbContainer title="No animation">
      <circle-bar
        :value="value"
        no-animation
      />
    </VbContainer>

    <VbContainer title="With text">
      <circle-bar
        :value="value"
        text="some long text text text text"
      />
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
    CircleBar,
  },
  data () {
    return {
      value: 35
    }
  },
}
</script>
