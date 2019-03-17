<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <div class="row">
        <div class="col-md-12">
          <h4>Colors</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6" v-for="(mainThemeColor, index) in mainThemeColors" :key="index">
          <vuestic-colors-presentation
            :color="mainThemeColor.color"
            :name="mainThemeColor.name"
            :description="mainThemeColor.description"/>
        </div>
      </div>
    </div>
    <div class="demo-container__item">
      <div class="row">
        <div class="col-md-12">
          <h4>Extra colors</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6" v-for="(extraColor, index) in extraColors" :key="index">
          <vuestic-colors-presentation
            :color="extraColor.color"
            :name="extraColor.name"
            :description="extraColor.description"/>
        </div>
      </div>
    </div>
    <div class="demo-container__item">
      <div class="row">
        <div class="col-md-12">
          <h4>Button gradients</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6" v-for="(buttonGradient, index) in buttonGradients" :key="index">
          <vuestic-colors-presentation
            :color="buttonGradient.color"
            :width="205"/>
        </div>
      </div>
    </div>
    <div class="demo-container__item">
      <div class="row">
        <div class="col-md-12">
          <h4>Buttons & Links, pressed</h4>
          <p>Darken 15% applied to an original style (gradient or flat color) for pressed state.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6" v-for="(pressedButtonGradient, index) in pressedButtonGradients" :key="index">
          <vuestic-colors-presentation
            :color="pressedButtonGradient.color"
            :width="205"/>
        </div>
      </div>
    </div>
    <div class="demo-container__item">
      <div class="row">
        <div class="col-md-12">
          <h4>Buttons & Links, hover</h4>
          <p>Lighten 15% applied to an original style (gradient or flat color) for hover state.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6" v-for="(hoveredButtonGradient, index) in hoveredButtonGradients" :key="index">
          <vuestic-colors-presentation
            :color="hoveredButtonGradient.color"
            :width="205"/>
        </div>
      </div>
    </div>
    <div class="demo-container__item">
      <div class="row">
        <div class="col-md-12">
          <h4>Text Buttons, pressed</h4>
          <p>Pressed button background will add extra 15% of the original color to its current background color value (e.g. 15% opacity Green overlay to a Light Green background for a Green text button).</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6" v-for="(textButtonPessedItem, index) in textButtonPessedItems" :key="index">
          <vuestic-colors-presentation
            :color="textButtonPessedItem.color"
            :width="205"/>
        </div>
      </div>
    </div>
    <div class="demo-container__item">
      <div class="row">
        <div class="col-md-12">
          <h4>Text Buttons, Hover</h4>
          <p>On hover a colored background appear. Color are the same that are used for notifications, table rows, inputs.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6" v-for="(textButtonHoveredItem, index) in textButtonHoveredItems" :key="index">
          <vuestic-colors-presentation
            :color="textButtonHoveredItem.color"
            :width="205"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuesticColorsPresentation from './VuesticColorPresentation.vue'
import { mainThemeColors, extraColors, buttonGradients, pressedButtonGradients, hoveredButtonGradients, textButtonHoveredItems, textButtonPessedItems } from './colorsData'

export default {
  components: { VuesticColorsPresentation },
  data () {
    return {
      mainThemeColors: mainThemeColors,
      extraColors: extraColors,
      buttonGradients: buttonGradients,
      pressedButtonGradients: pressedButtonGradients,
      hoveredButtonGradients: hoveredButtonGradients,
      textButtonHoveredItems: textButtonHoveredItems,
      textButtonPessedItems: textButtonPessedItems
    }
  }
}
</script>
