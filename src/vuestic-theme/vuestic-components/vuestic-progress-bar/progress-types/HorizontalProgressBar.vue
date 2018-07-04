<template>
  <div class="horizontal">
    <div v-if="size != 'thick'" class="value">
      <span v-if="!text">{{value + '%'}}</span>
      <span v-else>{{text}}</span>
    </div>
    <div class="progress" :class="classObject">
      <div class="progress-bar" :style="styleObject">
        <span v-if="size == 'thick'" :class="{hidden: value == 0}" class="value">
          <span v-if="!text">{{value + '%'}}</span>
          <span v-else>{{text}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: [
      'value',
      'text',
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
          'vuestic-progress-bar--thick': this.size === 'thick',
          'vuestic-progress-bar--thin': this.size === 'thin',
          'vuestic-progress-bar--basic': this.size === 'basic',
          'vuestic-progress-bar--disabled': this.disabled
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
    }

    .value {
      text-align: center;
      &.hidden {
        visibility: hidden;
      }
    }

    .vuestic-progress-bar--basic {
      border-radius: $progress-bar-width-basic;
      height: $progress-bar-width-basic;
      .progress-bar {
        border-radius: inherit;
      }
    }

    .vuestic-progress-bar--thin {
      height: $progress-bar-width-thin;
      margin-top: .125rem;
    }

    .vuestic-progress-bar--thick {
      border-radius: $progress-bar-width-thick;
      height: $progress-bar-width-thick;
      margin-top: calc(#{$progress-bar-width-thick} / 2 - .125rem);
      .progress-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: inherit;
      }
    }

    .vuestic-progress-bar--disabled {
      opacity: 0.5
    }

  }

</style>
