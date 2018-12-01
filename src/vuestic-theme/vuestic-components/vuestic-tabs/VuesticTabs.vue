<template>
  <div class="vuestic-tabs">
    <div>
      <nav class="nav nav-pills va-row">
        <div
          class="nav-item col"
          @click="setActive(name)"
          :class="{active: name === currentActive}"
          v-for="name in names"
          :key="name"
        >
          <span class="nav-link"><h5>{{name}}</h5></span>
        </div>
      </nav>
      <div class="track">
        <div :class="underscoreClass"></div>
      </div>
    </div>
    <vuestic-simple-select
      class="simple-select"
      v-show="false"
      v-bind:options="names" v-model="currentActive"></vuestic-simple-select>
    <div class="tab-content">
      <div
        class="tab-pane"
        :class="{active: name === currentActive}"
        v-for="name in names"
        :key="name"
      >
        <slot :name="name"></slot>
      </div>
    </div>
  </div>
</template>

<script>
// d-none and d-lg-flex were deleted, bug will be fixed in the nearest update
export default {
  name: 'vuestic-tabs',
  props: ['names'],
  computed: {
    underscoreClass () {
      return 'underscore-' + this.names.length + '-' + this.names.indexOf(this.currentActive)
    },
  },
  methods: {
    setActive (name) {
      this.currentActive = name
    },
  },
  data () {
    return {
      currentActive: this.names[0],
    }
  },
}
</script>

<style lang="scss">
.vuestic-tabs {
  background-color: white;
  .simple-select {
    padding-top: 1.5rem;
  }
  .nav {
    margin: 0;
    padding-top: 2.25rem;
    .nav-item {
      flex-grow: 1;
      text-align: center;
      padding: 0;
      .nav-link {
        padding: 0;
        color: $gray;
        transition: all .3s ease;
      }
      &:hover {
        cursor: pointer;
        .nav-link {
          color: $vue-darkest-blue;
        }
      }
      &.active {
        .nav-link {
          color: $vue-darkest-blue;
        }
      }
    }
  }
  .track {
    overflow: hidden;
    width: 100%;
    height: .125rem;
    position: relative;
    div[class^='underscore-'] {
      background-color: $brand-primary;
      height: .125rem;
      position: absolute;
    }
    $koeff: 0.8;
    @for $all from 1 through 10 {
      $width: 1/$all;
      div[class^='underscore-#{$all}'] {
        width: $width * $koeff * 100%;
        transition: left .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      @for $place from 0 through $all {
        .underscore-#{$all}-#{$place} {
          left: ($place + (1 - $koeff)/2) * $width * 100%;
        }
      }
    }
  }
  .tab-content {
    padding-bottom: $tab-content-pb;
    padding-top: $tab-content-pt;
    > .tab-pane {
      width: 100%
    }
  }
}
</style>
