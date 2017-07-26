<template>
  <div class="vuestic-tabs">
    <nav class="nav nav-pills justify-content-around">
      <div class="nav-item" v-on:click="setActive(name)"
           :class="{active: name === currentActive}" v-for="name in names">
        <span class="nav-link"><h5>{{name}}</h5></span>
        <div class="underscore"></div>
      </div>
    </nav>
    <div class="tab-content d-flex justify-content-center">
      <div class="tab-pane"
           :class="{active: name === currentActive}" v-for="name in names">
        <slot :name="name" class="test"></slot>
      </div>
    </div>
  </div>
</template>

<script>

  import Widget from 'components/common/widget/Widget.vue'

  export default {
    components: {Widget},
    name: 'vuestic-tabs',
    props: ['names'],
    methods: {
      setActive (name) {
        this.currentActive = name
      }
    },
    data () {
      return {
        currentActive: this.names[0]
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";

  .vuestic-tabs {
    background-color: white;
    .nav {
      padding-top: 2.25rem;
      .nav-item {
        text-align: center;
        .underscore {
          width: 100%;
          background-color: $brand-primary;
          height: .125rem;
          opacity: 0;
          transition: all .3s ease;
        }
        .nav-link {
          padding: 0;
          color: $gray;
          transition: all .3s ease;
        }
        &:hover {
          cursor: pointer;
          .nav-link {
            color: lighten($vue-darkest-blue, 20%);
          }
          .underscore {
            opacity: .3;
          }
        }
        &.active {
          .underscore {
            opacity: 1;
          }
          .nav-link {
            color: $vue-darkest-blue;
          }
        }
      }
    }
    .tab-content {
      padding-top: 3.125rem;
      padding-bottom: 1.5rem;
    }
  }
</style>
