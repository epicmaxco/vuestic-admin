<script setup lang="ts">
import { ref } from 'vue'
import { useProjects } from './composables/useProjects'
import ProjectCards from './widgets/ProjectCards.vue'
import { Filters } from '../../data/pages/projects'

const doShowAsCards = ref(true)

const filters = ref<Filters>({
  pagination: {
    page: 1,
    perPage: 10,
    total: 10,
  },
  sortBy: 'creation_date',
  sortingOrder: 'desc',
})

const { projects } = useProjects(filters)
</script>

<template>
  <h1 class="page-title">Users</h1>

  <VaCard>
    <VaCardContent>
      <div class="flex flex-col md:flex-row gap-2 mb-2">
        <div class="flex flex-col md:flex-row gap-2 justify-start">
          <VaButtonToggle
            v-model="doShowAsCards"
            color="background-element"
            border-color="background-element"
            :options="[
              { label: 'Cards', value: true },
              { label: 'Table', value: false },
            ]"
          />
        </div>
        <VaSpacer />
        <VaButton icon="add">Project</VaButton>
      </div>

      <ProjectCards :projects="projects" />
    </VaCardContent>
  </VaCard>
</template>
