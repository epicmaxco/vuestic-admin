<template>
  <div>
    <slot name="header" />

    <vuetable
      ref="vuetable"
      :api-mode="false"
      :fields="fields"
      :data-manager="dataManager"
      pagination-path="pagination"
      :css="styles"
    >
      <!-- https://stackoverflow.com/questions/50891858/vue-how-to-pass-down-slots-inside-wrapper-component   -->
      <template
        v-for="slot in Object.keys($scopedSlots)"
        :slot="slot"
        slot-scope="scope"
      >
        <slot
          :name="slot"
          v-bind="scope"
        />
      </template>
    </vuetable>

    <div
      v-if="!noPagination"
      class="flex-center"
    >
      <va-pagination
        v-model="currentPage"
        :pages="totalPages"
        :visible-pages="totalPages > 3 ? 3 : totalPages"
        @input="inputPage"
      />
    </div>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VaPagination from '../va-pagination/VaPagination.vue'

export default {
  name: 'va-table',
  components: {
    Vuetable,
    VaPagination,
  },
  props: {
    fields: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    perPage: {
      type: Number,
      default: 6,
    },
    noPagination: Boolean,
  },
  data () {
    return {
      currentPage: 1,
      styles: {
        tableClass: 'va-table',
        ascendingIcon: 'fa fa-caret-up',
        descendingIcon: 'fa fa-caret-down',
        renderIcon: classes => {
          return '<span class="' + classes.join(' ') + '"></span>'
        },
      },
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.data.length / this.perPage)
    },
  },
  watch: {
    perPage () {
      this.refresh()
    },
    data () {
      this.refresh()
    },
  },
  methods: {
    dataManager (sortOrder, pagination) {
      let sorted = []

      if (!sortOrder.length) {
        sorted = this.data
      } else {
        const { sortField, direction } = sortOrder[0]
        sorted = direction === 'asc' ? this.sortAsc(this.data, sortField) : this.sortDesc(this.data, sortField)
      }

      pagination = this.buildPagination(sorted.length, this.perPage)
      const { from } = pagination
      const sliceFrom = from - 1

      return {
        pagination,
        data: sorted.slice(sliceFrom, sliceFrom + this.perPage),
      }
    },
    sortAsc (items, field) {
      return items.sort((a, b) => {
        return a[field].localeCompare(b[field])
      })
    },
    sortDesc (items, field) {
      return items.sort((a, b) => {
        return b[field].localeCompare(a[field])
      })
    },
    buildPagination (l, perPage) {
      return this.$refs.vuetable.makePagination(l, perPage)
    },
    inputPage (page) {
      return this.$refs.vuetable.changePage(page)
    },
    refresh () {
      return this.$refs.vuetable.refresh()
    },
  },
}
</script>

<style lang="scss">
  @import "../../vuestic-sass/resources/resources";

  .va-table {
    width: 100%;

    th, td {
      padding: 10px;
    }

    th {
      font-size: $chip-font-size-sm;
      font-weight: bold;
      font-family: $font-family-sans-serif;
      text-transform: uppercase;
      line-height: $chip-line-height-sm;
      letter-spacing: $chip-letter-spacing-sm;
      border-bottom: 2px solid #34495e;

      &.sortable {
        color: $brand-primary;
      }
    }

    tr {
      &:nth-child(even) {
        td {
          background-color: #f5f8f9;
        }
      }
    }
  }
</style>
