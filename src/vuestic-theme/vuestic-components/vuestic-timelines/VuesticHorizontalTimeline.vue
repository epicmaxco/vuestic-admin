<template>
  <div class="vuestic-horizontal-timeline">
    <slot/>
  </div>
</template>

<script>

export default {
  name: 'vuestic-horizontal-timeline',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.vuestic-horizontal-timeline {
  width: 100%;
  display: inline-flex;
  .vuestic-horizontal-timeline-item.active  {
    .vuestic-horizontal-timeline-item__line {
      .vuestic-horizontal-timeline-item__indicator {
        .first-line {
          background-color: $vue-green;
        }
        .wizard-step-indicator {
          background-color: $vue-green;
        }
        .completed-line {
          background-color: $vue-green
        }
      }
    }
  }
  .vuestic-horizontal-timeline-item.active ~ .vuestic-horizontal-timeline-item  {
    .vuestic-horizontal-timeline-item__line {
      .vuestic-horizontal-timeline-item__indicator {
        .completed-line {
          background-color: #DDD
        }
      }
    }
  }
}
</style>
