<template>
  <vuestic-widget class="no-padding no-v-padding">
    <div class='vuestic-breadcrumbs'>
      <router-link :to="'/'" class="crumb">{{'breadcrumbs.home' | translate}}</router-link>
      <router-link
              v-for="(item, index) in breadcrumbs"
              :to="{path: item.path}"
              :key="index"
              class="crumb"
              v-bind:class="{ disabled: !item.path }"
      >
        {{item.meta.title | translate}}
      </router-link>
    </div>
  </vuestic-widget>
</template>

<script>
  export default {
    name: 'vuestic-breadcrumbs',
    props: {
      breadcrumbs: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../../sass/_variables.scss';

  .vuestic-breadcrumbs {
    height: $breadcrumbs-height;
    display: flex;
    align-items: center;

    .crumb {
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
        color: $vue-green;
      }
    }
  }
</style>
