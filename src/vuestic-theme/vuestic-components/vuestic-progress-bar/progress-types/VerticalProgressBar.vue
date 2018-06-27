<template>
  <div class="vertical">
    <div class="progress"
         :class="classObject">
      <div class="progress-bar" :style="styleObject">
      </div>
    </div>
    <div class="value">{{value + '%'}}</div>
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
      'disabled'
    ],
    computed: {
      styleObject: function () {
        return {
          backgroundColor: this.color,
          height: this.value + '%'
        }
      },
      classObject: function () {
        return {
          'progress-basic': this.size === 'basic',
          'progress-thin': this.size === 'thin',
          'progress-disabled': this.disabled
        }
      }
    }
  }
</script>

<style lang="scss">
  .vuestic-progress-bar .vertical {

    .pb-container & {
      margin-top: 1.25rem;
      margin-left: .125rem;
    }

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
      align-items: flex-end;
      -webkit-align-items: flex-end; /* Safari 7.0+ */
    }

    .value {
      float: left;
      height: $progress-bar-vertical-height;
      display: flex;
      align-items: center;
      padding-left: .25rem;
    }

    .progress-basic {
      border-radius: $progress-bar-width-basic;
      .progress-bar {
        border-radius: inherit;
        width: $progress-bar-width-basic;
      }
    }

    .progress-thin {
      .progress-bar {
        width: $progress-bar-width-thin;
      }
    }

    .progress-disabled {
      opacity: 0.5
    }
  }

</style>
