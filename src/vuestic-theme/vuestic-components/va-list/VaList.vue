<template>
 <div :class="listClass">
   <slot/>
 </div>
</template>

<script>
export default {
  name: 'va-list',
  props: {
    hasDividers: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listClass () {
      return {
        'va-list': !this.hasDividers,
        'va-list-divided': this.hasDividers,
      }
    },
  },
}
</script>

<style lang='scss'>
@import "../../vuestic-sass/resources/resources";

.va-list {
  background-color: $list-background-color;
  border-radius: $list-border-radius;
  padding-top: $list-border-radius;
  padding-bottom: $list-border-radius;
}

.va-list-divided {
  @extend .va-list;

  div:last-child {
    border-bottom: none;
  }
}

.va-list-divided .va-list-item {
  border-bottom: 0.0625rem solid $list-divider-color;
}
.va-list-divided .va-list-header {
  border-bottom: 0.0625rem solid $list-divider-color;
}
</style>
