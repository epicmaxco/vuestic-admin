<template>
  <va-card class="bars-state">
    <va-card-title>
      {{ t('progressBars.state') }}
    </va-card-title>
    <va-card-content class="row">
      <div class="flex md4 xs12">
        <va-progress-bar :model-value="value2">66%</va-progress-bar>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar :model-value="bufferValues.value" :buffer="bufferValues.buffer">Buffering </va-progress-bar>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar indeterminate>Loading</va-progress-bar>
      </div>
    </va-card-content>
  </va-card>
</template>

<script>
  import { useI18n } from 'vue-i18n'

  export default {
    name: 'BarsState',
    setup() {
      const { t } = useI18n()
      return { t }
    },
    data() {
      return {
        value2: 66,
        bufferValues: {
          value: 0,
          buffer: 0,
        },
      }
    },
    mounted() {
      this.animateValue()
      this.animateBufferValues()
    },
    methods: {
      animateValue() {
        setTimeout(() => {
          this.value = 100
        })
      },
      animateBufferValues() {
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
