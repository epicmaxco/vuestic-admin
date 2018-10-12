<template>
  <div class="vertical-bar">
    <div class="progress vertical-bar__progress"
         :class="verticalBarType">
      <div class="progress-bar vertical-bar__progress-bar"
           :class="verticalBarAnimation"
           :style="verticalBarStyle">
        <span v-if="size == 'thick'">
          <span v-if="!text">{{value + '%'}}</span>
          <span v-else>{{text}}</span>
        </span>
      </div>
    </div>
    <div class="vertical-bar__value" v-if="size != 'thick'">
      <span v-if="!text">{{value + '%'}}</span>
      <span v-else>{{text}}</span>
    </div>
  </div>
</template>

<script>
import {
  colorConfig,
  VuesticTheme,
} from './../../vuestic-color-picker/VuesticTheme'

export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    text: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'Primary',
    },
    size: {
      type: String,
      default: 'basic',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    verticalBarStyle: function () {
      return {
        backgroundColor: colorConfig[VuesticTheme[this.theme]],
        height: this.value + '%',
      }
    },
    verticalBarType: function () {
      return {
        'vertical-bar--basic': this.size === 'basic',
        'vertical-bar--thin': this.size === 'thin',
        'vertical-bar--thick': this.size === 'thick',
        'vertical-bar--disabled': this.disabled,
      }
    },
    verticalBarAnimation: function () {
      return {
        'vertical-bar--animated': this.animated,
      }
    },
  },
}
</script>

<style lang="scss">
.vertical-bar {
  font-size: $progress-bar-value-font-size;
  font-weight: $font-weight-bold;

  &--animated {
    transition: background-color ease .5s, height 3s linear !important;
  }

  .vertical-bar__progress {
    height: $progress-bar-vertical-height;
    float: left;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
    align-items: flex-end;
    -webkit-align-items: flex-end; /* Safari 7.0+ */
  }

  .vertical-bar__value {
    float: left;
    height: $progress-bar-vertical-height;
    display: flex;
    align-items: center;
    padding-left: .25rem;
  }

  &--basic {
    border-radius: $progress-bar-width-basic;
    width: $progress-bar-width-basic;
    .vertical-bar__progress-bar {
      border-radius: inherit;
      width: $progress-bar-width-basic;
    }
  }

  &--thin {
    width: $progress-bar-width-thin;
    .vertical-bar__progress-bar {
      width: $progress-bar-width-thin;
    }

  }

  &--thick {
    border-radius: $progress-bar-width-thick;
    .vertical-bar__progress-bar {
      width: $vertical-progress-bar-width-thick;
    }
  }

  &--disabled {
    opacity: 0.5
  }
}

</style>
