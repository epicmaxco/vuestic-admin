<template>
  <vuestic-widget class="no-padding no-v-padding">
    <div class="row vuestic-breadcrumbs">
      <div class="col-lg-11 col-sm-12">
        <router-link :to="{ path: breadcrumbs.root.path }" class="crumb">
          {{ $t(breadcrumbs.root.displayName) }}
        </router-link>
        <router-link
          v-for="(item, index) in displayedCrumbs"
          :to="{path: item.path}"
          :key="index"
          class="crumb"
          :class="{ disabled: item.disabled }">
          {{ $t(item.displayName) }}
        </router-link>
      </div>
      <div class="col-lg-1 col-sm-12">
        <a :href="currentRoute" class="btn btn-sm btn-primary">
          Docs
        </a>
      </div>
    </div>
  </vuestic-widget>
</template>

<script>
export default {
  name: 'vuestic-breadcrumbs',
  props: {
    breadcrumbs: {
      type: Object,
      default: function () {
        return {}
      }
    },
    currentPath: {
      type: String,
      default: ''
    }
  },
  computed: {
    displayedCrumbs () {
      return this.findInNestedByName(this.breadcrumbs.routes, this.currentPath)
    },
    currentRoute () {
      return this.$route.meta.wikiLink || 'https://github.com/epicmaxco/vuestic-admin/wiki'
    }
  },
  methods: {
    findInNestedByName (array, name) {
      if (typeof array !== 'undefined') {
        for (let i = 0; i < array.length; i++) {
          if (array[i].path === name) return [{...array[i]}]
          let a = this.findInNestedByName(array[i].children, name)
          if (a != null) {
            a.unshift({...array[i]})
            return [...a]
          }
        }
        return null
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .vuestic-breadcrumbs {
    min-height: $breadcrumbs-height;
    display: flex;
    align-items: center;

    .crumb {
      text-transform: capitalize;
      color: $text-gray;
      &:hover {
        color: $brand-primary;
      }
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

    .btn {
      margin: 5px 0;
    }
  }
</style>
