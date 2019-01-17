<template>
  <vuestic-widget class="progress-bar-widget" :headerText="$t('progressBars.horizontal')">
    <div class="va-row">
      <div class="flex sm4 md4">
        <vuestic-horizontal-progress :value="value / 3"/>
      </div>
      <div class="flex sm4 md4">
        <vuestic-horizontal-progress :value="bufferValues.value" :buffer="bufferValues.buffer"/>
      </div>
      <div class="flex sm4 md4">
        <vuestic-horizontal-progress :indeterminate="true"/>
      </div>
    </div>
    <div class="va-row">
      <div class="flex sm4 md4">
        <vuestic-horizontal-progress :value="value * 2 / 3" :theme="'Info'">66%</vuestic-horizontal-progress>
      </div>
      <div class="flex sm4 md4">
        <vuestic-horizontal-progress
          :value="bufferValues.value"
          :buffer="bufferValues.buffer"
          :theme="'Info'"
        >Buffering</vuestic-horizontal-progress>
      </div>
      <div class="flex sm4 md4">
        <vuestic-horizontal-progress :indeterminate="true" :theme="'Info'">Loading...</vuestic-horizontal-progress>
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
