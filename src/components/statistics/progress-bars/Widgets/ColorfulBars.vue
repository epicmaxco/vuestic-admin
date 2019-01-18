<template>
  <vuestic-widget class="progress-bar-widget" :headerText="$t('progressBars.colors')">
    <div class="va-row">
      <div v-for="n in 3" :key="n" class="flex sm3 md3">
        <vuestic-horizontal-progress
          :value="value * n / 4"
          :theme="themes[n - 1]"
        >{{ themes[n - 1] }}</vuestic-horizontal-progress>
      </div>
      <div class="flex sm3 md3">
        <vuestic-horizontal-progress indeterminate theme="Black">Black</vuestic-horizontal-progress>
      </div>
    </div>
  </vuestic-widget>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      themes: ['Danger', 'Success', 'Warning']
    }
  },
  mounted () {
    this.animateValue()
  },
  methods: {
    animateValue () {
      setTimeout(() => (this.value = 100))
    }
  }
}
</script>
