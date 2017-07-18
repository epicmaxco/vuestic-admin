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
      names () {
        return require(this.setsPath + 'names.json')
      },
      sets () {
        console.log('Computed!')
        let sets = []
        this.names.forEach(name => {
          let set = require(this.setsPath + name + '.json')
          this.addSublistsTo(set)
          sets.push(set)
        })
        return sets
      }
    },
    methods: {
      addSublistsTo (set) {
        let list = set.lists[0].icons
        let subLists = []
        subLists.push(list.slice(0, 6))
        subLists.push(list.slice(6, 12))
        subLists.push(list.slice(12, 18))
        set.subLists = subLists
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
