<template>
  <div class="va-pagination">
    <va-button-group>
      <va-button
        v-if="lastPage !== length"
        outline color="info"
        :disabled="disabled"
        icon="fa fa-angle-double-left"
        @click="changePage(1)"
      />
      <va-button
        v-if="lastPage !== length"
        outline color="info"
        :disabled="disabled"
        icon="fa fa-angle-left"
        @click="changePage(value - 1)"
      />
      <va-button
        outline color="info"
        :disabled="disabled"
        v-for="n in paginationRange" :key="n"
        :class="{ 'va-button--active': n === value }"
        @click="changePage(n)"
      >
        {{ n }}
      </va-button>
      <va-button
        v-if="lastPage !== length"
        outline color="info"
        :disabled="disabled"
        icon="fa fa-angle-right"
        @click="changePage(value + 1)"
      />
      <va-button
        v-if="lastPage !== length"
        outline color="info"
        :disabled="disabled"
        icon="fa fa-angle-double-right"
        @click="changePage(lastPage)"
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
    length: {
      type: Number,
      default: 5
    },
    totalPages: {
      type: Number
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    changePage (pageNum) {
      this.$emit('input', pageNum)
      this.$emit('change-page', pageNum)
    }
  },
  computed: {
    lastPage () {
      if (this.totalPages) {
        return this.totalPages
      }
      return this.length
    },
    paginationRange () {
      const start =
        this.value - this.length / 2 <= 0
          ? 1 : this.value + this.length / 2 > this.lastPage
            ? this.lastPage - this.length + 1
            : Math.ceil(this.value - this.length / 2)

      let range = []

      for (let i = 0; i < this.length; i++) {
        range.push(start + i)
      }
      return range
    }
  }
}
</script>
