<template>
  <VbDemo>
    <div class="va-list-demo">
      <VaList :items="items" :dividers="true" @item-click="onClick"/>
    </div>
  </VbDemo>
</template>
<script>
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
    VaList,
  },
  methods: {
    onClick (clickedItem) {},
  },
}
</script>
<style>
.va-list-demo {
  padding: 1.4rem 2rem;
}
</style>
