<template>
  <div class="progress-bars">
    <div class="va-row">
      <div class="flex md12">
        <standard-bars/>
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
import ColorfulBars from './Widgets/ColorfulBars'
import StandardBars from './Widgets/StandardBars'

export default {
  name: 'progress-bars',
  components: { StandardBars, ColorfulBars },
}
</script>
