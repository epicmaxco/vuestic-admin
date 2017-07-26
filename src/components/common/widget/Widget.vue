<template>
  <div class="widget" :class="{'no-header': !headerText}">
    <div class="widget-header" v-if="headerText">{{headerText}}</div>
    <div class="widget-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'widget',

    props: ['headerText']
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .widget {
    background: $widget-bg;
    box-shadow: $widget-box-shadow;
    margin-bottom: $widget-mb;
    padding: 0;

    &.no-header {
      .widget-body {
        height: $widget-body-no-header-height;
      }
    }

    &.larger-padding {
       .widget-body {
         padding: $widget-larger-padding;
       }
    }

    &.no-h-padding {
      .widget-body {
        padding-left: 0;
        padding-right: 0;
      }
    }

    &.no-v-padding {
      .widget-body {
        padding-top: 0;
        padding-bottom: 0;
      }
    }

    &.info-widget {
      border-top: $info-widget-border;
    }

    .widget-body {
      height: $widget-body-with-header-height;
      padding: $widget-padding;
    }

    .widget-header {
      height: $widget-header-height;
      padding: 0 $widget-padding;
      border-bottom: $widget-header-border;
      font-size: $font-size-larger;
      display: flex;
      align-items: center;
    }
  }
</style>
