<template>
  <div class="vuestic-breadcrumbs">
    <div class="vuestic-breadcrumbs__nav-section">
      <router-link
        class="vuestic-breadcrumbs__nav-section-item"
        :to="{ path: breadcrumbs.root.name }"
      >
        {{ $t(breadcrumbs.root.displayName) }}
      </router-link>
      <router-link
        v-for="(item, index) in displayedCrumbs"
        :to="{ name: item.name }"
        :key="index"
        class="vuestic-breadcrumbs__nav-section-item"
        :class="{ disabled: item.disabled }"
      >
        {{ $t(item.displayName) }}
      </router-link>
    </div>
    <div class="vuestic-breadcrumbs__help-section">
      <a
        target="_blank"
        :href="currentRoute"
        class="btn btn-micro btn-info"
      >
        <span class="vuestic-icon vuestic-icon-files"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuestic-breadcrumbs',
  props: {
    breadcrumbs: {
      type: Object,
      default: () => ({}),
    },
    currentRouteName: {
      type: String,
      default: '',
    },
  },
  computed: {
    displayedCrumbs () {
      // Breadcrumbs object has root and routes. Root is required for us to display home page.
      const routeBreadcrumbList = this.breadcrumbs.routes

      const foundBreadcrumbs = this.findInNestedByName(routeBreadcrumbList, this.currentRouteName)

      if (!foundBreadcrumbs.length) {
        // eslint-disable-next-line no-console
        console.warn(`No breadcrumbs registered for route with name "${this.currentRouteName}"`)
      }

      return foundBreadcrumbs
    },
    currentRoute () {
      return this.$route.meta.wikiLink || 'https://github.com/epicmaxco/vuestic-admin/wiki'
    },
  },
  methods: {
    findInNestedByName (routeBreadcrumbList, name) {
      for (const routeBreadcrumb of routeBreadcrumbList) {
        // We found breadcrumbs for route
        if (routeBreadcrumb.name === name) {
          return [routeBreadcrumb]
        }
        // We didn't find any breadcrumbs for route - means we have to go deeper!
        // Which works only if route breadcrumb has children declared.
        if (!routeBreadcrumb.children) {
          continue
        }
        let result = this.findInNestedByName(routeBreadcrumb.children, name)
        if (result.length) {
          return [routeBreadcrumb, ...result]
        }
      }
      return []
    },
  },
}
</script>

<style lang='scss'>
.vuestic-breadcrumbs {
  min-height: $breadcrumbs-height;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .vuestic-breadcrumbs__nav-section-item {
    color: $text-gray;

    &:hover {
      color: $brand-primary;
    }

    text-transform: capitalize;

    &.disabled {
      pointer-events: none;
    }

    &:last-child::after {
      display: none;
    }

    &::after {
      padding: 0 5px;
      display: inline-block;
      content: $breadcrumbs-arrow-content;
      vertical-align: middle;
      color: $brand-primary;
      font-size: $breadcrumbs-arrow-font;
      font-family: FontAwesome;
    }
  }

  .vuestic-breadcrumbs__help-section {
    .vuestic-icon {
      font-size: 20px;
    }
  }
}
</style>
