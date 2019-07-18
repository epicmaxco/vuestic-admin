<template>
  <div class="va-table striped" :class="{'hoverable': clickable || hoverable}">
    <slot name="header" />

    <va-inner-loading :loading="loading">
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
        v-if="!noPagination && paginationTotal > 1"
        class="flex-center mt-3"
      >
        <va-pagination
          v-model="currentPage"
          :pages="paginationTotal"
          :visible-pages="paginationVisible"
          @input="inputPage"
        />
      </div>
    </va-inner-loading>
  </div>
</template>

<script>
import { SpringSpinner } from 'epic-spinners'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VaPagination from '../va-pagination/VaPagination.vue'

export default {
  name: 'va-table',
  components: {
    SpringSpinner,
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
    hoverable: Boolean,
    noPagination: Boolean,
    noDataLabel: {
      type: String,
      default: undefined,
    },
    rowClass: {
      type: Function,
      default: undefined,
    },
    totalPages: {
      type: Number,
      default: 0,
    },
    loading: Boolean,
  },
  data () {
    return {
      currentPage: 1,
    }
  },
  computed: {
    styles () {
      return {
        tableClass: 'va-table__vuetable' + (this.clickable ? ' clickable' : ''),
        ascendingIcon: 'fa fa-caret-up',
        descendingIcon: 'fa fa-caret-down',
        renderIcon: classes => {
          return '<span class="' + classes.join(' ') + '"></span>'
        },
      }
    },
    paginationTotal () {
      return this.apiMode ? this.totalPages : Math.ceil(this.data.length / this.perPage)
    },
    paginationVisible () {
      if (this.paginationTotal > 4) {
        return 4
      }

      return this.paginationTotal
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
      let sorted = JSON.parse(JSON.stringify(this.data))

      if (sortOrder.length) {
        const { sortField, direction } = sortOrder[0]

        if (direction === 'asc') {
          this.sortAsc(sorted, sortField)
        } else {
          this.sortDesc(sorted, sortField)
        }
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
      items.sort((a, b) => {
        return a[field].localeCompare(b[field])
      })
    },
    sortDesc (items, field) {
      items.sort((a, b) => {
        return b[field].localeCompare(a[field])
      })
    },
    buildPagination (l, perPage) {
      return this.$refs.vuetable.makePagination(l, perPage)
    },
    inputPage (page) {
      if (this.apiMode) {
        this.$emit('page-selected', page)
        return
      }

      this.$refs.vuetable.changePage(page)
    },
    refresh () {
      this.$refs.vuetable.refresh()
    },
    rowClicked (row) {
      this.$emit('row-clicked', row)
    },
  },
}
</script>

<style lang="scss">
  .va-table__vuetable {
    width: 100%;

    &.clickable {
      td {
        cursor: pointer;
      }
    }

    th {
      &.sortable {
        color: $brand-primary;
      }

      .sort-icon {
        font-size: 0.625rem;
      }
    }

    .vuetable-empty-result {
      padding: 4.5rem 1rem;
      font-size: 1rem;
      color: $gray;
    }
  }
</style>
