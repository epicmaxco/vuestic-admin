<template>
  <div class="progress-bars">
    <div class="row">
      <div class="col-md-12">
        <standard-bars/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
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

<style lang="scss">
  .progress-bars {
    .vuestic-progress-bar {
      .progress.thick {
        margin-top: calc(#{$progress-bar-width-thick} / 2 - .125rem);
      }
      .progress.thin {
        margin-top: .125rem;
      }
    }

    .vertical, .circle {
      margin-top: 1.25rem;
      margin-left: .125rem;
    }
  }
</style>
