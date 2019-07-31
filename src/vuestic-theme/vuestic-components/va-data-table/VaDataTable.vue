<template>
  <div class="va-data-table">
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
        class="va-data-table__pagination"
      >
        <va-pagination
          v-model="currentPage"
          :pages="paginationTotal"
          :visible-pages="visiblePages"
          :boundary-links="paginationTotal > visiblePages"
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
import VaInnerLoading from '../va-inner-loading/VaInnerLoading'

export default {
  name: 'va-data-table',
  components: {
    VaInnerLoading,
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
    visiblePages: {
      type: Number,
      default: 4,
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
        tableClass: this.buildTableClass(),
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
  },
  watch: {
    perPage () {
      this.refresh()
    },
    data () {
      this.refresh()
    },
    fields () {
      this.refreshFields() // support dynamic translations
    },
  },
  methods: {
    buildTableClass () {
      let name = 'va-data-table__vuetable va-table va-table--striped'

      if (this.clickable) {
        name += ' va-table--clickable'
      }

      if (this.hoverable) {
        name += ' va-table--hoverable'
      }

      return name
    },
    dataManager (sortOrder, pagination) {
      let sorted = []

      if (!sortOrder.length) {
        sorted = this.data
      } else {
        const { sortField, direction } = sortOrder[0]
        sorted = direction === 'asc' ? this.sortAsc(this.data, sortField) : this.sortDesc(this.data, sortField)
      }

      if (this.noPagination) {
        return {
          data: sorted,
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
      return items.slice().sort((a, b) => {
        return a[field].localeCompare(b[field])
      })
    },
    sortDesc (items, field) {
      return items.slice().sort((a, b) => {
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
    refreshFields () {
      this.$nextTick(() => {
        this.$refs.vuetable.normalizeFields()
      })
    },
    rowClicked (row) {
      this.$emit('row-clicked', row)
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-data-table {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: auto;

  &__vuetable {
    width: 100%;

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

  &__pagination {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
}
</style>
