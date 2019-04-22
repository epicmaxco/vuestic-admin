<template>
  <VbDemo>
    <div style="margin-left: 1.5rem; margin-top: 1rem">
        <va-list-item
          :item="item1"
          @item-click="onClick"
        >
          <va-list-item-tile>
            <img :src="item1.image" v-if="item1.image">
          </va-list-item-tile>
          <va-list-item-tile>
            <div>{{item1.firstLine}}</div>
            <div class="text--secondary" style="font-size: 0.875rem">{{item1.secondLine}}</div>
          </va-list-item-tile>
          <va-list-item-tile>
            <va-icon :icon="item1.icon" :color="'lightgrey'"/>
          </va-list-item-tile>
        </va-list-item>
    </div>
  </VbDemo>
</template>
<script>
import VaListItem from './VaListItem'
import VaListItemTile from './VaListItemTile'

export default {
  data () {
    return {
      item1:
        {
          firstLine: 'A title',
          secondLine:
            "Try this now; you'll see that the layout looks much better with this ",
          image: 'https://i.imgur.com/NLrdqsk.png',
          icon: 'fa fa-anchor',
        },
    }
  },
  components: {
    VaListItem,
    VaListItemTile,
  },
  props: {
    item: Object,
  },
  methods: {
    onClick (clickedItem) {
      console.debug(clickedItem)
    },
  },
}
</script>
