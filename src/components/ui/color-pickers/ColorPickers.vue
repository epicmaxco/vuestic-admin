<template>
  <div class="color-pickers vuestic-color-picker-page">
    <div class="row">
      <div class="flex md12 xs12">
        <va-card :title="$t('menu.colorPickers')">
          <div class="row">
            <div class="flex xs4 md2">
              <div class="vuestic-color-picker-page__top-square">
                <span
                  class="title no-wrap"
                  :style="{color: this.$themes.primary}"
                >
                  {{ $t('colorPickers.simple') }}
                </span>
                <va-color-picker-input
                  mode="palette"
                  v-model="topSimpleSquareColor"
                  :palette="palette"
                >
                  <va-color-square :value="topSimpleSquareColor"/>
                </va-color-picker-input>
              </div>
            </div>
            <div class="flex xs4 md2">
              <div class="vuestic-color-picker-page__top-square">
                <span
                  class="title no-wrap"
                  :style="{color: this.$themes.primary}"
                >
                  {{ $t('colorPickers.slider') }}
                </span>
                <va-color-picker-input
                  mode="slider"
                  v-model="topSliderSquareColor"
                >
                  <va-color-square :value="topSliderSquareColor"/>
                </va-color-picker-input>
              </div>
            </div>
            <div class="flex xs4 md2">
              <div class="vuestic-color-picker-page__top-square">
                <span
                  class="title no-wrap"
                  :style="{color: this.$themes.primary}"
                >
                  {{ $t('colorPickers.advanced') }}
                </span>
                <va-color-picker-input
                  mode="advanced"
                  v-model="topAdvancedSquareColor"
                >
                  <va-color-square :value="topAdvancedSquareColor"/>
                </va-color-picker-input>
              </div>
            </div>
          </div>
        </va-card>
      </div>
    </div>
    <div class="row">
      <div class="flex md12 xs12">
        <va-card title="Simple Inline">
          <div class="row">
            <div class="flex md1">
              <va-color-square :value="simpleColor"/>
            </div>
            <div class="flex md2">
              <va-palette-custom :palette="palette" v-model="simpleColor"/>
            </div>
          </div>
        </va-card>
      </div>
    </div>
    <div class="row">
      <div class="flex md12 xs12">
        <va-card title="Slider">
          <div class="row">
            <div class="flex xs12 md1">
              <va-color-square :value="sliderColor"/>
            </div>
            <div class="flex md6 xs12">
              <va-slider-color-picker v-model="sliderColor"/>
            </div>
          </div>
        </va-card>
      </div>
    </div>
    <div class="row">
      <div class="flex md12 xs12">
        <va-card title="Advanced">
          <div class="row">
            <div class="flex md1">
              <va-color-square :value="advancedColor"/>
            </div>
            <div class="flex md7">
              <va-advanced-color-picker v-model="advancedColor"/>
            </div>
          </div>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'color-pickers',
  data () {
    return {
      topSimpleSquareColor: '#f81953',
      topSliderSquareColor: '#34495e',
      topAdvancedSquareColor: '#ffd50a',
      sliderColor: '#2e5e2a',
      advancedColor: '#ffd50a',
      simpleColor: '#f81953',
      palette: Object.values(this.$themes),
    }
  },
}
</script>
