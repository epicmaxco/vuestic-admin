<template>
  <div>
    <va-list-header v-if="item.header">{{item.header}}</va-list-header>
    <div v-else :class="itemClass" @click="$emit('item-click', item)">
      <slot/>
    </div>
    <div v-if="dividers && !isLast">
      <div class="va-list-internal-divider-spacer"/>
      <div class="va-list-internal-divider"/>
    </div>
  </div>
</template>

<script>
import VaIcon from '../va-icon/VaIcon'
import VaListDivider from './VaListDivider'
import VaListHeader from './VaListHeader'

export default {
  name: 'va-list-item',
  props: {
    item: Object,
    dividers: {
      type: Boolean,
      default: false,
    },
    items: Array,
    index: Number,
  },
  components: {
    VaIcon,
    VaListDivider,
    VaListHeader,
  },
  computed: {
    isLast () {
      return this.items.length === this.index + 1
    },
    isFirst () {
      return this.index === 0
    },
    itemClass () {
      return {
        'va-list-item--last': this.isLast,
        'va-list-item--first': this.isFirst,
        'va-list-item': !this.isLast,
      }
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-list-item {
  display: flex;
  justify-content: start;
  padding-left: 16px;
  cursor: pointer;
  width: $list-width;
  background-color: $list-background-color;

  &--first {
    @extend .va-list-item;
    // border-radius: $list-border-radius $list-border-radius 0 0;
  }
  &--last {
    @extend .va-list-item;
    border-radius: 0 0 $list-border-radius $list-border-radius;
  }
}
.va-list-internal-divider {
  height: 1px;
  width: 100%;
  background-color: $list-divider-color;
}
.va-list-internal-divider-spacer {
  height: 1px;
  width: 24px;
  float: left;
  background-color: $list-background-color;
}

.va-list-item:hover {
  background-color: $list-hover-color;
}
</style>
