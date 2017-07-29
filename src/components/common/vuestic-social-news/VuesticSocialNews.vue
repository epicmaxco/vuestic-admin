<template>
  <div class="vuestic-social-news">
    <div class="d-flex justify-content-between align-items-center text-w-btn">
      <span class="text">That was users have posted about your business.</span>
      <a :href="url" target="_blank">
        <button class="btn btn-micro btn-primary">VIEW</button>
      </a>
    </div>
    <div class="d-flex justify-content-between photos">
      <div class="photo" v-for="pieceOfNews in news" :style="`background: url(${pieceOfNews.photoURL})`"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-social-news',
    props: ['news', 'url']
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";
  @import "../../../../node_modules/bootstrap/scss/variables";
  @import "../../../../node_modules/bootstrap/scss/mixins/breakpoints";

  .business-posts .widget-body {
    padding-left: 2rem;
    padding-right: 0;
    .text-w-btn {
      padding-right: 1.3rem;
      padding-bottom: 1.5rem;
      overflow: hidden;
      .text {
        font-size: $font-size-sm;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .btn {
        margin-left: 1rem;
      }
    }
    .photos {
      padding-right: 2rem;
      .photo {
        background-size: cover !important;
        @include media-breakpoint-up(lg) {
          width: 4.8vw;
          height: 4.8vw;
        }
        @include media-breakpoint-between(sm, md) {
          width: 6vw;
          height: 6vw;
        }
        @include media-breakpoint-between(xs, sm) {
          width: 12vw;
          height: 12vw;
        }
      }
    }
  }
</style>
