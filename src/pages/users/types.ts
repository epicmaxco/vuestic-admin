import { Project } from '../projects/types'

export type UserRole = 'admin' | 'user' | 'owner'

export type BaseUser = {
  id: number
  fullname: string
  email: string
  username: string
  role: UserRole
  avatar: string
  notes: string
  active: boolean
}

export type User = BaseUser & { projects: Project[] }
