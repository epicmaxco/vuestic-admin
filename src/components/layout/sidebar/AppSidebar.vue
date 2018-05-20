<template>
  <vuestic-sidebar>
    <ul slot="list" class="sidebar-menu">
      <li v-for="(item, index) in this.items" :key="item.name">
        <router-link
          class="sidebar-link"
          :to="item.path"
          :target="item.meta.newWindow ? '_blank' : '_self'"
          @click="toggleMenuItem(item)"
          v-if="item.path">
          <i class="sidebar-menu-item-icon" v-bind:class="item.meta.iconClass"></i>
          {{item.meta.title | translate}}
        </router-link>
        <a href="#"
           @click.prevent="toggleMenuItem(item)"
           class="sidebar-link"
           v-bind:class="{expanded: item.meta.expanded}"
           v-else>
          <i class="sidebar-menu-item-icon" v-bind:class="item.meta.iconClass"></i>
          {{item.meta.title | translate}}
          <i class="expand-icon fa fa-angle-down"></i>
        </a>
        <expanding>
          <ul class="sidebar-submenu in" v-show="item.meta.expanded">
            <li v-for="childItem in item.children" :key="childItem.name">
              <router-link
                class="sidebar-link sidebar-submenu-link"
                :to="childItem.path"
                :target="childItem.meta.newWindow ? '_blank' : '_self'">
                <i class="sidebar-menu-item-icon"
                   v-bind:class="childItem.meta.iconClass"
                   v-if="childItem.meta.iconClass"
                ></i>
                {{childItem.meta.title | translate}}
              </router-link>
            </li>
          </ul>
        </expanding>
      </li>
    </ul>
  </vuestic-sidebar>
</template>

<script>

  import Expanding from 'vue-bulma-expanding/src/Expanding'
  import VuesticSidebar from './../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'

  export default {
    name: 'app-sidebar',
    components: {
      Expanding,
      VuesticSidebar
    },
    props: {
      items: {
        type: Array,
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
        this.items.forEach((item) => {
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
    }
  }

  function _findMatchingParentMenuItem (itemName) {
    let parentItem
    this.items.forEach((item) => {
      parentItem = (item.children && item.children.find((child) => child.name === itemName)) ? item : parentItem
    })
    return parentItem
  }
</script>
