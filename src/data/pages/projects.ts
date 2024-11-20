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

export const getProjects = async (options: Partial<Sorting> & Pagination) => {
  const projects: Project[] = await fetch(api.allProjects()).then((r) => r.json())

  return {
    data: projects,
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
