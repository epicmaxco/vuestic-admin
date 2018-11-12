<template>
  <div class="ui-icons">
    <router-view :sets="sets"></router-view>
  </div>
</template>

<script>
import FullSet from './Set'

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
  'openweb'
]

export default {
  name: 'icons',
  components: {
    FullSet
  },
  computed: {
    sets () {
      let sets = []
      iconTypes.forEach(iconType => {
        let set = require('./sets/' + iconType + '.json')
        this.addfilteredListsTo(set)
        sets.push(set)
      })
      return sets
    }
  },
  methods: {
    addfilteredListsTo (set) {
      let list = set.lists[0].icons
      let filteredLists = []
      filteredLists.push(list.slice(0, 6))
      filteredLists.push(list.slice(6, 8))
      filteredLists.push(list.slice(8, 14))
      set.filteredLists = filteredLists
    }
  },
  data () {
    return {
      setsPath: './sets/'
    }
  }
}
</script>

<style lang="scss">
  .ui-icons {

  }
</style>
