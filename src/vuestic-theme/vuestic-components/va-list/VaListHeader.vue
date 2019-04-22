<template>
  <div class="va-list-header">
    <div class="va-card__header-title">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'va-list-header',
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-list-header {
  width: $list-width;
  background-color: $list-background-color;
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.25rem;
  height: 4rem;
}
</style>
