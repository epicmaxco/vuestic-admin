<template>
  <div class="row">
    <div class="col-md-12">
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
            {{normalizeName(item.path) | translate}}
          </router-link>
        </div>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-breadcrumbs',
    props: {
      breadcrumbs: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    methods: {
      normalizeName (name) {
        const pos = name.indexOf('-', 0)
        if (pos !== -1) {
          name = name.substring(0, pos) + ' ' + name.substring(pos + 1, pos.length)
        }
        return name
      }
    },
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
