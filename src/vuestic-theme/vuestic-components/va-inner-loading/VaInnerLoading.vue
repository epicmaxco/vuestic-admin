<template>
  <div class="inner-loading">
    <slot />
    <div v-if="loading" class="inner-loading__overlay">
      <spring-spinner
        :animation-duration="2000"
        :size="48"
        :color="$themes.primary"
      />
    </div>
  </div>
</template>

<script>
import { SpringSpinner } from 'epic-spinners'

export default {
  name: 'va-inner-loading',
  components: {
    SpringSpinner,
  },
  props: {
    loading: Boolean,
  },
}
</script>

<style lang="scss" scoped>
  .inner-loading {
    position: relative;
    min-width: 100%;

    &__overlay {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.5);
    }
  }
</style>
