export type NavigationRoute = {
  name: string
  path: string
  icon?: string
  children?: NavigationRoute[]
}

export const navigationRoutes: NavigationRoute[] = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    icon: 'space_dashboard',
  },
  {
    name: 'Favorite',
    path: '/',
    icon: 'favorite',
  },
  {
    name: 'Scheduled events',
    path: '',
    icon: 'calendar_today',
    children: [
      {
        name: 'Parties',
        path: '/',
      },
      {
        name: 'Work',
        path: '/',
      },
      {
        name: 'Singing',
        path: '/',
      },
    ],
  },
  {
    name: 'Transfers',
    path: '/',
    icon: 'swap_horiz',
  },
  {
    name: 'Users',
    path: '/',
    icon: 'account_circle',
  },
  {
    name: 'Rules',
    path: '/',
    icon: 'block',
  },
  {
    name: 'Profile',
    path: '/',
    icon: 'lunch_dining',
  },
]

export const navigationRoutes_2: NavigationRoute[] = [
  {
    name: 'admin-dashboard',
    path: '/',
  },
  {
    name: 'promo',
    path: '/',
  },
  {
    name: 'ui-components',
    path: '/',
  },
]

export const settings: NavigationRoute[] = [
  {
    name: 'Help',
    path: '/',
    icon: 'info',
  },
  {
    name: 'Settings',
    path: '/',
    icon: 'settings',
  },
  {
    name: 'Log out',
    path: '/',
    icon: 'logout',
  },
]
