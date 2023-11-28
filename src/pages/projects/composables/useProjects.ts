import { Ref, ref, unref, watch } from 'vue'
import { getProjects, Filters } from '../../../data/pages/projects'
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

    // async add(user: User) {
    //   isLoading.value = true
    //   await addUser(user)
    //   projects.value.unshift(user)
    //   isLoading.value = false
    // },

    // async update(user: User) {
    //   isLoading.value = true
    //   await updateUser(user)
    //   projects.value = projects.value.map((u) => (u.id === user.id ? user : u))
    //   isLoading.value = false
    // },

    // async remove(user: User) {
    //   isLoading.value = true
    //   await removeUser(user)
    //   projects.value = projects.value.filter((u) => u.id !== user.id)
    //   isLoading.value = false
    // },
  }
}
