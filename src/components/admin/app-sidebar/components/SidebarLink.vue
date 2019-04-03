<template>
  <li class="sidebar-link">
    <router-link
      class="sidebar-link__router-link"
      :to="to"
      :target="target">
      <div class="flex align--center">
        <slot name="title"></slot>
      </div>
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
    height: 3rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    text-decoration: none;

    &.router-link-active,
    &:hover {
      color: #4fe382;
      border-left: 4px solid #4fe382;
      background-color: #0e4ac4;

      .sidebar-menu-item-icon,
      .expand-icon {
        color: #4fe382;
      }
    }

    &:hover {
      background-color: #0e4ac4;
    }

    .sidebar-menu-item-icon {
      font-size: $sidebar-menu-item-icon-size;
      color: $white;
      margin-right: 10px;

      &.fa-dashboard {
        /* Temp fix */
        position: relative;
        top: -2px;
      }
    }
  }

  a {
    color: #8c9fc7;
    text-decoration: none;
  }
}

</style>
