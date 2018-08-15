<template>
  <div class="vuestic-vertical-timeline-item">
    <div class="vuestic-vertical-timeline-item__date">
      {{ date || '---' }}
    </div>
    <div class="vuestic-vertical-timeline-item__line">
      <div>|</div>
      <div>o</div>
      <div>|</div>
    </div>
    <div class="vuestic-vertical-timeline-item__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuestic-vertical-timeline-item',
  props: {
    date: {},
  },
}
</script>

<style lang="scss">
$line-width: 40px;

.vuestic-vertical-timeline-item {
  display: flex;
  &__date {
    flex: 1 1 40%;
    text-align: end;
  }
  &__line {
    @include flex-center();
    flex-direction: column;
    flex: 0 0 $line-width;
    text-align: center;
  }
  &__content {
    flex: 1 1 40%;
    // HACK Remove after card fix (see https://github.com/epicmaxco/vuestic-admin/issues/307)
    .vuestic-card {
      width: calc(100% - 1.1875rem * 2);
    }
  }
}
</style>
