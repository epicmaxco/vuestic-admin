export type UserRole = 'admin' | 'user' | 'owner'

export type UUID = `${string}-${string}-${string}-${string}-${string}`

export type User = {
  id: UUID
  fullname: string
  email: string
  username: string
  role: UserRole
  avatar: string
  projects: UUID[]
  notes: string
  active: boolean
}
