<template>
  <div>
    <slot name="header" />

    <vuetable
      ref="vuetable"
      :api-mode="false"
      :fields="fields"
      :data="apiMode ? data : undefined"
      :data-manager="apiMode ? undefined : dataManager"
      :pagination-path="apiMode ? '' : 'pagination'"
      :no-data-template="noDataLabel"
      :css="styles"
      :row-class="rowClass"
      @vuetable:row-clicked="rowClicked"
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
      v-if="!noPagination && totalPages > 1"
      class="flex-center"
    >
      <va-pagination
        v-model="currentPage"
        :pages="totalPages"
        :visible-pages="totalPages > 4 ? 4 : totalPages"
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
    apiMode: Boolean,
    clickable: Boolean,
    noPagination: Boolean,
    noDataLabel: {
      type: String,
      default: undefined,
    },
    rowClass: {
      type: Function,
      default: undefined,
    },
  },
  data () {
    return {
      currentPage: 1,
    }
  },
  computed: {
    styles () {
      return {
        tableClass: 'va-table' + (this.clickable ? ' clickable' : ''),
        ascendingIcon: 'fa fa-caret-up',
        descendingIcon: 'fa fa-caret-down',
        renderIcon: classes => {
          return '<span class="' + classes.join(' ') + '"></span>'
        },
      }
    },
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
    rowClicked (row) {
      this.$emit('row-clicked', row)
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

      .sort-icon {
        font-size: 10px;
      }
    }

    tr {
      &:nth-child(even) {
        td {
          background-color: #f5f8f9;
        }
      }
    }

    &.clickable {
      td {
        cursor: pointer;
      }

      tr {
        &:hover {
          td {
            background-color: $light-gray;
          }
        }
      }
    }

    .vuetable-empty-result {
      padding-top: 70px;
      padding-bottom: 70px;
      font-size: 16px;
      color: $gray;
    }
  }
</style>
