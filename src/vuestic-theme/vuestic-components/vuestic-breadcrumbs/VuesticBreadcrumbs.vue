<template>
  <vuestic-widget class="no-padding no-v-padding">
    <div class="vuestic-breadcrumbs">
      <router-link :to="{ path: breadcrumbs.home.path }" class="crumb">
        {{ $t(breadcrumbs.home.displayName) }}
      </router-link>
      <router-link
        v-for="(item, index) in breadcrumbs.other"
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
