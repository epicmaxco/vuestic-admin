<template>
  <div>
    <div class="va-list-item" @click="$emit('item-click', item)">
      <slot/>
      <!-- <div class="va-list-item-fade"/> -->
    </div>
    <hr v-if="isDivider()">
  </div>
</template>

<script>
import VaIcon from '../va-icon/VaIcon'

export default {
  name: 'va-list-item',
  props: {
    item: Object,
    dividers: {
      type: Boolean,
      default: false,
    },
    index: Number,
    items: Array,
  },
  components: {
    VaIcon,
  },
  methods: {
    isDivider () {
      return this.index !== this.items.length - 1 && this.dividers
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-list-item {
  display: flex;
  justify-content: start;
  padding-left: 16px;
  cursor: pointer;
  position: relative;

  &-header {
    color: $theme-blue-dark;
    display: flex;
    flex-direction: column;
    font-size: $font-size-smaller;
    font-weight: $font-weight-bold;
    justify-content: center;
    letter-spacing: 0.6px;
    min-height: 48px;
    padding-left: 24px;
    padding-right: 8px;
    text-transform: uppercase;
  }

  &-fade {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 4px 0;
    background-image: linear-gradient(to bottom, transparent, $white);
  }
}

div.va-list-item:hover {
  background-color: $gray-light;
}
</style>
