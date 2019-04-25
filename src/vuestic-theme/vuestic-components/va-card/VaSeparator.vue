<template>
  <div class="va-separator"/>
</template>

<script>
export default {
  name: 'va-separator',
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-separator {
  height: 0.0625rem;
  background-color: $separator-color;
  margin-top: 1rem;
  margin-bottom: 1rem;
  .va-tabs + & {
    margin-top: 0;
  }
  .va-card .va-card__body:not(.va-card__body--no-padding-h, .va-card__body--no-padding) > & {
    margin-right: -$card-padding;
    margin-left: -$card-padding;
  }
}
</style>
