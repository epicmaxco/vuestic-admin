import { User } from '../../pages/users/types'
import { sleep } from '../../services/utils'
import projectsDb from './projects-db.json'
import usersDb from './users-db.json'

// Simulate API calls
export type Filters = {
  pagination: {
    page: number
    perPage: number
    total: number
  }
  sortBy: keyof (typeof projectsDb)[number] | undefined
  sortingOrder: 'asc' | 'desc' | null
}

export const getProjects = async (filters: Filters) => {
  await sleep(1000)

  const projects = projectsDb.map((project) => ({
    ...project,
    project_owner: usersDb.find((user) => user.id === project.project_owner)! as User,
    team: usersDb.filter((user) => project.team.includes(user.id)) as User[],
  }))

  return {
    data: projects,
    pagination: {
      page: filters.pagination.page,
      perPage: filters.pagination.perPage,
      total: projectsDb.length,
    },
  }
}
