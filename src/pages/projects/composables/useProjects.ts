import { Ref, ref, unref, computed } from 'vue'
import { Sorting, Pagination } from '../../../data/pages/projects'
import { Project } from '../types'
import { useProjectsStore } from '../../../stores/projects'

const makePaginationRef = () => ref<Pagination>({ page: 1, perPage: 10, total: 0 })
const makeSortingRef = () => ref<Sorting>({ sortBy: 'created_at', sortingOrder: 'desc' })

export const useProjects = (options?: { sorting?: Ref<Sorting>; pagination?: Ref<Pagination> }) => {
  const isLoading = ref(false)
  const projectsStore = useProjectsStore()

  const { sorting = makeSortingRef(), pagination = makePaginationRef() } = options ?? {}

  const fetch = async () => {
    isLoading.value = true
    await projectsStore.getAll({
      sorting: unref(sorting),
      pagination: unref(pagination),
    })

    isLoading.value = false
  }

  fetch()

  return {
    isLoading,

    projects: computed(() => projectsStore.items),

    fetch,

    async add(project: Omit<Project, 'id' | 'created_at'>) {
      isLoading.value = true
      await projectsStore.add(project)
      await fetch()
      isLoading.value = false
    },

    async update(project: Project) {
      isLoading.value = true
      await projectsStore.update(project)
      await fetch()
      isLoading.value = false
    },

    async remove(project: Project) {
      isLoading.value = true
      await projectsStore.remove(project)
      await fetch()
      isLoading.value = false
    },

    pagination,
    sorting,
  }
}
