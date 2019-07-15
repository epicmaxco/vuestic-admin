<template>
  <div>
    <vuetable
      :api-mode="false"
      :fields="fields"
      :data-manager="dataManager"
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
  </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'

export default {
  components: {
    Vuetable,
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
  },
  data () {
    return {
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
  methods: {
    dataManager (sortOrder) {
      if (!sortOrder.length) {
        return { data: this.data }
      }

      const { sortField, direction } = sortOrder[0]

      let sorted = direction === 'asc' ? this.sortAsc(this.data, sortField) : this.sortDesc(this.data, sortField)

      return {
        data: sorted,
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
  },
}
</script>

<style lang="scss">
  @import "../../vuestic-sass/resources/resources";

  .va-table {
    width: 100%;

    th, td {
      padding: 10px 4px;
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
  }
</style>
