<template>
  <div class="progress-bars">
    <div class="va-row">
      <div class="flex md12">
        <horizontal-bars/>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md12">
        <cirecle-bars/>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md12">
        <colorful-bars/>
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalBars from './Widgets/HorizontalBars'
import CirecleBars from './Widgets/CircleBars'
import ColorfulBars from './Widgets/ColorfulBars'

export default {
  name: 'progress-bars',
  components: { HorizontalBars, CirecleBars, ColorfulBars }
}
</script>
