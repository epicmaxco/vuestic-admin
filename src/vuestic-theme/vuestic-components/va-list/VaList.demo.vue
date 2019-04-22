
<template>
  <VbDemo>
    <div style="margin-left: 1.5rem; margin-top: 1rem">
      <va-list>
        <va-list-header>There are a distinct header without divider</va-list-header>
        <template v-for="(item, index) of items">
        <va-list-item
          :item="item"
          :itemHeight=4
          :key="'listItem' + index"
          @item-click="onClick"
        >
          <va-list-item-tile>
            <img :src="item.image" v-if="item.image">
          </va-list-item-tile>
          <va-list-item-tile >
            <div>{{item.firstLine}}</div>
            <div class="text--secondary " style="font-size: 0.875rem">{{item.secondLine}}</div>
          </va-list-item-tile>
          <va-list-item-tile>
            <va-icon :icon="item.icon" :color="'lightgrey'"/>
          </va-list-item-tile>
        </va-list-item>
        <va-list-divider :key="'divider' + index"/>
        </template>
      </va-list>
    </div>
    <div style="margin: 1.5rem">
      <va-list hasDividers>
        <va-list-item
          v-for="(item, index) of items"
          :item="item"
          :key="'list1Item' + index"
          @item-click="onClick"
        >
        <va-list-item-tile>
            <img :src="item.image" v-if="item.image">
          </va-list-item-tile>
          <va-list-item-tile >
            <div>{{item.firstLine}}</div>
            <div class="text--secondary " style="font-size: 0.875rem">{{item.secondLine}}</div>
          </va-list-item-tile>
          <va-list-item-tile>
            <va-icon :icon="item.icon" :color="'lightgrey'"/>
          </va-list-item-tile>
        </va-list-item>
      </va-list>
    </div>
  </VbDemo>
</template>
<script>
import VaListItem from './VaListItem'
import VaListItemTile from './VaListItemTile'
import VaListHeader from './VaListHeader'
import VaListDivider from './VaListDivider'
import VaList from './VaList'

export default {
  data () {
    return {
      items: [
        {
          firstLine: 'A title',
          secondLine:
            "Try this now; you'll see that the layout looks much better with this ",
          image: 'https://i.imgur.com/NLrdqsk.png',
          icon: 'fa fa-anchor',
        },
        {
          firstLine: 'Another title',
          icon: 'fa fa-flag',
          secondLine: 'text-text-text',
          image: 'https://i.imgur.com/RaQY1Na.jpg',
        },
        {
          icon: 'fa fa-eye',
          image: 'https://i.imgur.com/NLrdqsk.png',
        },
        {
          secondLine:
            'Bear this terminology in mind as you go through subsequent sections. You can always refer back to it if you get confused about any of the terms being used.',
          image: 'https://i.imgur.com/NLrdqsk.png',
          icon: 'fa fa-star',
        },
        {
          header: 'Header from data here',
        },
        {
          firstLine: 'Why Listeners in HTML?',
          secondLine:
            'You might be concerned that this whole event listening approach violates the good old rules about “separation of concerns”. Rest assured - since all Vue handler functions and expressions are strictly bound to the ViewModel that’s handling the current view, it won’t cause any maintenance difficulty. In fact, there are several benefits in using v-on',
          image: 'https://i.imgur.com/AAhyLEZ.jpg',
        },
        {
          firstLine: 'Another title',
          icon: 'fa fa-flag',
          secondLine: 'text-text-text',
          image: 'https://i.imgur.com/AAhyLEZ.jpg',
        },
        {
          secondLine: 'On Macintosh keyboards, meta is the command key (⌘)',
        },
        {
          firstLine:
            'Bear this terminology in mind as you go through subsequent sections. You can always refer back to it if you get confused about any of the terms being used.',
          image: 'https://i.imgur.com/NLrdqsk.png',
        },
      ],
    }
  },
  components: {
    VaListItem,
    VaListItemTile,
    VaListHeader,
    VaListDivider,
    VaList,
  },
  methods: {
    onClick (clickedItem) {
      console.debug(clickedItem)
    },
  },
}
</script>
