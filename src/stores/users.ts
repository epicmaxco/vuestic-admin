import { defineStore } from 'pinia'
import {
  addUser,
  type Filters,
  getUsers,
  Pagination,
  removeUser,
  Sorting,
  updateUser,
  uploadAvatar,
} from '../data/pages/users'
import { User } from '../pages/users/types'

export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      items: [] as User[],
      pagination: { page: 1, perPage: 10, total: 0 },
    }
  },

  actions: {
    async getAll(options: { pagination?: Pagination; sorting?: Sorting; filters?: Partial<Filters> }) {
      const { data, pagination } = await getUsers({
        ...options.filters,
        ...options.sorting,
        ...options.pagination,
      })
      this.items = data
      this.pagination = pagination
    },

    async add(user: User) {
      const [newUser] = await addUser(user)
      this.items.unshift(newUser)
      return newUser
    },

    async update(user: User) {
      const [updatedUser] = await updateUser(user)
      const index = this.items.findIndex(({ id }) => id === user.id)
      this.items.splice(index, 1, updatedUser)
      return updatedUser
    },

    async remove(user: User) {
      const isRemoved = await removeUser(user)

      if (isRemoved) {
        const index = this.items.findIndex(({ id }) => id === user.id)
        this.items.splice(index, 1)
      }
    },

    async uploadAvatar(formData: FormData) {
      return uploadAvatar(formData)
    },
  },
})
