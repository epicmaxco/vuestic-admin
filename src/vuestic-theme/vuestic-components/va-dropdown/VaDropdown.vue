<script>
import VaPopup
  from '../va-popup/quasar/components/popup/VaPopup.vue'

const positionMap = {
  top: { anchor: 'top middle', self: 'bottom middle' },
  right: { anchor: 'center right', self: 'center left' },
  bottom: { anchor: 'bottom middle', self: 'top middle' },
  left: { anchor: 'center left', self: 'center right' },
}

const generatePosition = position => {
  if (!position) {
    return {}
  }

  return { ...positionMap[position], offset: [12, 12] }
}

export default {
  name: 'va-dropdown',
  extend: VaPopup,
  props: {
    position: {
      type: String,
      validate: position => position in positionMap,
    },
  },
  render (createElement) {
    return createElement(
      VaPopup,
      {
        class: {
          'va-dropdown': true,
        },
        props: {
          ...generatePosition(this.position),
          ...this.$attrs,
        },
        on: this.$listeners,
      },
      this.$slots.default,
    )
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-dropdown {
  background: $darkest-gray;
}
</style>
