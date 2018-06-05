<template>
  <li>
    <router-link
      class="sidebar-link"
      :class="{'sidebar-submenu-link': this.isChildLink}"
      :to="this.to"
      target="_self">
      <slot name="icon"></slot>
      <slot name="title"></slot>
    </router-link>
  </li>
</template>

<script>
  export default {
    name: 'sidebar-link',
    props: {
      to: {
        type: String,
        required: true
      },
      isChildLink: {
        type: Boolean
      },

    }
  }
</script>

<style lang="scss">
  @import "../../../../sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

  .sidebar-link {
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
    .expand-icon {
      position: absolute;
      right: $sidebar-arrow-right;
      top: calc(50% - #{$font-size-root} / 2);
      font-weight: bold;
      transition: transform 0.3s ease;
    }
    &.expanded {
      .expand-icon {
        transform: rotate(180deg);
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

  .sidebar-submenu-link {
    height: $sidebar-submenu-link-height;
  }

</style>
