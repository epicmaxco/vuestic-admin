<template>
  <vuestic-widget class="progress-bar-widget" :headerText="$t('progressBars.circle')">
    <div class="va-row">
      <div v-for="n in 10" :key="n" class="flex xs2 md1">
        <va-circle-progress-bar :value="value * n / 10"/>
      </div>
      <div class="flex xs2 md1">
        <va-circle-progress-bar indeterminate/>
      </div>
    </div>
    <div class="va-row">
      <div v-for="n in 10" :key="n" class="flex xs2 md1">
        <va-circle-progress-bar :value="value * n / 10" theme="Info">{{ value * n / 10 }}%</va-circle-progress-bar>
      </div>
      <div class="flex xs2 md1">
        <va-circle-progress-bar indeterminate theme="Info"/>
      </div>
    </div>
  </vuestic-widget>
</template>

<script>
export default {
  data () {
    return {
      value: 0
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
    }
  }
}
</script>
