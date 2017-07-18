<template>
  <div class="vertical" :class="'color-' + color">
    <div class="progress" :class="size" >
      <div class="progress-bar" :style="'height: ' + value + '%'" v-progress-bar="{data: $data}">
      </div>
    </div>
    <div class="value">{{animatedValue + '%'}}</div>
  </div>
</template>

<script>
  export default {
    props: [
      'value',
      'min',
      'max',
      'color',
      'size',
      'isActive'
    ],
    directives: {
      progressBar (el, binding) {
        binding.value.data.progressBarElement = el
      }
    },
    methods: {
      enableBarAnimation (flag) {
        if (flag) {
          this.progressBarElement.setAttribute('class', 'progress-bar active')
        } else {
          this.progressBarElement.setAttribute('class', 'progress-bar')
        }
      }
    },
    watch: {
      isActive (flag) {
        this.enableBarAnimation(flag)
      }
    },
    data () {
      return {
        animatedValue: this.value,
        progressBarElement: null
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../sass/variables";
  @import "../../../../sass/mixins";
  @import "../../../../../node_modules/bootstrap/scss/variables";

  .vuestic-progress-bar .vertical {
    @each $name in map-keys($colors-map) {
      &.color-#{$name} {
        $color: map-get($colors-map, $name);
        color: $color;
        .progress-bar {
          background-color: $color;
          &.active {
            animation: change-#{$name} 1.5s linear infinite;
            @keyframes change-#{$name} {
              0% {background-color: $color}
              50% {background-color: lighten($color, 30%)}
            }
          }
        }
      }
    }

    .progress {
      height: $progress-bar-vertical-height;
      float: left;
      display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
      display: -ms-flexbox;  /* TWEENER - IE 10 */
      display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
      display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
      align-items: flex-start;
      -webkit-align-items: flex-start; /* Safari 7.0+ */
    }

    .value{
      float: left;
      height: $progress-bar-vertical-height;
      display: flex;
      align-items: center;
      padding-left: .25rem;
    }

    .basic {
      border-radius: $progress-bar-width-basic;
      .progress-bar {
        border-radius: inherit;
        width: $progress-bar-width-basic;
      }
    }

    .thin {
      .progress-bar {
        width: $progress-bar-width-thin;
      }
    }
  }

</style>
