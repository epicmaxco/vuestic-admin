<template>
  <div class="horizontal-bar">
    <div v-if="size != 'thick'" class="horizontal-bar__value">
      <span v-if="!text">{{value + '%'}}</span>
      <span v-else>{{text}}</span>
    </div>
    <div class="progress" :class="horizontalBarType">
      <div class="progress-bar horizontal-bar__progress-bar" :style="horizontalBarStyle">
        <span v-if="size == 'thick'" :class="{hidden: value == 0}" class="horizontal-bar__value">
          <span v-if="!text">{{value + '%'}}</span>
          <span v-else>{{text}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      value: {
        type: Number,
        default: 0,
      },
      text: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: 'primary',
      },
      size: {
        type: String,
        default: 'basic',
      },
      disabled: {
        type: Boolean,
        default: false,
      }
    },
    computed: {
      horizontalBarStyle: function () {
        return {
          backgroundColor: this.color,
          width: this.value + '%'
        }
      },
      horizontalBarType: function () {
        return {
          'horizontal-bar--thick': this.size === 'thick',
          'horizontal-bar--thin': this.size === 'thin',
          'horizontal-bar--basic': this.size === 'basic',
          'horizontal-bar--disabled': this.disabled
        }
      }
    }
  }
</script>

<style lang="scss">
  .vuestic-progress-bar .horizontal-bar {
    display: inline-block;
    width: 100%;

    .horizontal-bar__progress-bar {
      transition: background-color ease .5s, width 3s linear !important;
    }

    .horizontal-bar__value {
      text-align: center;
      &.hidden {
        visibility: hidden;
      }
    }

    .horizontal-bar--basic {
      border-radius: $progress-bar-width-basic;
      height: $progress-bar-width-basic;
      .horizontal-bar__progress-bar {
        border-radius: inherit;
      }
    }

    .horizontal-bar--thin {
      height: $progress-bar-width-thin;
      margin-top: .125rem;
    }

    .horizontal-bar--thick {
      border-radius: $progress-bar-width-thick;
      height: $progress-bar-width-thick;
      margin-top: calc(#{$progress-bar-width-thick} / 2 - .125rem);
      .horizontal-bar__progress-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: inherit;
      }
    }

    .horizontal-bar--disabled {
      opacity: 0.5
    }

  }

</style>
