<template>
  <va-card
    class="colorful-bars progress-bar-widget"
    :title="$t('progressBars.colors')"
  >
    <div class="row">
      <div v-for="n in 6" :key="`pb-${n}`" class="flex md4 xs12">
        <va-progress-bar
          :value="value * n / 6"
          :color="colors[n - 1]"
        >{{ colors[n - 1] }}
        </va-progress-bar>
      </div>
      <div v-for="n in 6" :key="`pc-${n}`" class="flex md2 xs6">
        <va-progress-circle
          class="ma-auto"
          :value="value * n / 6"
          :color="colors[n - 1]"
        >{{ colors[n - 1] }}
        </va-progress-circle>
      </div>
    </div>
  </va-card>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      colors: ['danger', 'success', 'info', 'gray', 'warning', 'black'],
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
