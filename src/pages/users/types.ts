export type UserRole = 'admin' | 'user' | 'owner'

export type User = {
  id: number
  fullname: string
  email: string
  username: string
  role: UserRole
  avatar: string
  projects: number
  notes: string
}

export type InactiveUser = User & {
  resignedAt: string
}
