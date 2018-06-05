<template>
  <li>
    <a href="#"
       @click="toggleMenuItem()"
       target="_self"
       class="sidebar-link"
       v-bind:class="{expanded: this.expanded}">
      <slot name="icon"></slot>
      <slot name="title"></slot>
      <i class="expand-icon fa fa-angle-down"></i>
    </a>
    <expanding>
      <ul class="sidebar-submenu in" v-show="this.expanded">
        <slot></slot>
      </ul>
    </expanding>
  </li>
</template>

<script>
  import SidebarLink from './SidebarLink'
  import Expanding from 'vue-bulma-expanding/src/Expanding'

  export default {
    name: 'sidebar-link-group',
    components: {
      SidebarLink,
      Expanding
    },
    data () {
      return {
        expanded: false
      }
    },
    methods: {
      toggleMenuItem () {
        this.expanded = !this.expanded
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

  .sidebar-submenu-link {
    height: $sidebar-submenu-link-height;
  }
  .sidebar-menu,
  .sidebar-submenu {
    list-style: none;
    padding-left: 0;
    li {
      display: block;
      padding-left: 0;
    }
  }
  .sidebar-submenu {
    .sidebar-link {
      padding-left: $sidebar-submenu-link-pl;
      font-size: $font-size-smaller;
    }
  }
  .sidebar-menu {
    max-height: 100%;
    margin-bottom: 0;
  }
  .expand-icon {
    color: $vue-green;
  }
  a {
    color: $white;
    text-decoration: none;
  }

</style>
