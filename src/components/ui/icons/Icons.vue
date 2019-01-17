<template>
  <div class="ui-icons">
    <router-view :sets="sets"></router-view>
  </div>
</template>

<script>
const iconTypes = [
  'vuestic',
  'brandico',
  'entypo',
  'font-awesome',
  'fontelico',
  'glyphicons',
  'iconic-stroke',
  'ionicons',
  'maki',
  'openweb',
]

export default {
  name: 'icons',
  computed: {
    sets () {
      let sets = []
      iconTypes.forEach(iconType => {
        let set = require('./sets/' + iconType + '.json')
        this.addFilteredListsTo(set)
        sets.push(set)
      })
      return sets
    },
  },
  methods: {
    addFilteredListsTo (set) {
      // This allows us to add icons to icon set.
      const list = set.lists[0].icons
      const filteredLists = []
      filteredLists.push(list.slice(0, 6))
      filteredLists.push(list.slice(6, 8))
      filteredLists.push(list.slice(8, 14))
      set.filteredLists = filteredLists
    },
  },
  data () {
    return {
      setsPath: './sets/',
    }
  },
}
</script>

<style lang="scss">
.ui-icons {

}
</style>
