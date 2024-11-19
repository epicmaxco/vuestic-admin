import { Ref, ref, unref, watch, computed } from 'vue'
import type { Filters, Pagination, Sorting } from '../../../data/pages/users'
import { User } from '../types'
import { useUsersStore } from '../../../stores/users'

const makePaginationRef = () => ref<Pagination>({ page: 1, perPage: 10, total: 0 })
const makeSortingRef = () => ref<Sorting>({ sortBy: 'fullname', sortingOrder: null })
const makeFiltersRef = () => ref<Partial<Filters>>({ isActive: true, search: '' })

export const useUsers = (options?: {
  pagination?: Ref<Pagination>
  sorting?: Ref<Sorting>
  filters?: Ref<Partial<Filters>>
}) => {
  const isLoading = ref(false)
  const usersStore = useUsersStore()

  const { filters = makeFiltersRef(), sorting = makeSortingRef(), pagination = makePaginationRef() } = options || {}

  const fetch = async () => {
    isLoading.value = true
    await usersStore.getAll({
      filters: unref(filters),
      sorting: unref(sorting),
      pagination: unref(pagination),
    })

    isLoading.value = false
  }

  watch(
    filters,
    () => {
      // Reset pagination to first page when filters changed
      pagination.value.page = 1
      fetch()
    },
    { deep: true },
  )

  fetch()

  return {
    isLoading,
    filters,
    sorting,
    pagination,

    users: computed(() => usersStore.items),

    fetch,

    async add(user: User) {
      isLoading.value = true
      await usersStore.add(user)
      isLoading.value = false
    },

    async update(user: User) {
      isLoading.value = true
      await usersStore.update(user)
      isLoading.value = false
    },

    async remove(user: User) {
      isLoading.value = true
      await usersStore.remove(user)
      isLoading.value = false
    },
  }
}
