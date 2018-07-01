<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <color-dot
        color="#AAA"
        :selected="selected"
        @click="selected = !selected"
      />
    </div>
    <div class="demo-container__item">
    </div>
  </div>
</template>

<script>
import ColorDot from './ColorDot.vue'

export default {
  data () {
    return {
      selected: false,
    }
  },
  components: {
    ColorDot,
  },
}
</script>
