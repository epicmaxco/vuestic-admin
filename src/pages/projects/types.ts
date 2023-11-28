import { User } from '../users/types'

export type Project = {
  project_name: string
  project_owner: Omit<User, 'projects'>
  team: Omit<User, 'projects'>[]
  status: 'important' | 'completed' | 'archived' | 'wip'
  creation_date: '1 Oct 2023'
}
