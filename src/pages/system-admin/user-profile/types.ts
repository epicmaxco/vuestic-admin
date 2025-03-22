export type UserRole = 'admin' | 'user' | 'owner'

export type UUID = `${string}-${string}-${string}-${string}-${string}`

export type User = {
  id: UUID
  email: string
  username: string
  password: string
  active: boolean
}
