<template>
  <div class="va-list-label title" :style="{'color': colorComputed}">
    <slot />
  </div>
</template>

<script>
import { ColorThemeMixin } from '../../../services/ColorThemePlugin'

export default {
  name: 'va-list-label',
  mixins: [ColorThemeMixin],
  data () {
    return {
      colorThemeDefault: 'info',
    }
  },
}
</script>

<style lang="scss" scoped>
  .va-list-label {
    padding: $list-item-padding;
    padding-top: 0;
    padding-bottom: 0.75rem;
  }
</style>
