<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <circle-bar/>
      <circle-bar
        :value="value"
      />
    </div>

    <div class="demo-container__item">
      Disabled
      <circle-bar
        :value="value"
        disabled
      />
    </div>

    <div class="demo-container__item">
      Start animated
      <circle-bar
        :value="value"
        start-animated
      />
    </div>

    <div class="demo-container__item">
      No animation
      <circle-bar
        :value="value"
        no-animation
      />
    </div>

    <div class="demo-container__item">
      <circle-bar
        :value="value"
        text="some long text"
        background-theme="White"
        start-animated
      />
    </div>

    <div class="demo-container__item">
      {{ value }}
      <button @click="value -= 10">-10</button>
      <button @click="value += 10">+10</button>
      <button @click="value -= 100">-100</button>
      <button @click="value += 100">+100</button>
    </div>
  </div>
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
