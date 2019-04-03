<template>
  <va-card
    class="colorful-bars progress-bar-widget"
    :title="$t('progressBars.colors')"
  >
    <div class="va-row">
      <div v-for="n in 3" :key="n" class="flex md3 xs12">
        <va-progress-bar
          :value="value * n / 4"
          :theme="themes[n - 1]"
        >{{ themes[n - 1] }}
        </va-progress-bar>
      </div>
      <div class="flex md3 xs12">
        <va-progress-bar indeterminate theme="Black">Black</va-progress-bar>
      </div>
    </div>
  </va-card>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      themes: ['Danger', 'Success', 'Warning'],
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
