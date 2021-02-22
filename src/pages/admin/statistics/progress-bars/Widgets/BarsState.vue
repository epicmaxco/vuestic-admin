<template>
  <va-card
    class="bars-state"
    :title="$t('progressBars.state')"
  >
    <div class="row">
      <div class="flex md4 xs12">
        <va-progress-bar :value="value2">66%</va-progress-bar>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar
          :value="bufferValues.value"
          :buffer="bufferValues.buffer"
        >Buffering
        </va-progress-bar>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar indeterminate>Loading</va-progress-bar>
      </div>
    </div>
  </va-card>
</template>

<script>
export default {
  name: 'bars-state',
  data () {
    return {
      value2: 66,
      bufferValues: {
        value: 0,
        buffer: 0,
      },
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
    },
  },
}
</script>
