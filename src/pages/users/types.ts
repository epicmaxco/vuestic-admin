export type UserRole = 'ADMIN' | 'USER' | 'OWNER'

export type UUID = `${string}-${string}-${string}-${string}-${string}`

export type User = {
  id: UUID
  fullName: string
  email: string
  username: string
  role: UserRole
  avatar: string
  projects: string[]
  notes: string
  isActive: boolean
}
