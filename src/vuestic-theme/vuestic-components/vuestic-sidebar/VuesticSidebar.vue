<template>
  <aside class="sidebar" :class="classObject">
    <vuestic-scrollbar>
      <ul class="sidebar-menu">
        <slot name="menu"></slot>
        <!--<li v-for="(item, index) in this.items" :key="item.name">
          <router-link
            class="sidebar-link"
            :to="item.path"
            :target="item.meta.newWindow ? '_blank' : '_self'"
            @click="onClick(item)"
            v-if="item.path">
            <i class="sidebar-menu-item-icon" v-bind:class="item.meta.iconClass"></i>
            {{item.meta.title | translate}}
          </router-link>
          <a href="#"
             @click="onClick(item)"
             class="sidebar-link"
             v-bind:class="{expanded: item.meta.expanded}"
             v-else>
            <i class="sidebar-menu-item-icon" v-bind:class="item.meta.iconClass"></i>
            {{item.meta.title | translate}}
            <i class="expand-icon fa fa-angle-down"></i>
          </a>
          <expanding>
            <ul class="sidebar-submenu in" v-show="item.meta.expanded">
              <li v-for="childItem in item.children" :key="childItem.name">
                <router-link
                  class="sidebar-link sidebar-submenu-link"
                  :to="childItem.path"
                  :target="childItem.meta.newWindow ? '_blank' : '_self'">
                  <i class="sidebar-menu-item-icon"
                     v-bind:class="childItem.meta.iconClass"
                     v-if="childItem.meta.iconClass"
                  ></i>
                  {{childItem.meta.title | translate}}
                </router-link>
              </li>
            </ul>
          </expanding>
        </li>-->
      </ul>
    </vuestic-scrollbar>

  </aside>
</template>

<script>
  import Expanding from 'vue-bulma-expanding/src/Expanding'
  export default {
    name: 'vuestic-sidebar',
    components: {
      Expanding,
    },
    props: {
      items: {
        type: Array,
        required: true
      },
      hidden: {
        type: Boolean,
        required: true,
      },
      toggleWithoutAnimation: {
        type: Boolean,
        required: true,
      }
    },
    methods: {
      onClick (item) {
        this.$emit('toggle-item', item)
      },
    },
    computed: {
      classObject: function () {
        return {
          'sidebar-hidden': !this.toggleWithoutAnimation && !this.hidden,
          'sidebar-hidden sidebar-hidden_without-animation': this.toggleWithoutAnimation && !this.hidden
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  .sidebar {
    @include media-breakpoint-down(md) {
      top: $sidebar-mobile-top;
      left: $sidebar-mobile-left;
      width: $sidebar-mobile-width;
      z-index: $sidebar-mobile-z-index;
    }
    height: $sidebar-viewport-height;
    .vuestic-scrollbar {
      height: 100%;
      .scrollbar-wrapper {
        box-shadow: $sidebar-box-shadow;
      }
      .scrollbar-content {
        background: $sidebar-bg;
      }
    }
    position: absolute;
    width: $sidebar-width;
    top: $sidebar-top;
    left: $sidebar-left;
    transition: all 0.2s ease;
    opacity: 1;
    &.sidebar-hidden_without-animation {
      transition: none;
    }
    &.sidebar-hidden {
      margin-left: $sidebar-left;
    }
    &.sidebar-hidden + .content-wrap {
      margin-left: $sidebar-left;
      @include media-breakpoint-down(md) {
        padding: $content-mobile-wrap;
        margin-left: 0;
        &.sidebar-hidden + .content-wrap {
          margin-left: 0;
          padding-top: $content-mobile-wrap-sb-top;
        }
      }
    }
    @include media-breakpoint-down(md) {
      padding: $content-mobile-wrap;
      margin-left: 0;
      &.sidebar-hidden {
        margin-left: 0;
        padding-top: $content-mobile-wrap-sb-top;
      }
    }
    &.sidebar-hidden {
      @include media-breakpoint-down(md) {
        top: $sidebar-hidden-top-mobile;
        opacity: 0;
        z-index: $sidebar-mobile-z-index;
        height: $sidebar-hidden-height-mobile;
      }
      top: $sidebar-hidden-top;
      opacity: 0;
      z-index: $min-z-index;
    }
    .layout-fixed & {
      position: fixed;
    }
  }
</style>
