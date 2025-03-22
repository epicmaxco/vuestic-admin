import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'

import RouteViewComponent from '../layouts/RouterBypass.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'dashboard' },
  },
  {
    name: 'admin',
    path: '/',
    component: AppLayout,
    redirect: { name: 'dashboard' },
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
      },
      //System Administration
      {
        name: 'system_administration',
        path: '/system_administration',
        component: RouteViewComponent,
        children: [
          {
            name: 'users_profile',
            path: 'users_profile',
            component: () => import('../pages/system-admin/user-profile/UsersPage.vue'),
          },
          {
            name: 'company_profile',
            path: 'company_profile',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
          {
            name: 'menu',
            path: 'menu',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'warehouses',
            path: 'warehouses',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'user_warehouse_access',
            path: 'user_warehouse_access',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'reset_transaction',
            path: 'reset_transaction',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
        ],
      },
      //warehouse management
      {
        name: 'warehouse_management',
        path: '/warehouse_management',
        component: RouteViewComponent,
        children: [
          {
            name: 'supplier_master',
            path: 'supplier_master',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
          {
            name: 'trucker_master',
            path: 'trucker_master',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
          {
            name: 'customer_master',
            path: 'customer_master',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'location_group',
            path: 'location_group',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'location_master',
            path: 'location_master',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'unit_of_measures',
            path: 'unit_of_measures',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'item_master',
            path: 'item_master',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
        ],
      },

      //Inbound
      {
        name: 'inbound',
        path: '/inbound',
        component: RouteViewComponent,
        children: [
          {
            name: 'purchase_order',
            path: 'purchase_order',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
          {
            name: 'receive_shipments',
            path: 'receive_shipments',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
          {
            name: 'batch_tagging',
            path: 'batch_tagging',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'confirm_batch_tag',
            path: 'confirm_batch_tag',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'cancel_batch_tag',
            path: 'cancel_batch_tag',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'batch_tag_picklist',
            path: 'batch_tag_picklist',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'put_away',
            path: 'put_away',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'put_away_picklist',
            path: 'put_away_picklist',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'put_away_confirm',
            path: 'put_away_confirm',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'put_away_cancel',
            path: 'put_away_cancel',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
        ],
      },
      //storage Management
      {
        name: 'storage_management',
        path: '/storage_management',
        component: RouteViewComponent,
        children: [
          {
            name: 'stock_transfer',
            path: 'stock_transfer',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
          {
            name: 'stock_transfer_picklist',
            path: 'stock_transfer_picklist',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
          {
            name: 'stock_transfer_confirm',
            path: 'stock_transfer_confirm',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'stock_transfer_cancel',
            path: 'stock_transfer_cancel',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
        ],
      },
      //outbound
      {
        name: 'outbound',
        path: '/outbound',
        component: RouteViewComponent,
        children: [
          {
            name: 'issuance_request',
            path: 'issuance_request',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
          {
            name: 'allocate_inventory',
            path: 'allocate_inventory',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
          {
            name: 'issuance_picklist',
            path: 'issuance_picklist',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'cancel_issuance_allocation',
            path: 'cancel_issuance_allocation',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'issuance_pick_confirm',
            path: 'issuance_pick_confirm',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'issuance_ship_out_confirm',
            path: 'issuance_ship_out_confirm',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'issuance_ship_out_cancel',
            path: 'issuance_ship_out_cancel',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
        ],
      },
      //report
      {
        name: 'report',
        path: '/report',
        component: RouteViewComponent,
        children: [
          {
            name: 'goods_received',
            path: 'goods_received',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
          {
            name: 'good_issued',
            path: 'good_issued',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
          {
            name: 'item_inventory',
            path: 'item_inventory',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'monthly_inventory_ageing',
            path: 'monthly_inventory_ageing',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'movement_history',
            path: 'movement_history',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'movement_pending',
            path: 'movement_pending',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'batch_info_report',
            path: 'batch_info_report',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
        ],
      },
      //upload data
      {
        name: 'upload_master_files',
        path: '/upload_master_files',
        component: RouteViewComponent,
        children: [
          {
            name: 'item_master_upload',
            path: 'item_master_upload',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
          {
            name: 'location_master_upload',
            path: 'location_master_upload',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
          {
            name: 'inventory_upload',
            path: 'inventory_upload',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
        ],
      },
      //data maintenance
      {
        name: 'data_maintenance',
        path: '/data_maintenance',
        component: RouteViewComponent,
        children: [
          {
            name: 'batch_lot_update',
            path: 'batch_lot_update',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
          {
            name: 'batch_lock',
            path: 'batch_lock',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
        ],
      },
      {
        name: 'settings',
        path: 'settings',
        component: () => import('../pages/settings/Settings.vue'),
      },
      {
        name: 'preferences',
        path: 'preferences',
        component: () => import('../pages/preferences/Preferences.vue'),
      },
      {
        name: 'users',
        path: 'users',
        component: () => import('../pages/users/UsersPage.vue'),
      },
      {
        name: 'projects',
        path: 'projects',
        component: () => import('../pages/projects/ProjectsPage.vue'),
      },
      {
        name: 'payments',
        path: '/payments',
        component: RouteViewComponent,
        children: [
          {
            name: 'payment-methods',
            path: 'payment-methods',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
          {
            name: 'billing',
            path: 'billing',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
          {
            name: 'pricing-plans',
            path: 'pricing-plans',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
        ],
      },
      {
        name: 'faq',
        path: '/faq',
        component: () => import('../pages/faq/FaqPage.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('../pages/auth/Login.vue'),
      },
      {
        name: 'signup',
        path: 'signup',
        component: () => import('../pages/auth/Signup.vue'),
      },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: () => import('../pages/auth/RecoverPassword.vue'),
      },
      {
        name: 'recover-password-email',
        path: 'recover-password-email',
        component: () => import('../pages/auth/CheckTheEmail.vue'),
      },
      {
        path: '',
        redirect: { name: 'login' },
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('../pages/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      window.scrollTo(0, 0)
    }
  },
  routes,
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/auth/login', '/auth/signup', '/auth/recover-password', '/auth/recover-password-email', '/404']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('token')

  if (authRequired && !loggedIn) {
    next('/auth/login')
  } else {
    next()
  }
})

export default router
