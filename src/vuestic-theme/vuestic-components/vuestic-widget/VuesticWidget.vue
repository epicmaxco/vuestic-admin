<template>
  <div class="vuestic-widget" :class="{'no-header': !headerText}">
    <div class="vuestic-widget-header" v-if="headerText">{{headerText}}</div>
    <div class="vuestic-widget-body" v-if="hasSlotData">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuestic-widget',
  props: ['headerText'],
  computed: {
    hasSlotData () {
      return this.$slots.default
    },
  },
}
</script>

<style lang="scss">
.vuestic-widget {
  background: $widget-bg;
  box-shadow: $widget-box-shadow;
  margin-bottom: $widget-mb;
  padding: 0;

  &.no-header {
    .vuestic-widget-body {
    }
  }

  &.larger-padding {
    .vuestic-widget-body {
      padding: $widget-larger-padding;
    }
  }

  &.no-h-padding {
    .vuestic-widget-body {
      padding-left: 0;
      padding-right: 0;
    }
  }

  &.no-v-padding {
    .vuestic-widget-body {
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  &.brand-info {
    background-color: $brand-info;
    color: $white;
    box-shadow: $widget-info-shadow;
  }

  &.brand-danger {
    background-color: $brand-danger;
    color: $white;
    box-shadow: $widget-danger-shadow;
  }

  &.info-widget {
    border-top: $info-widget-border;

    &.brand-info {
      border-top-color: $brand-info;
    }

    &.brand-danger {
      border-top-color: $brand-danger;
    }
  }

  .vuestic-widget-body {
    padding: $widget-padding;
  }

  .vuestic-widget-header {
    height: $widget-header-height;
    padding: 0 $widget-padding;
    border-bottom: $widget-header-border;
    font-size: 1.375rem;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
}
</style>
