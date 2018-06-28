<template>
  <div v-if="layout == 'fixed'"
       class="vuestic-card-container"
       :class="classComputed"
  >
    <slot></slot>
  </div>
  <div v-else class="new-card-container"
       v-masonry item-selector=".new-card"
       column-width="#grid-sizer"
       gutter=".grid-gutter"
       :class="classComputed"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-card-container',
    props: {
      layout: {
        default: 'floating',
        validator: (layout) => {
          return ['fixed', 'floating'].includes(layout)
        },
      },
    },
    computed: {
      classComputed () {
        if (this.layout === 'floating') {
          return 'card-columns'
        }
        return 'vuestic-card-container--fixed'
      },
    },
  }
</script>

<style lang="scss">
  $singleGutter: #{(19/16)}rem;

  .new-card-container {
    width: 800px;
  }

  #grid-sizer {
    width: 50%;
  }

  #grid-sizer {
    width: 20px;
  }

  .vuestic-card-container {
    max-width: 100%;
    &--fixed {
      display: flex;
      flex-wrap: wrap;
      margin: -$singleGutter;
      align-items: flex-start;

      // Conceptually, overriding other component layout is incorrect. But we can let it slip, given components are supposed to be tightly bound.
      .vuestic-card {
        margin: $singleGutter;
        box-sizing: border-box;
        word-wrap: break-word;
        // width: calc(50% - #{$singleGutter} * 2);
        @media screen and (min-width: 560px) {
          // width: calc(25% - #{$singleGutter} * 2);
        }
      }
    }
  }
</style>
