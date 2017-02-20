<template>
  <aside class="sidebar">
   <ul class="sidebar-menu">
     <li v-for="(item, index) in menuItems">
       <router-link :to="item.path"
                    class="sidebar-link"
                    @click="toggleMenuItem(item)"
                    v-if="item.path">
         {{item.meta.title}}
       </router-link>
       <a href="#"
          @click.prevent="toggleMenuItem(item)"
          class="sidebar-link"
          v-bind:class="{expanded: item.meta.expanded}"
          v-else>
         {{item.meta.title}}
         <i class="expand-icon fa fa-angle-down"></i>
       </a>
       <ul class="sidebar-submenu" v-show="item.children && item.meta.expanded">
         <li v-for="childItem in item.children">
           <router-link :to="childItem.path" class="sidebar-link sidebar-sumenu-link">
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

    watch: {
      $route (route) {
        let parent = _findMatchingParentMenuItem.call(this, route.name) || {}
        this.menuItems.forEach((item) => {
          this.expand({
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

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .sidebar {
    position: absolute;
    width: $sidebar-width;
    top: $sidebar-top;
    left: $sidebar-left;
    background: $sidebar-bg;
    box-shadow: $sidebar-box-shadow;

    .sidebar-link {
      position: relative;
      height: $sidebar-link-height;
      padding-left: $sidebar-link-pl;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      text-decoration: none;

      &.router-link-active, &:hover, &.expanded {
        color: white;
        background-color: $sidebar-link-active-bg;
      }

      .expand-icon {
        position: absolute;
        right: $sidebar-arrow-right;
        top: calc(50% - #{$font-size-root}/2);
        font-weight: bold;
      }

      &.expanded {
        .expand-icon {
          transform: rotate(180deg);
        }
      }

    }

    .sidebar-menu, .sidebar-submenu {
      list-style: none;
      padding-left: 0;

      li {
        display: block;
        padding-left: 0;
      }
    }

    .sidebar-submenu {
      .sidebar-link {
        background-color: $sidebar-link-active-bg;
        padding-left: 2 * $sidebar-link-pl;
      }
    }
  }
</style>
