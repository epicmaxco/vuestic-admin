<template>
  <div class=" vuestic-page-not-found-sad-wallpaper overflow--hidden">
    <img src="https://i.imgur.com/hu80UGU.png"
         class="vuestic-page-not-found-sad-wallpaper__sad-image pt-3 px-3"/>
  </div>
</template>

<script>
export default {
  name: 'VuesticPageNotFoundSadWallpaper',
}
</script>

<style lang="scss">
.vuestic-page-not-found-sad-wallpaper {
  position: absolute;
  height: 40%;
  width: 100%;
  bottom: 0;
  padding-left: 80%;

  &__sad-image {
    width: 505px;
    height: 400px;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @include media-breakpoint-down(md) {
    overflow: hidden;
    height: 35%;
    padding-left: 50%;

    &__sad-image {
      width: 400px;
      height: 320px;
      overflow: hidden;
    }
  }

  @include media-breakpoint-down(xs) {
    display: none;

    &__sad-image {
      display: none;
    }
  }
}
</style>
