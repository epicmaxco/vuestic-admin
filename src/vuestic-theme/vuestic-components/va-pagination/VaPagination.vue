<template>
  <va-button-group class="va-pagination">
    <va-button
      v-if="this.pages !== visiblePages && boundaryLinks"
      class="va-button--no-effects"
      outline
      :color="color"
      :small="small"
      :large="large"
      :disabled="disabled || value === 1"
      :icon="iconClass.boundary"
      @click="changePage(1)"
    />
    <va-button
      v-if="this.pages !== visiblePages && directionLinks"
      class="va-button--no-effects"
      outline
      :color="color"
      :small="small"
      :large="large"
      :disabled="disabled || value === 1"
      :icon="iconClass.direction"
      @click="changePage(value - 1)"
    />
    <va-button
      outline
      :color="color"
      :small="small"
      :large="large"
      :disabled="disabled"
      v-for="(n, key) in paginationRange"
      :key="key"
      :class="{ 'va-button--active': n === value }"
      @click="changePage(n)"
    >
      {{ n }}
    </va-button>
    <va-button
      v-if="this.pages !== visiblePages && directionLinks"
      class="va-button--no-effects"
      outline
      :color="color"
      :small="small"
      :large="large"
      :disabled="disabled || value === this.pages"
      :icon="iconRightClass.direction"
      @click="changePage(value + 1)"
    />
    <va-button
      v-if="this.pages !== visiblePages && boundaryLinks"
      class="va-button--no-effects"
      outline
      :color="color"
      :small="small"
      :large="large"
      :disabled="disabled || value === this.pages"
      :icon="iconRightClass.boundary"
      @click="changePage(lastPage)"
    />
  </va-button-group>
</template>

<script>
import { setPaginationRange } from './setPaginationRange'

export default {
  name: 'va-pagination',
  props: {
    value: {
      type: Number,
    },
    visiblePages: {
      type: Number,
      default: 5
    },
    pages: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      default: 'info'
    },
    disabled: {
      type: Boolean
    },
    small: {
      type: Boolean
    },
    large: {
      type: Boolean
    },
    boundaryLinks: {
      type: Boolean,
      default: true
    },
    directionLinks: {
      type: Boolean,
      default: true
    },
    icon: {
      type: Object,
      default: () => {
        return {}
      },
    },
    iconRight: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {
    changePage (pageNum) {
      if (pageNum < 1 || pageNum > this.pages) {
        return
      }
      this.$emit('input', pageNum)
    }
  },
  data () {
    return {
      defaultIconClass: {
        direction: 'fa fa-angle-left',
        boundary: 'fa fa-angle-double-left',
      },
      defaultIconRightClass: {
        direction: 'fa fa-angle-right',
        boundary: 'fa fa-angle-double-right',
      },
    }
  },
  computed: {
    iconClass () {
      return Object.assign({}, this.defaultIconClass, this.icon)
    },
    iconRightClass () {
      return Object.assign({}, this.defaultIconRightClass, this.iconRight)
    },
    lastPage () {
      return this.pages
    },
    paginationRange () {
      return setPaginationRange(this.value, this.visiblePages, this.pages)
    }
  }
}
</script>
