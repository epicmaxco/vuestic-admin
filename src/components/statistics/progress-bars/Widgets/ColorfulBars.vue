<template>
  <va-card
    class="colorful-bars progress-bar-widget"
    :title="$t('progressBars.ColorThemePlugin.js')"
  >
    <div class="row">
      <div v-for="n in 3" :key="n" class="flex md3 xs12">
        <va-progress-bar
          :value="value * n / 4"
          :color="colors[n - 1]"
        >{{ colors[n - 1] }}
        </va-progress-bar>
      </div>
      <div class="flex md3 xs12">
        <va-progress-bar indeterminate color="black">Black</va-progress-bar>
      </div>
    </div>
  </va-card>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      colors: ['danger', 'success', 'warning'],
    }
  },
  mounted () {
    this.animateValue()
  },
  methods: {
    animateValue () {
      setTimeout(() => (this.value = 100))
    },
  },
}
</script>
