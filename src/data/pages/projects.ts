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
    project_owner: usersDb.find((user) => user.id === project.project_owner)! as (typeof usersDb)[number],
    team: usersDb.filter((user) => project.team.includes(user.id)) as (typeof usersDb)[number][],
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

export const addProject = async (project: Omit<(typeof projectsDb)[number], 'id' | 'creation_date'>) => {
  await sleep(1000)

  const newProject = {
    ...project,
    id: projectsDb.length + 1,
    creation_date: new Date().toLocaleDateString('gb', { day: 'numeric', month: 'long', year: 'numeric' }),
  }

  projectsDb.push(newProject)

  return {
    ...newProject,
    project_owner: usersDb.find((user) => user.id === project.project_owner)! as (typeof usersDb)[number],
    team: usersDb.filter((user) => project.team.includes(user.id)) as (typeof usersDb)[number][],
  }
}

export const updateProject = async (project: (typeof projectsDb)[number]) => {
  await sleep(1000)

  const index = projectsDb.findIndex((p) => p.id === project.id)
  projectsDb[index] = project

  return project
}

export const removeProject = async (project: (typeof projectsDb)[number]) => {
  await sleep(1000)

  const index = projectsDb.findIndex((p) => p.id === project.id)
  projectsDb.splice(index, 1)

  return project
}
