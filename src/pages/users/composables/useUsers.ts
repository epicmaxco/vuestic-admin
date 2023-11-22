import { Ref, ref, unref, watch } from 'vue'
import { getUsers, updateUser, addUser, removeUser, type Filters } from '../../../data/pages/users'
import { InactiveUser, User } from '../types'

export const useUsers = (filters: Ref<Filters>) => {
  const isLoading = ref(false)
  const users = ref<(User | InactiveUser)[]>([])

  let stopFiltersWatcher: () => void
  const fetch = async () => {
    isLoading.value = true
    const { data, pagination } = await await getUsers(unref(filters))
    users.value = data

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

    users,

    fetch,

    async add(user: User) {
      isLoading.value = true
      await addUser(user)
      await fetch()
      isLoading.value = false
    },

    async update(user: User) {
      isLoading.value = true
      await updateUser(user)
      await fetch()
      isLoading.value = false
    },

    async remove(user: User) {
      isLoading.value = true
      await removeUser(user)
      await fetch()
      isLoading.value = false
    },
  }
}
