<template>
  <VaCard class="bars-state">
    <VaCardTitle>
      {{ t('progressBars.state') }}
    </VaCardTitle>
    <VaCardContent class="my-3 grid grid-cols-12 gap-6">
      <div class="flex md:col-span-4 col-span-12">
        <VaProgressBar :model-value="value2">66%</VaProgressBar>
      </div>
      <div class="flex md:col-span-4 col-span-12">
        <VaProgressBar :buffer="bufferValues.buffer" :model-value="bufferValues.value">Buffering</VaProgressBar>
      </div>
      <div class="flex md:col-span-4 col-span-12">
        <VaProgressBar indeterminate>Loading</VaProgressBar>
      </div>
    </VaCardContent>
  </VaCard>
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
