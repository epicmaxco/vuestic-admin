<template>
  <div
    class="va-item-section"
    :class="{
      'va-item-section--main': !side && !avatar,
      'va-item-section--side': side,
      'va-item-section--avatar': avatar
    }"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'va-item-section',
  props: {
    side: Boolean,
    avatar: Boolean,
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-item-section {
  display: flex;

  &--main {
    min-width: 0; // for ellipsis to work correctly
    flex-direction: column;
    flex: 1 0;
  }

  &--side {
    min-width: 1.5rem;

    .va-icon {
      font-size: 1.25rem;
    }
  }

  &--avatar {
    min-width: 3rem;
  }
}

.va-item-section + .va-item-section {
  margin-left: 0.5rem;

  &--side {
    &:last-child {
      margin-left: 1rem;
    }
  }
}
</style>
