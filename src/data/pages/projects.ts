import api from '../../services/api'
import { Project } from '../../pages/projects/types'

export type Pagination = {
  page: number
  perPage: number
  total: number
}

export type Sorting = {
  sortBy: 'project_owner' | 'team' | 'created_at'
  sortingOrder: 'asc' | 'desc' | null
}

const getSortItem = (obj: any, sortBy: Sorting['sortBy']) => {
  if (sortBy === 'project_owner') {
    return obj.project_owner.fullname
  }

  if (sortBy === 'team') {
    return obj.team.map((user: any) => user.fullname).join(', ')
  }

  if (sortBy === 'created_at') {
    return new Date(obj[sortBy])
  }

  return obj[sortBy]
}

export const getProjects = async (options: Partial<Sorting> & Pagination) => {
  const projects: Project[] = await fetch(api.allProjects()).then((r) => r.json())

  if (options.sortBy && options.sortingOrder) {
    projects.sort((a, b) => {
      a = getSortItem(a, options.sortBy!)
      b = getSortItem(b, options.sortBy!)
      if (a < b) {
        return options.sortingOrder === 'asc' ? -1 : 1
      }
      if (a > b) {
        return options.sortingOrder === 'asc' ? 1 : -1
      }
      return 0
    })
  }

  const normalizedProjects = projects.slice((options.page - 1) * options.perPage, options.page * options.perPage)

  return {
    data: normalizedProjects,
    pagination: {
      page: options.page,
      perPage: options.perPage,
      total: projects.length,
    },
  }
}

export const addProject = async (project: Omit<Project, 'id' | 'created_at'>) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  return fetch(api.allProjects(), { method: 'POST', body: JSON.stringify(project), headers }).then((r) => r.json())
}

export const updateProject = async (project: Omit<Project, 'created_at'>) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  return fetch(api.project(project.id), { method: 'PUT', body: JSON.stringify(project), headers }).then((r) => r.json())
}

export const removeProject = async (project: Project) => {
  return fetch(api.project(project.id), { method: 'DELETE' })
}
