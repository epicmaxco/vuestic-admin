<template>
  <va-card
    class="circle-bars"
    :title="$t('progressBars.circle')"
  >
    <div class="row">
      <div v-for="n in 10" :key="n" class="flex xs4 sm2 lg1">
        <div class="d-flex justify--center">
          <div>
            <va-progress-circle :value="value * n / 10">{{ value * n / 10 }}%</va-progress-circle>
          </div>
        </div>
      </div>
      <div class="flex xs4 sm2 lg1">
        <div class="d-flex justify--center">
          <div>
            <va-progress-circle indeterminate/>
          </div>
        </div>
      </div>
    </div>
  </va-card>
</template>

<script>
export default {
  name: 'circle-bars',
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
