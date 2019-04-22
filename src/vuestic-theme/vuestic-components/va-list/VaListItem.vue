<template>
    <va-list-header v-if="item.header" :style="this.style">
      {{item.header}}
    </va-list-header>

    <div v-else class="va-list-item" :style="this.style" @click="$emit('item-click', item)">
      <slot/>
    </div>
</template>

<script>
import VaIcon from '../va-icon/VaIcon'
import VaListHeader from './VaListHeader'

export default {
  name: 'va-list-item',
  props: {
    item: {
      type: Object,
      required: true,
    },
    itemHeight: {
      type: Number,
    },
  },
  components: {
    VaIcon,
    VaListHeader,
  },
  computed: {
    style () {
      return `height: ${this.itemHeight}rem`
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-list-item {
  display: flex;
  justify-content: start;
  padding-left: 1rem;
  cursor: pointer;
  width: $list-width;
  background-color: $list-background-color;

  div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 4rem;
    padding: 0.5rem 0 0.5rem 0.5rem;
    margin-left: auto;
    align-items: flex-end;
    margin-right: 1rem;
  }
}

.va-list-item:hover {
  background-color: $list-hover-color;
}

.va-list-item:hover .va-list-item-tile-fade {
  background: linear-gradient(transparent, $list-hover-color 90%);
}
</style>
