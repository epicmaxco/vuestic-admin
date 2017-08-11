<template>
  <div class="vertical">
    <div class="progress" :class="size" >
      <div class="progress-bar" ref="progressBar" :style="'height: ' + value + '%'">
      </div>
    </div>
    <div class="value">{{animatedValue + '%'}}</div>
  </div>
</template>

<script>
  import {color, lightness} from 'kewler'

  export default {
    props: [
      'value',
      'animatedValue',
      'min',
      'max',
      'color',
      'size',
      'isActive'
    ],
    mounted () {
      let progressBar = this.$refs.progressBar
      console.log(progressBar.style.transition)
      let progressColor = color(this.color)
      let current = progressColor
      setInterval(() => {
        if (progressColor(lightness(30))() !== current()) {
          current = progressColor(lightness(30))
        } else {
          current = progressColor
        }
        progressBar.style.backgroundColor = current()
      }, 500)
    }
  }
</script>

<style lang="scss">
  @import "../../../../sass/variables";
  @import "../../../../sass/mixins";
  @import "../../../../../node_modules/bootstrap/scss/variables";

  .vuestic-progress-bar .vertical {

    .progress-bar {
      transition: background-color ease .5s, height 3s linear !important;
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
