<template>
  <div class="horizontal">
    <div v-if="size != 'thick'" class="value">{{animatedValue + '%'}}</div>
    <div class="progress" :class="size" >
      <div class="progress-bar" ref="progressBar" :style="'width: ' + value + '%'">
        <span v-if="size == 'thick'" :class="{hidden: animatedValue == min}" class="value">
          {{animatedValue + '%'}}
        </span>
      </div>
    </div>
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

  .vuestic-progress-bar .horizontal {
    display: inline-block;
    width: 100%;

    .progress-bar {
      transition: background-color ease .5s, width 3s linear !important;
    }

    .value {
      text-align: center;
      &.hidden {
        visibility: hidden;
      }
    }

    .basic {
      border-radius: $progress-bar-width-basic;
      .progress-bar {
        border-radius: inherit;
        height: $progress-bar-width-basic;
      }
    }

    .thin {
      .progress-bar {
        height: $progress-bar-width-thin;
      }
    }

    .thick {
      border-radius: $progress-bar-width-thick;
      .progress-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: inherit;
        height: $progress-bar-width-thick;
      }
    }

  }

</style>
