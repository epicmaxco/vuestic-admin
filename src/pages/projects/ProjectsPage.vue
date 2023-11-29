<script setup lang="ts">
import { ref } from 'vue'
import { useProjects } from './composables/useProjects'
import { Filters } from '../../data/pages/projects'
import ProjectCards from './widgets/ProjectCards.vue'
import ProjectTable from './widgets/ProjectsTable.vue'
import EditProjectForm from './widgets/EditProjectForm.vue'
import { Project } from './types'
import { useToast } from 'vuestic-ui'

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

const { projects, update, add } = useProjects(filters)

const projectToEdit = ref<Project | null>(null)
const doShowProjectFormModal = ref(false)

const editProject = (project: Project) => {
  projectToEdit.value = project
  doShowProjectFormModal.value = true
}

const createNewProject = () => {
  projectToEdit.value = null
  doShowProjectFormModal.value = true
}

const { init } = useToast()

const onProjectSaved = async (project: Project) => {
  if ('id' in project) {
    await update(project as Project)
    init({
      message: 'Project updated',
      color: 'success',
    })
  } else {
    await add(project as Project)
    init({
      message: 'Project created',
      color: 'success',
    })
  }

  doShowProjectFormModal.value = false
}
</script>

<template>
  <h1 class="page-title">Projects</h1>

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
        <VaButton icon="add" @click="createNewProject">Project</VaButton>
      </div>

      <ProjectCards v-if="doShowAsCards" :projects="projects" @edit="editProject" />
      <ProjectTable v-else :projects="projects" @edit="editProject" />
    </VaCardContent>

    <VaModal v-slot="{ hide }" v-model="doShowProjectFormModal" stateful hide-default-actions>
      <h1 v-if="projectToEdit === null" class="va-h5 mb-4">Add project</h1>
      <h1 v-else class="va-h5 mb-4">Edit project</h1>
      <EditProjectForm :project="projectToEdit" @close="hide" @save="onProjectSaved" />
    </VaModal>
  </VaCard>
</template>
