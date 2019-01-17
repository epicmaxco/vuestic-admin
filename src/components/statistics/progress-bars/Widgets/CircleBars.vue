<template>
  <vuestic-widget class="progress-bar-widget" :headerText="$t('progressBars.circle')">
    <div class="va-row">
      <div v-for="n in 10" :key="n" class="flex sm1 md1">
        <vuestic-circle-progress :value="value * n / 10"/>
      </div>
      <div class="flex sm1 md1">
        <vuestic-circle-progress :indeterminate="true"/>
      </div>
    </div>
    <div class="va-row">
      <div v-for="n in 10" :key="n" class="flex sm1 md1">
        <vuestic-circle-progress :value="value * n / 10" :theme="'Info'">{{ value * n / 10 }}%</vuestic-circle-progress>
      </div>
      <div class="flex sm1 md1">
        <vuestic-circle-progress :indeterminate="true" :theme="'Info'"/>
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
      let vm = this
      setTimeout(() => {
        vm.value = 100
      })
    }
  }
}
</script>
