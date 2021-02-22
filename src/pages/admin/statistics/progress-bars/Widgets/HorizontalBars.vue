<template>
  <va-card
    class="horizontal-bars"
    :title="$t('progressBars.horizontal')"
  >
    <div class="row">
      <div class="flex md4 xs12">
        <va-progress-bar :value="value / 3"/>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar :value="value2"/>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar :value="value3"/>
      </div>
    </div>
  </va-card>
</template>

<script>
export default {
  name: 'horizontal-bars',
  data () {
    return {
      value: 0,
      value2: 66,
      value3: 100,
    }
  },
}
</script>
