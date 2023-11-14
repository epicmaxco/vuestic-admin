import { sleep } from './../services/utils'
import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { User } from '../pages/users/types'
import { inactiveUsers } from '../data/pages/users'

const apiFetchUsers = async (pagination: { page: number; perPage: number }) => {
  await sleep(1000)
  return {
    data: inactiveUsers.slice((pagination.page - 1) * pagination.perPage, pagination.page * pagination.perPage),
    pagination: {
      page: pagination.page,
      perPage: pagination.perPage,
      total: inactiveUsers.length,
    },
  }
}

export const useInactiveUsersStore = defineStore('inactiveUsers', () => {
  const users = ref([] as User[])
  const loading = ref(false)
  const pagination = ref({
    page: 1,
    perPage: 10,
    total: 25,
  })

  const totalPages = computed(() => Math.ceil(pagination.value.total / pagination.value.perPage))

  const load = async () => {
    loading.value = true
    const response = await apiFetchUsers(pagination.value)
    users.value = response.data
    pagination.value = response.pagination
    loading.value = false
  }

  watch([() => pagination.value.perPage, () => pagination.value.page], () => {
    load()
  })

  return {
    users,
    pagination,
    loading,
    totalPages,
    load,
  }
})
