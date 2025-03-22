<template>
  <VaDataTable
    v-model:sort-by="sortByVModel"
    v-model:sorting-order="sortingOrderVModel"
    :columns="columns"
    :items="items"
    :loading="loading"
  >
    <template v-for="col in columns" :key="col.key" #[`cell(${col.key})`]="{ rowData }">
      <slot :name="`cell(${col.key})`" :rowData="rowData">
        {{ rowData[col.key] }}
      </slot>
    </template>

    <template #cell(actions)="{ rowData }">
      <slot name="actions" :rowData="rowData">
        <div class="flex gap-2 justify-end">
          <VaButton
            preset="primary"
            size="small"
            icon="mso-edit"
            aria-label="Edit item"
            @click="$emit('edit-item', rowData)"
          />
          <VaButton
            preset="primary"
            size="small"
            icon="mso-delete"
            color="danger"
            aria-label="Delete item"
            @click="$emit('delete-item', rowData)"
          />
        </div>
      </slot>
    </template>
  </VaDataTable>

  <div class="flex flex-col-reverse md:flex-row gap-2 justify-between items-center py-2">
    <div>
      <b>{{ pagination.total }} results.</b>
      Results per page
      <VaSelect v-model="pagination.perPage" class="!w-20" :options="[10, 50, 100]" />
    </div>

    <div v-if="totalPages > 1" class="flex">
      <VaButton
        preset="secondary"
        icon="va-arrow-left"
        aria-label="Previous page"
        :disabled="pagination.page === 1"
        @click="pagination.page--"
      />
      <VaButton
        class="mr-2"
        preset="secondary"
        icon="va-arrow-right"
        aria-label="Next page"
        :disabled="pagination.page === totalPages"
        @click="pagination.page++"
      />
      <VaPagination
        v-model="pagination.page"
        buttons-preset="secondary"
        :pages="totalPages"
        :visible-pages="5"
        :boundary-links="false"
        :direction-links="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { VaDataTable, VaButton, VaSelect, VaPagination } from 'vuestic-ui';

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  ellipsis?: boolean;
}

interface Pagination {
  page: number;
  perPage: number;
  total: number;
}

const props = defineProps<{
  columns: Column[];
  items: any[];
  loading?: boolean;
  pagination: Pagination;
  sortBy?: string;
  sortingOrder?: 'asc' | 'desc';
}>();

const emit = defineEmits(['edit-item', 'delete-item', 'update:sortBy', 'update:sortingOrder', 'update:pagination']);

const sortByVModel = computed({
  get: () => props.sortBy,
  set: (val) => emit('update:sortBy', val),
});

const sortingOrderVModel = computed({
  get: () => props.sortingOrder,
  set: (val) => emit('update:sortingOrder', val),
});

const totalPages = computed(() => {
  return Math.ceil(props.pagination.total / props.pagination.perPage);
});

</script>

<style lang="scss" scoped>
.va-data-table {
  ::v-deep(.va-data-table__table-tr) {
    border-bottom: 1px solid var(--va-background-border);
  }
}
</style>
