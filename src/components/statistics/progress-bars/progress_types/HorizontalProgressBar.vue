<template>
  <div class="horizontal" :class="'color-' + color">
    <div v-if="size != 'thick'" class="value">{{animatedValue + '%'}}</div>
    <div class="progress" :class="size" >
      <div class="progress-bar" :style="'width: ' + value + '%'" v-progress-bar="{data: $data}">
        <span v-if="size == 'thick' && animatedValue != 0" class="value">{{animatedValue + '%'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      size: {
        type: String,
        default: 'basic'
      },
      color: {
        type: String,
        default: '$brand-primary'
      },
      isActive: {
        type: Boolean,
        default: 'false'
      }
    },
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
    }

    .basic {
      border-radius: .5rem;
      .progress-bar {
        border-radius: .5rem;
        height: .5rem;
      }
    }

    .thin {
      border-radius: 0;
      .progress-bar {
        height: 2px;
      }
    }

    .thick {
      border-radius: 1rem;
      margin-top: calc(1.5rem/2 - 2px);
      .progress-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
        height: 1.5rem;
      }
    }

  }

</style>
