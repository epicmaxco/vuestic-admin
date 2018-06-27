<template>
  <div class="horizontal">
    <div v-if="size != 'thick'" class="value">{{value + '%'}}</div>
    <div class="progress" :class="classObject">
      <div class="progress-bar" :style="styleObject">
        <span v-if="size == 'thick'" :class="{hidden: value == 0}" class="value">
          {{value + '%'}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: [
      'value',
      'color',
      'size',
      'disabled'
    ],
    computed: {
      styleObject: function () {
        return {
          backgroundColor: this.color,
          width: this.value + '%'
        }
      },
      classObject: function () {
        return {
          'progress-thick': this.size === 'thick',
          'progress-thin': this.size === 'thin',
          'progress-basic': this.size === 'basic',
          'progress-disabled': this.disabled
        }
      }
    }
  }
</script>

<style lang="scss">
  .vuestic-progress-bar .horizontal {
    display: inline-block;
    width: 100%;

    .progress-bar {
      transition: background-color ease .5s, width 3s linear !important;
      .progress-bar_disabled {
        opacity: 0.5
      }
    }

    .value {
      text-align: center;
      &.hidden {
        visibility: hidden;
      }
    }

    .progress-basic {
      border-radius: $progress-bar-width-basic;
      height: $progress-bar-width-basic;
      .progress-bar {
        border-radius: inherit;
      }
    }

    .progress-thin {
      height: $progress-bar-width-thin;
      .pb-container & {
        margin-top: .125rem;
      }
    }

    .progress-thick {
      border-radius: $progress-bar-width-thick;
      height: $progress-bar-width-thick;
      .pb-container & {
        margin-top: calc(#{$progress-bar-width-thick} / 2 - .125rem);
      }
      .progress-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: inherit;
      }
    }

    .progress-disabled {
      opacity: 0.5
    }

  }

</style>
