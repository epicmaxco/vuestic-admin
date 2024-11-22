import { User } from '../../pages/users/types'
import api from '../../services/api'

export type Pagination = {
  page: number
  perPage: number
  total: number
}

export type Sorting = {
  sortBy: keyof User | undefined
  sortingOrder: 'asc' | 'desc' | null
}

export type Filters = {
  isActive: boolean
  search: string
}

export const getUsers = async (filters: Partial<Filters & Pagination & Sorting>) => {
  const { isActive, search } = filters
  let filteredUsers: User[] = await fetch(api.allUsers()).then((r) => r.json())

  filteredUsers = filteredUsers.filter((user) => user.active === isActive)

  if (search) {
    filteredUsers = filteredUsers.filter((user) => user.fullname.toLowerCase().includes(search.toLowerCase()))
  }

  const { page = 1, perPage = 10 } = filters || {}
  return {
    data: filteredUsers,
    pagination: {
      page,
      perPage,
      total: filteredUsers.length,
    },
  }
}

export const addUser = async (user: User) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const result = await fetch(api.allUsers(), { method: 'POST', body: JSON.stringify(user), headers }).then((r) =>
    r.json(),
  )

  if (!result.error) {
    return result
  }

  throw new Error(result.error)
}

export const updateUser = async (user: User) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const result = await fetch(api.user(user.id), { method: 'PUT', body: JSON.stringify(user), headers }).then((r) =>
    r.json(),
  )

  if (!result.error) {
    return result
  }

  throw new Error(result.error)
}

export const removeUser = async (user: User) => {
  return fetch(api.user(user.id), { method: 'DELETE' })
}

export const uploadAvatar = async (body: FormData) => {
  return fetch(api.avatars(), { method: 'POST', body, redirect: 'follow' }).then((r) => r.json())
}
