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
        :disabled="disabled"
        icon="fa fa-angle-double-left"
        @click="changePage(1)"
      />
      <va-button
        v-if="this.pages !== visiblePages && directionLinks"
        class="va-button--no-effects"
        outline
        :color="color"
        :small="small"
        :large="large"
        :disabled="disabled"
        :icon="icon ? icon : 'fa fa-angle-left'"
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
        :disabled="disabled"
        :icon="iconRight ? iconRight : 'fa fa-angle-right'"
        @click="changePage(value + 1)"
      />
      <va-button
        v-if="this.pages !== visiblePages && boundaryLinks"
        class="va-button--no-effects"
        outline
        :color="color"
        :small="small"
        :large="large"
        :disabled="disabled"
        icon="fa fa-angle-double-right"
        @click="changePage(this.pages)"
      />
    </va-button-group>
  </div>
</template>

<script>
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
      type: String
    },
    iconRight: {
      type: String
    },
  },
  methods: {
    changePage (pageNum) {
      if (pageNum < 1 || pageNum > this.pages) {
        return
      }
      this.$emit('input', pageNum)
      this.$emit('change-page', pageNum)
    }
  },
  data () {
    return {
      range: []
    }
  },
  computed: {
    paginationRange () {
      let start = 0

      const paginationMiddlePage = this.visiblePages / 2,
        firstRangePage = this.range[0],
        lastRangePage = this.range[this.range.length - 1]

      if (this.value - paginationMiddlePage <= 0 || this.value > this.pages) {
        start = 1
      } else {
        start = this.value + paginationMiddlePage > this.pages
          ? this.pages - this.visiblePages + 1
          : Math.ceil(this.value - paginationMiddlePage)
      }

      if (this.range.length === 0 || start === 1 || this.value === firstRangePage || this.value === lastRangePage) {
        this.range = []

        for (let i = 0; i < this.visiblePages; i++) {
          this.range.push(start + i)
        }
      }

      return this.range
    }
  }
}
</script>
