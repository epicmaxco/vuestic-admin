const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

export default {
  getAllUsers: () => `${apiBaseUrl}/users`,
  getUser: (id: string) => `${apiBaseUrl}/users/${id}`,
  getUsers: ({ page, pageSize }: { page: number; pageSize: number }) =>
    `${apiBaseUrl}/users/?page=${page}&pageSize=${pageSize}`,
}
