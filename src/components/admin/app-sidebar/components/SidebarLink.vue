<template>
  <li class="sidebar-link">
    <router-link
      class="sidebar-link__router-link"
      :to="to"
      :target="target">
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
      required: true,
    },
    target: {
      type: String,
      default: '_self',
    },
  },
  watch: {
    $route (route) {
      this.$nextTick(() => {
        const isActive = this.$children[0].$el.classList.contains('router-link-active')
        if (!isActive) {
          return
        }
        const linkGroup = this.$parent && this.$parent.$parent
        if (linkGroup.$options.name !== 'sidebar-link-group') {
          return
        }
        linkGroup.expanded = true
      })
    },
  },
}
</script>

<style lang="scss">
.sidebar-link {
  .sidebar-link__router-link {
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
    &:hover {
      background-color: $hover-black;
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

  a {
    color: $white;
    text-decoration: none;
  }
}

</style>
