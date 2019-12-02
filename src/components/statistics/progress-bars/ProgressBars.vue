<template>
  <div class="progress-bars">
    <div class="row">
      <div class="flex xs12">
        <horizontal-bars/>
      </div>
    </div>
    <div class="row">
      <div class="flex xs12">
        <bars-state/>
      </div>
    </div>
    <div class="row">
      <div class="flex xs12">
        <circle-bars/>
      </div>
    </div>
    <div class="row">
      <div class="flex xs12">
        <colorful-bars/>
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalBars from './Widgets/HorizontalBars'
import CircleBars from './Widgets/CircleBars'
import BarsState from './Widgets/BarsState'
import ColorfulBars from './Widgets/ColorfulBars'

export default {
  name: 'progress-bars',
  components: { HorizontalBars, CircleBars, BarsState, ColorfulBars },
}
</script>
