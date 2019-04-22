<template>
    <div class="va-list-item-tile">
      <slot/>
      <div class="va-list-item-tile-fade"/>
    </div>
</template>

<script>
export default {
  name: 'va-list-item-tile',
}
</script>

<style lang='scss'>
@import "../../vuestic-sass/resources/resources";

.va-list-item-tile {
  display: flex;
  flex-direction: column;
  min-width: 4rem;
  padding: 0.5rem 0 0.5rem 0.5rem;
  height: 100%;
  overflow: hidden;
  justify-content: start;
  position: relative;

  &-fade {
    position: absolute;
    bottom: 0;
    height: 1rem;
    width: 100%;
    background: linear-gradient(transparent, $list-background-color);
  }
}

.va-list-item-tile img {
  object-fit: cover;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
}
</style>
