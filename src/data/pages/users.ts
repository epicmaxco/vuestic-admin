import { sleep } from '../../services/utils'
import { User } from './../../pages/users/types'
import usersDb from './users-db.json'
import projectsDb from './projects-db.json'

export const users = usersDb as User[]

const getUserProjects = (userId: number | string) => {
  return projectsDb.filter((project) => project.team.includes(Number(userId)))
}

// Simulate API calls
export type Filters = {
  isActive: boolean
  search: string
  pagination: {
    page: number
    perPage: number
    total: number
  }
  sortBy: keyof User | undefined
  sortingOrder: 'asc' | 'desc' | null
}

export const getUsers = async (filters: Partial<Filters>) => {
  await sleep(1000)
  const { isActive, search, sortBy, sortingOrder } = filters
  let filteredUsers = users

  filteredUsers = users.filter((user) => user.active === isActive)

  if (search) {
    filteredUsers = users.filter((user) => user.fullname.toLowerCase().includes(search.toLowerCase()))
  }

  if (sortBy && sortingOrder) {
    filteredUsers = filteredUsers.sort((a, b) => {
      const first = a[sortBy]
      const second = b[sortBy]
      if (first > second) {
        return sortingOrder === 'asc' ? 1 : -1
      }
      if (first < second) {
        return sortingOrder === 'asc' ? -1 : 1
      }
      return 0
    })
  }

  const { page = 1, perPage = 10 } = filters.pagination || {}
  return {
    data: filteredUsers
      .slice((page - 1) * perPage, page * perPage)
      .map((user) => ({ ...user, projects: getUserProjects(user.id) })),
    pagination: {
      page,
      perPage,
      total: filteredUsers.length,
    },
  }
}

export const addUser = async (user: User) => {
  await sleep(1000)
  users.unshift(user)
}

export const updateUser = async (user: User) => {
  await sleep(1000)
  const index = users.findIndex((u) => u.id === user.id)
  users[index] = user
}

export const removeUser = async (user: User) => {
  await sleep(1000)
  users.splice(
    users.findIndex((u) => u.id === user.id),
    1,
  )
}
