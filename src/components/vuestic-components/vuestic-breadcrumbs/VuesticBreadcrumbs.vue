<template>
  <vuestic-widget class="no-padding no-v-padding">
    <div class='vuestic-breadcrumbs'>
      <span >
        <router-link :to="'/'">{{'menu.dashboard' | translate}}</router-link>
      </span>
      <span v-for="item in breadcrumbs" class="">
        <router-link :to="{name: item.name}">{{item.meta.title | translate}}</router-link>
      </span>
    </div>
  </vuestic-widget>

</template>

<script>
  export default {
    name: 'vuestic-breadcrumbs',
    computed: {
      breadcrumbs () {
        return this.$store.getters.breadcrumbs(this.$route.name)
      }
    },
    methods: {
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../../sass/_variables.scss';

  .vuestic-breadcrumbs {
    height: $breadcrumbs-height;
    display: flex;
    align-items: center;

    span{
      &:last-child::after {
          display: none;
      }

      &::after {
        display: inline-block;
        content: $breadcrumbs-arrow-content;
        vertical-align: middle;
        color: $vue-green;
        font-size: $breadcrumbs-arrow-font;
        font-family: FontAwesome;
      }
    }


    a {
      padding: 0 5px;
      color: $breadcrumbs-gray;
      &:hover {
        color: $vue-green;
      }
    }
  }
</style>
