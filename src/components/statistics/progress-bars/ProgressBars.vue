<template>
  <div class="progress-bars">
    <div class="va-row">
      <div class="flex md12">
        <horizontal-bars></horizontal-bars>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md12">
        <cirecle-bars></cirecle-bars>
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalBars from './Widgets/HorizontalBars'
import CirecleBars from './Widgets/CircleBars'

export default {
  name: 'progress-bars',
  components: { HorizontalBars, CirecleBars }
}
</script>
