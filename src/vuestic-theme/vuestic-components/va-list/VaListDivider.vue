<template>
  <div class=va-list-divider>
    <div class="va-list-divider-spacer"/>
    <div class="va-list-divider-filler"/>
  </div>
</template>

<script>
export default {
  name: 'va-list-divider',
}
</script>

<style lang='scss'>
@import "../../vuestic-sass/resources/resources";

.va-list-divider {
  display: flex;
}

.va-list-divider-filler {
    height: 0.0625rem;
    background-color: $list-divider-color;
    width: 100%;
}

.va-list-divider-spacer {
  height: 0.0625rem;
  width: 1.5rem;
  background-color: $list-background-color;
}

</style>
