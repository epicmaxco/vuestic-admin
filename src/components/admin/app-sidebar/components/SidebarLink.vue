<template>
  <li class="sidebar-link">
    <router-link
      class="sidebar-link-wrapper"
      :class="{'sidebar-submenu-link': this.isChildLink, 'active-link': isActive }"
      @click=""
      :to="to"
      target="_self">
      <slot name="title"></slot>
    </router-link>
  </li>
</template>

<script>
  export default {
    name: 'sidebar-link',
    props: {
      to: {
        type: Object,
        required: true
      },
      isChildLink: {
        type: Boolean
      }
    },
    watch: {
      $route (route) {
        const sidebarGroups = this.$parent.$parent.$parent.$children
        sidebarGroups.forEach(item => {
          item.expanded = false
          if (item.$el.classList.contains('sidebar-link-group')) {
            item.$children[0].$children.forEach(link => {
              if (link.isActive) {
                item.expanded = true
              }
            })
          }
        })
      }
    },
    computed: {
      isActive () {
        return this.$route.name === this.to.name
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";


  .sidebar-link {
    .sidebar-link-wrapper {
      position: relative;
      height: $sidebar-link-height;
      padding-left: $sidebar-link-pl;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      text-decoration: none;
      &.router-link-active,
      &:hover {
        color: $white;
        background-color: $sidebar-link-active-bg;
        .sidebar-menu-item-icon,
        .expand-icon {
          color: $white;
        }
      }
      .sidebar-menu-item-icon {
        font-size: $sidebar-menu-item-icon-size;
        color: $vue-green;
        margin-right: 14px;
        &.fa-dashboard {
          /* Temp fix */
          position: relative;
          top: -2px;
        }
      }
    }
  }

</style>
