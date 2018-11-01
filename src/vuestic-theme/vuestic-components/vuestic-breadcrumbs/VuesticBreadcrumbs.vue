<template>
  <div class="vuestic-breadcrumbs">
    <div class="vuestic-breadcrumbs__nav-section">
      <router-link
        class="vuestic-breadcrumbs__nav-section-item"
        :to="{ path: breadcrumbs.root.name }">
        {{ $t(breadcrumbs.root.displayName) }}
      </router-link>
      <router-link
        v-for="(item, index) in displayedCrumbs"
        :to="{ name: item.name }"
        :key="index"
        class="vuestic-breadcrumbs__nav-section-item"
        :class="{ disabled: item.disabled }">
        {{ $t(item.displayName) }}
      </router-link>
    </div>
    <div class="vuestic-breadcrumbs__help-section">
      <a
        target="_blank"
        :href="currentRoute"
        class="btn btn-micro btn-info"
      >
        <span class="vuestic-icon vuestic-icon-files"></span>
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
    currentPath: {
      type: String,
      default: '',
    },
  },
  computed: {
    displayedCrumbs () {
      return this.findInNestedByName(this.breadcrumbs.routes, this.currentPath)
    },
    currentRoute () {
      return this.$route.meta.wikiLink || 'https://github.com/epicmaxco/vuestic-admin/wiki'
    },
  },
  methods: {
    findInNestedByName (array, name) {
      if (typeof array === 'undefined') {
        return
      }

      // HACK Needs explainng and/or testing.
      for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) return [{ ...array[i] }]
        let a = this.findInNestedByName(array[i].children, name)
        if (a != null) {
          a.unshift({ ...array[i] })
          return [...a]
        }
      }
      return null
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
