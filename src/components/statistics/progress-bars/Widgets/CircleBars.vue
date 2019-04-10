<template>
  <va-card
    class="circle-bars progress-bar-widget"
    :title="$t('progressBars.circle')"
  >
    <div class="va-row">
      <div v-for="n in 10" :key="n" class="flex xs2 md1">
        <va-progress-circle :value="value * n / 10"/>
      </div>
      <div class="flex xs2 md1">
        <va-progress-circle indeterminate/>
      </div>
    </div>
    <div class="va-row">
      <div v-for="n in 10" :key="n" class="flex xs2 md1">
        <va-progress-circle :value="value * n / 10" theme="Info">{{ value * n / 10 }}%</va-progress-circle>
      </div>
      <div class="flex xs2 md1">
        <va-progress-circle indeterminate theme="Info"/>
      </div>
    </div>
  </va-card>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
    }
  },
  mounted () {
    this.animateValue()
  },
  methods: {
    animateValue () {
      setTimeout(() => {
        this.value = 100
      })
    },
  },
}
</script>
