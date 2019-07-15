<template>
  <div>
    <vuetable
      :api-mode="false"
      :fields="fields"
      :data="data"
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
        // detailRowClass: 'va-table-row'
      },
    }
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
    }
  }
</style>
