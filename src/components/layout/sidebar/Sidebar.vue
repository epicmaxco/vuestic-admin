<template>
  <aside class="sidebar">
   <ul class="sidebar-menu">
     <li v-for="(item, index) in menuItems">
       <router-link :to="item.path || ''" @click.native="expandMenuItem(item)">
         {{item.name}}
       </router-link>
       <ul class="sidebar-submenu" v-show="item.children && item.meta.expanded">
         <li v-for="childItem in item.children">
           <router-link :to="childItem.path">
             {{childItem.name}}
           </router-link>
         </li>
       </ul>
     </li>
   </ul>
  </aside>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'sidebar',
    computed: mapGetters({
      menuItems: 'menuItems'
    }),
    methods: {
      expandMenuItem: (item) => {
        if (item.children) {
          console.log(item)
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
