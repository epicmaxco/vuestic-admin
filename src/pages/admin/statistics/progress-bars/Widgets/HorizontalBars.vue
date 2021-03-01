<template>
  <va-card
    class="horizontal-bars"
    :title="$t('progressBars.horizontal')"
  >
    <va-card-content class="row">
      <div class="flex md4 xs12">
        <va-progress-bar :modelValue="value / 3"/>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar :modelValue="value2"/>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar :modelValue="value3"/>
      </div>
    </va-card-content>
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
