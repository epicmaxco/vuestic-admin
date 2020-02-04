<template>
  <div class="spacing-playground">
    <div class="row">
      <div class="flex xs12 sm6 md4">
        <va-select
          :options="directionList"
          v-model="selectedMarginDirection"
          :label="$t('spacingPlayground.margin')"
          :max-height="null"
          no-clear
        />
      </div>
      <div class="flex xs12 sm6 md2">
        <va-select
          :options="sizesList"
          v-model="selectedMarginSize"
          :label="$t('spacingPlayground.value')"
          :max-height="null"
          no-clear
        />
      </div>
      <div class="flex xs12 sm6 md4">
        <va-select
          :options="directionList"
          v-model="selectedPaddingDirection"
          :label="$t('spacingPlayground.padding')"
          :max-height="null"
          no-clear
        />
      </div>
      <div class="flex xs12 sm6 md2">
        <va-select
          :options="sizesList"
          v-model="selectedPaddingSize"
          :label="$t('spacingPlayground.value')"
          :max-height="null"
          no-clear
        />
      </div>
    </div>

    <div
      v-if="selectedMarginClass || selectedPaddingClass"
      class="row"
    >
      <div class="flex xs12 content">
        <pre class="code">class="{{ (selectedMarginClass + ' ' +  selectedPaddingClass).trim() }}"</pre>
      </div>
    </div>
    <div class="row">
      <div class="flex xs12">
        <div class="playground-component">
          <div class="playground-component__margin" :class="selectedMarginClass">
            <div class="playground-component__padding" :class="selectedPaddingClass" >
              <div class="playground-component__inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="flex xs12 sm6">
        <color-presentation color="#ffd093" :name="$t('spacingPlayground.margin')"/>
      </div>
      <div class="flex xs12 sm6">
        <color-presentation color="#c9f7db" :name="$t('spacingPlayground.padding')"/>
      </div>
    </div>
  </div>
</template>

<script>
import ColorPresentation from '../colors/color-presentation/ColorPresentation'

export default {
  name: 'spacing-playgroud',
  components: { ColorPresentation },
  data () {
    return {
      directionList: ['a', 'y', 'x', 't', 'r', 'b', 'l'],
      sizesList: ['1', '2', '3', '4', '5', 'auto'],
      selectedMarginDirection: 'y',
      selectedPaddingDirection: 'x',
      selectedMarginSize: '3',
      selectedPaddingSize: '3',
    }
  },
  computed: {
    selectedMarginClass () {
      return (this.selectedMarginDirection && this.selectedMarginSize)
        ? `m${this.selectedMarginDirection}-${this.selectedMarginSize}`
        : ''
    },
    selectedPaddingClass () {
      return (this.selectedPaddingDirection && this.selectedPaddingSize)
        ? `p${this.selectedPaddingDirection}-${this.selectedPaddingSize}`
        : ''
    },
  },
}
</script>

<style lang="scss">

.spacing-playground {
  .playground-component {
    display: flex;
    background-color: #ffd093;

    &__margin {
      width: 100%;
    }

    &__padding {
      background-color: #c9f7db;
    }

    &__inner {
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.2);
      height: 20px;
    }
  }
}
</style>
