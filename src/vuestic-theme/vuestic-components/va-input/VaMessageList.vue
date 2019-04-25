<template>
  <div
    v-if="messages.length"
    class="va-message-list"
    :style="computedStyle"
  >
    <div
      class="va-message-list__message"
      v-for="(message, index) in messages"
      :key="index"
    >
      {{message}}
    </div>
  </div>
</template>

<script>
import { ColorThemeMixin } from '../../../services/ColorThemePlugin'

export default {
  name: 'va-message-list',
  mixins: [ColorThemeMixin],
  data () {
    return {
      colorThemeDefault: 'gray', // mixin override
    }
  },
  props: {
    value: {},
    limit: { type: Number, default: 1 },
  },
  computed: {
    messages () {
      if (!this.value) {
        return []
      }
      if (!Array.isArray(this.value)) {
        return [this.value]
      }
      return this.value.slice(0, this.limit)
    },
    computedStyle () {
      return {
        color: this.colorComputed,
      }
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-message-list {
  &__message {
    vertical-align: middle;
    font-size: $font-size-mini;
  }
}
</style>
