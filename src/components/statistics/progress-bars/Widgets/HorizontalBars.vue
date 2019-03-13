<template>
  <vuestic-widget class="horizontal-bars progress-bar-widget" :headerText="$t('progressBars.horizontal')">
    <div class="va-row">
      <div class="flex md4 xs12">
        <va-progress-bar :value="value / 3"/>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar :value="bufferValues.value" :buffer="bufferValues.buffer"/>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar indeterminate/>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md4 xs12">
        <va-progress-bar :value="value * 2 / 3" theme="Info">66%</va-progress-bar>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar
          :value="bufferValues.value"
          :buffer="bufferValues.buffer"
          theme="Info"
        >Buffering</va-progress-bar>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar indeterminate theme="Info">Loading...</va-progress-bar>
      </div>
    </div>
  </vuestic-widget>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      bufferValues: {
        value: 0,
        buffer: 0
      }
    }
  },
  mounted () {
    this.animateValue()
    this.animateBufferValues()
  },
  methods: {
    animateValue () {
      setTimeout(() => {
        this.value = 100
      })
    },
    animateBufferValues () {
      const interval = setInterval(() => {
        this.bufferValues.value += 2 + Math.floor(Math.random() * 2)
        this.bufferValues.buffer += 2 + Math.floor(Math.random() * 4)

        if (this.bufferValues.value >= 100) {
          clearInterval(interval)
        }
      }, 400)
    }
  }
}
</script>
