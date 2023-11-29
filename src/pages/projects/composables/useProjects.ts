import { Ref, ref, unref, watch } from 'vue'
import { getProjects, addProject, updateProject, removeProject, Filters } from '../../../data/pages/projects'
import { Project } from '../types'

export const useProjects = (filters: Ref<Filters>) => {
  const isLoading = ref(false)
  const projects = ref<Project[]>([])

  let stopFiltersWatcher: () => void
  const fetch = async () => {
    isLoading.value = true
    const { data, pagination } = await getProjects(unref(filters))
    projects.value = data as Project[]

    if (stopFiltersWatcher) {
      stopFiltersWatcher()
    }
    filters.value.pagination = pagination
    stopFiltersWatcher = watch(filters, fetch, { deep: true })

    isLoading.value = false
  }

  fetch()

  return {
    isLoading,

    projects,

    fetch,

    async add(project: Omit<Project, 'id' | 'creation_date'>) {
      isLoading.value = true
      const createdProject = await addProject({
        ...project,
        project_owner: project.project_owner.id,
        team: project.team.map((user) => user.id),
      })
      projects.value.unshift(createdProject as Project)
      isLoading.value = false
    },

    async update(project: Project) {
      isLoading.value = true
      await updateProject({
        ...project,
        project_owner: project.project_owner.id,
        team: project.team.map((user) => user.id),
      })
      projects.value = projects.value.map((u) => (u.id === project.id ? project : u))
      isLoading.value = false
    },

    async remove(project: Project) {
      isLoading.value = true
      await removeProject({
        ...project,
        project_owner: project.project_owner.id,
        team: project.team.map((user) => user.id),
      })
      projects.value = projects.value.filter((u) => u.id !== project.id)
      isLoading.value = false
    },
  }
}
