<template>
  <vuestic-sidebar :hidden="this.opened"
                   :toogleWithoutAnimation="toggleWithoutAnimation"
                   :items="menuItems"
                   @toggle-item="toggleMenuItem($event)"/>
</template>

<script>

  import VuesticSidebar from './../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
  import {mapGetters} from 'vuex'

  export default {
    name: 'app-sidebar',
    components: {
      VuesticSidebar
    },
    props: {
      opened: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      toggleMenuItem (item) {
        if (item.children) {
          this.$store.dispatch('toggleExpandMenuItem', {   // TODO: check default prop
            menuItem: item,
            expand: !item.meta.expanded
          })
        }
      }
    },
    watch: {
      $route (route) {
        let parent = _findMatchingParentMenuItem.call(this, route.name) || {}
        this.menuItems.forEach((item) => {
          this.$store.dispatch('toggleExpandMenuItem', {
            menuItem: item,
            expand: parent.name === item.name
          })
        })
      }
    },
    data () {
      return {
        show: false
      }
    },
    computed: {
      ...mapGetters([
        'toggleWithoutAnimation'
      ]),
      menuItems () {
        return this.$store.getters.menuItems
      }
    }
  }

  function _findMatchingParentMenuItem (itemName) {
    let parentItem
    this.menuItems.forEach((item) => {
      parentItem = (item.children && item.children.find((child) => child.name === itemName)) ? item : parentItem
    })
    return parentItem
  }
</script>
