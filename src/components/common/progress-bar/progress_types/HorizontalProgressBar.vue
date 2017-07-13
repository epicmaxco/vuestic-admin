<template>
  <div class="horizontal" :class="'color-' + color">
    <div v-if="size != 'thick'" class="value">{{animatedValue + '%'}}</div>
    <div class="progress" :class="size" >
      <div class="progress-bar" :style="'width: ' + value + '%'" v-progress-bar="{data: $data}">
        <span v-if="size == 'thick'" :class="{hidden: animatedValue == min}" class="value">
          {{animatedValue + '%'}}
        </span>
      </div>
    </div>
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

  .horizontal {
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

    display: inline-block;
    width: 100%;

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
