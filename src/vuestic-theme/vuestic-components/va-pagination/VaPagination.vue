<template>
  <div class="va-pagination">
    <va-button-group>
      <va-button
        v-if="this.pages !== visiblePages && boundaryLinks"
        class="va-button--no-effects"
        outline
        :color="color"
        :small="small"
        :large="large"
        :disabled="disabled || value === 1"
        :icon="icon && icon.boundary ? icon.boundary : 'fa fa-angle-double-left'"
        @click="changePage(1)"
      >

      </va-button>
      <va-button
        v-if="this.pages !== visiblePages && directionLinks"
        class="va-button--no-effects"
        outline
        :color="color"
        :small="small"
        :large="large"
        :disabled="disabled || value === 1"
        :icon="icon && icon.direction ? icon.direction : 'fa fa-angle-left'"
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
        :icon="iconRight && iconRight.direction ? iconRight.direction : 'fa fa-angle-right'"
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
        :icon="iconRight && iconRight.boundary ? iconRight.boundary : 'fa fa-angle-double-right'"
        @click="changePage(lastPage)"
      />
    </va-button-group>
  </div>
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
      type: Object
    },
    iconRight: {
      type: Object
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
      range: []
    }
  },
  computed: {
    lastPage () {
      return this.pages
    },
    paginationRange () {
      this.range = setPaginationRange(this.value, this.visiblePages, this.pages, this.range)
      return this.range
    }
  }
}
</script>
