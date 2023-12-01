import { Project } from '../projects/types'

export type UserRole = 'admin' | 'user' | 'owner'

export type User = {
  id: number
  fullname: string
  email: string
  username: string
  role: UserRole
  avatar: string
  projects: Project[]
  notes: string
  active: boolean
}
