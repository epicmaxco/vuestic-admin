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

const getSortItem = (obj: any, sortBy: string) => {
  if (sortBy === 'projects') {
    return obj.projects.map((project: any) => project).join(', ')
  }

  return obj[sortBy]
}

export const getUsers = async (filters: Partial<Filters & Pagination & Sorting>) => {
  const { isActive, search, sortBy, sortingOrder } = filters
  let filteredUsers: User[] = await fetch(api.getAllUsers()).then((r) => r.json())

  filteredUsers = filteredUsers.filter((user) => user.isActive === isActive)

  if (search) {
    filteredUsers = filteredUsers.filter((user) => user.fullName.toLowerCase().includes(search.toLowerCase()))
  }

  if (sortBy && sortingOrder) {
    filteredUsers = filteredUsers.sort((a, b) => {
      const first = getSortItem(a, sortBy)
      const second = getSortItem(b, sortBy)
      if (first > second) {
        return sortingOrder === 'asc' ? 1 : -1
      }
      if (first < second) {
        return sortingOrder === 'asc' ? -1 : 1
      }
      return 0
    })
  }

  const { page = 1, perPage = 10 } = filters || {}
  return {
    data: filteredUsers.slice((page - 1) * perPage, page * perPage),
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

  return fetch(api.getAllUsers(), { method: 'POST', body: JSON.stringify(user), headers })
}

export const updateUser = async (user: User) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  return fetch(api.getUser(user.id), { method: 'PUT', body: JSON.stringify(user), headers })
}

export const removeUser = async (user: User) => {
  return fetch(api.getUser(user.id), { method: 'DELETE' })
}
