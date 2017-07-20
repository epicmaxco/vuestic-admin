<template>
  <div class="ui-icons">
    <router-view :sets="sets"></router-view>
  </div>
</template>

<script>
  import FullSet from './Set'

  export default {
    name: 'icons',
    components: {
      FullSet
    },
    computed: {
      sets () {
        let sets = []
        require(this.setsPath + 'names.json').forEach(name => {
          let set = require(this.setsPath + name + '.json')
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
        filteredLists.push(list.slice(6, 12))
        filteredLists.push(list.slice(12, 18))
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
    @import "../../../sass/icons-styles";
    .widget-body {
      padding: 1.9375rem 2.6875rem 1.9375rem 2.125rem;
    }
  }
</style>
