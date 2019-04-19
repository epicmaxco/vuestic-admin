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
  background-color: $list-background-color;
  padding-left: 24px;
  padding-top: 24px;
  padding-bottom: 20px;
  height: 64px;
}
</style>
