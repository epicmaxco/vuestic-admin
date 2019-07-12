<template>
  <div class="square-with-icon" :style="{ backgroundColor: colorComputed }">
    <va-icon :name="iconClass"/>
  </div>
</template>

<script>
import VaIcon from '../../va-icon/VaIcon'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

export default {
  name: 'square-with-icon',
  mixins: [ ColorThemeMixin ],
  components: { VaIcon },
  props: {
    iconClass: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@import "../../../vuestic-sass/resources/resources";

.square-with-icon {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 1.5rem;
  width: 1.5rem;
  color: $white;
  background-color: $vue-green;
  border-radius: .25rem;

  .va-icon {
    width: .875rem;
    height: .875rem;
    text-align: center;
  }

}
</style>
