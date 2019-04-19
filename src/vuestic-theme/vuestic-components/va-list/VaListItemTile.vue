<template>
  <div :class="tileClasses">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'va-list-item-tile',
  props: {
    cut: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tileClasses () {
      return {
        'va-list-item-tile--cut': this.cut,
        'va-list-item-tile--right': this.right,
        'va-list-item-tile': !this.cut && !this.right,
      }
    },
  },
}
</script>

<style lang='scss'>
.va-list-item-tile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 64px;
  padding: 8px 0 8px 8px;

  &--right {
    @extend .va-list-item-tile;
    margin-left: auto;
    align-items: end;
    margin-right: 16px;
  }

  &--cut {
    @extend .va-list-item-tile;
    height: 64px;
    overflow: hidden;
    justify-content: start;
  }
}

.va-list-item-tile img {
  object-fit: cover;
  border-radius: 50%;
  height: 48px;
  width: 48px;
}

</style>
