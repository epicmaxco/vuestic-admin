<template>
  <aside class="sidebar">
   <ul class="sidebar-menu">
     <li v-for="(item, index) in menuItems">
       <router-link :to="item.path || ''" @click.native="toggleMenuItem(item)">
         {{item.meta.title}}
       </router-link>
       <ul class="sidebar-submenu" v-show="item.children && item.meta.expanded">
         <li v-for="childItem in item.children">
           <router-link :to="childItem.path">
             {{childItem.meta.title}}
           </router-link>
         </li>
       </ul>
     </li>
   </ul>
  </aside>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'sidebar',
    computed: mapGetters({
      menuItems: 'menuItems'
    }),
    methods: {
      ...mapActions({
        expand: 'toggleExpandMenuItem'
      }),
      toggleMenuItem (item) {
        if (item.children) {
          this.expand({   // TODO: check default prop
            menuItem: item,
            expand: !item.meta.expanded
          })
        }
      }
    },
    data () {
      return {
        show: false
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .sidebar {
    position: absolute;
    width: $sidebar-width;
    top: $sidebar-top;
    left: $sidebar-left;
    background: $sidebar-bg;
  }
</style>
