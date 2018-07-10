<template>
  <vuestic-widget class="no-padding no-v-padding">
    <div class="vuestic-breadcrumbs">
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
        }
        return null
      }
    }
  }
</script>

<style lang='scss' scoped>
  .vuestic-breadcrumbs {
    height: $breadcrumbs-height;
    display: flex;
    align-items: center;

    .crumb {
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

    a {
      color: $breadcrumbs-gray;
      &:hover {
        color: $brand-primary;
      }
    }
  }
</style>
