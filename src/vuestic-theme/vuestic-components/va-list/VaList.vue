<template>
  <div class="va-list">
    <div class="va-list-item-header">I need a header</div>
    <va-list-item
      v-for="(item, index) of items"
      :dividers="dividers"
      :index="index"
      :item="item"
      :key="'item' +index"
      :items="items"
      @item-click="onClick"
    >
      <va-list-item-tile>
        <img :src="item.image" v-if="item.image">
      </va-list-item-tile>
      <va-list-item-tile cut>
        <div class="text--bold">{{item.firstLine}}</div>
        <div>{{item.secondLine}}</div>
      </va-list-item-tile>
      <va-list-item-tile right>
        <va-icon :icon="item.icon"/>
      </va-list-item-tile>
    </va-list-item>
  </div>
</template>

<script>
import VaListItem from './VaListItem'
import VaListItemTile from './VaListItemTile'

export default {
  name: 'va-list',
  props: {
    dividers: {
      type: Boolean,
      default: false,
    },
    items: Array,
  },
  components: {
    VaListItem,
    VaListItemTile,
  },
  methods: {
    onClick (clickedItem) {
      this.$emit('item-click', clickedItem)
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-list {
  min-width: $list-width;
  max-width: $list-width;
  background-color: $white;
  border-radius: $list-border-radius;
  padding-top: $list-border-radius;
  padding-bottom: $list-border-radius;
  hr {
    margin: 0;
  }
}
</style>
