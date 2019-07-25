<template>
<div class="layout gutter--md">
  <div class="row">
    <div class="flex md6">
      <va-card title="Theme Colors">
        <div
          v-for="(themeColor, index) in themeColors"
          :key="index"
        >
          <va-color-presentation
            :color="themeColor.color"
            :name="themeColor.name"
            :description="themeColor.description"
          />
        </div>
      </va-card>
    </div>

    <div class="flex md6">
      <va-card title="Extra Colors">
        <div
          v-for="(extraColor, index) in extraColors"
          :key="index"
        >
          <va-color-presentation
            :color="extraColor.color"
            :name="extraColor.name"
            :description="extraColor.description"
          />
        </div>
      </va-card>
    </div>

    <div class="flex md4">
      <va-card title="Button Gradients">
        <div
          v-for="(buttonGradient, index) in buttonGradients"
          :key="index"
        >
          <va-color-presentation
            :color="buttonGradient.color"
            :variant="['gradient']"
            :name="buttonGradient.name"
            :description="buttonGradient.description"
            :width="200"
          />
        </div>
      </va-card>
    </div>

    <div class="flex md4">
      <va-card title="Hovered Button Gradients">
        <p class="mt-0 mb-2">
          Lighten 15% applied to an original style (gradient or flat color) for hover state.
        </p>
        <div
          v-for="(buttonGradient, index) in buttonGradients"
          :key="index"
        >
          <va-color-presentation
            :color="buttonGradient.color"
            :variant="['gradient', 'hovered']"
            :name="buttonGradient.name"
            :description="buttonGradient.description"
            :width="200"
          />
        </div>
      </va-card>
    </div>

    <div class="flex md4">
      <va-card title="Pressed Button Gradients">
        <p class="mt-0 mb-2">
          Darken 15% applied to an original style (gradient or flat color) for pressed state.
        </p>
        <div
          v-for="(buttonGradient, index) in buttonGradients"
          :key="index"
        >
          <va-color-presentation
            :color="buttonGradient.color"
            :variant="['gradient', 'pressed']"
            :name="buttonGradient.name"
            :description="buttonGradient.description"
            :width="200"
          />
        </div>
      </va-card>
    </div>
  </div>
</div>
</template>

<script>
import VaColorPresentation from '../../../vuestic-theme/vuestic-components/va-color-presentation/VaColorPresentation'
import {
  themeColors,
  extraColors,
  buttonGradients,
} from '../../../vuestic-theme/vuestic-components/va-color-presentation/colorsData'

export default {
  components: {
    VaColorPresentation,
  },

  data () {
    return {
      themeColors,
      extraColors,
      buttonGradients,
    }
  },
}
</script>
