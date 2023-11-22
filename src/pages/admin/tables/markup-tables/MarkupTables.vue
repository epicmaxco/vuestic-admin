<template>
  <VaCard class="markup-tables mb-8">
    <VaCardTitle>{{ t('tables.basic') }}</VaCardTitle>
    <VaCardContent class="overflow-auto">
      <table class="va-table w-full">
        <thead>
          <tr>
            <th>{{ t('tables.headings.name') }}</th>
            <th>{{ t('tables.headings.email') }}</th>
            <th>{{ t('tables.headings.country') }}</th>
            <th>{{ t('tables.headings.status') }}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.country }}</td>
            <td>
              <VaBadge :color="getStatusColor(user.status)" :text="user.status" />
            </td>
          </tr>
        </tbody>
      </table>
    </VaCardContent>
  </VaCard>

  <VaCard>
    <VaCardTitle>{{ t('tables.stripedHoverable') }}</VaCardTitle>
    <VaCardContent class="overflow-auto">
      <table class="va-table va-table--striped va-table--hoverable w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.country }}</td>
            <td>
              <VaBadge :color="getStatusColor(user.status)" :text="user.status" />
            </td>
          </tr>
        </tbody>
      </table>
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import data from '../../../../data/tables/markup-table/data.json'

const { t } = useI18n()

const users = ref(data.slice(0, 8))

function getStatusColor(status: string) {
  if (status === 'paid') {
    return 'success'
  }

  if (status === 'processing') {
    return 'info'
  }

  return 'danger'
}
</script>
