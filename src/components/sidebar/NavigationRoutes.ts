export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    //System Administration
    {
      name: 'system_administration',
      displayName: 'menu.system_administration',
      meta: {
        icon: 'folder_shared',
      },
      children: [
        {
          name: 'users_profile',
          displayName: 'menu.users_profile',
        },
        {
          name: 'company_profile',
          displayName: 'menu.company_profile',
        },
        {
          name: 'warehouses',
          displayName: 'menu.warehouses',
        },
        {
          name: 'menu',
          displayName: 'menu.menu',
        },
        {
          name: 'user_warehouse_access',
          displayName: 'menu.user_warehouse_access',
        },
        {
          name: 'reset_transaction',
          displayName: 'menu.reset_transaction',
        },
      ],
    },
    //Warehouse Management
    {
      name: 'warehouse_management',
      displayName: 'menu.warehouse_management',
      meta: {
        icon: 'folder_shared',
      },
      children: [
        {
          name: 'supplier_master',
          displayName: 'menu.supplier_master',
        },
        {
          name: 'trucker_master',
          displayName: 'menu.trucker_master',
        },
        {
          name: 'customer_master',
          displayName: 'menu.customer_master',
        },
        {
          name: 'location_group',
          displayName: 'menu.location_group',
        },
        {
          name: 'location_master',
          displayName: 'menu.location_master',
        },
        {
          name: 'unit_of_measures',
          displayName: 'menu.unit_of_measures',
        },
        {
          name: 'item_master',
          displayName: 'menu.item_master',
        },
      ],
    },
    //Inbound
    {
      name: 'inbound',
      displayName: 'menu.inbound',
      meta: {
        icon: 'folder_shared',
      },
      children: [
        {
          name: 'purchase_order',
          displayName: 'menu.purchase_order',
        },
        {
          name: 'receive_shipments',
          displayName: 'menu.receive_shipments',
        },
        {
          name: 'batch_tagging',
          displayName: 'menu.batch_tagging',
        },
        {
          name: 'confirm_batch_tag',
          displayName: 'menu.confirm_batch_tag',
        },
        {
          name: 'cancel_batch_tag',
          displayName: 'menu.cancel_batch_tag',
        },
        {
          name: 'batch_tag_picklist',
          displayName: 'menu.batch_tag_picklist',
        },
        {
          name: 'put_away',
          displayName: 'menu.put_away',
        },
        {
          name: 'put_away_picklist',
          displayName: 'menu.put_away_picklist',
        },
        {
          name: 'put_away_confirm',
          displayName: 'menu.put_away_confirm',
        },
        {
          name: 'put_away_cancel',
          displayName: 'menu.put_away_cancel',
        },
      ],
    },
    //outbound
    {
      name: 'outbound',
      displayName: 'menu.outbound',
      meta: {
        icon: 'folder_shared',
      },
      children: [
        {
          name: 'issuance_request',
          displayName: 'menu.issuance_request',
        },
        {
          name: 'allocate_inventory',
          displayName: 'menu.allocate_inventory',
        },
        {
          name: 'issuance_picklist',
          displayName: 'menu.issuance_picklist',
        },
        {
          name: 'cancel_issuance_allocation',
          displayName: 'menu.cancel_issuance_allocation',
        },
        {
          name: 'issuance_pick_confirm',
          displayName: 'menu.issuance_pick_confirm',
        },
        {
          name: 'issuance_ship_out_confirm',
          displayName: 'menu.issuance_ship_out_confirm',
        },
        {
          name: 'issuance_ship_out_cancel',
          displayName: 'menu.issuance_ship_out_cancel',
        },
      ],
    },
    //report
    {
      name: 'report',
      displayName: 'menu.report',
      meta: {
        icon: 'folder_shared',
      },
      children: [
        {
          name: 'goods_received',
          displayName: 'menu.goods_received',
        },
        {
          name: 'good_issued',
          displayName: 'menu.good_issued',
        },
        {
          name: 'item_inventory',
          displayName: 'menu.item_inventory',
        },
        {
          name: 'monthly_inventory_ageing',
          displayName: 'menu.monthly_inventory_ageing',
        },
        {
          name: 'movement_history',
          displayName: 'menu.movement_history',
        },
        {
          name: 'movement_pending',
          displayName: 'menu.movement_pending',
        },
        {
          name: 'batch_info_report',
          displayName: 'menu.batch_info_report',
        },
      ],
    },
    //upload data
    {
      name: 'upload_master_files',
      displayName: 'menu.upload_master_files',
      meta: {
        icon: 'folder_shared',
      },
      children: [
        {
          name: 'item_master_upload',
          displayName: 'menu.item_master_upload',
        },
        {
          name: 'location_master_upload',
          displayName: 'menu.location_master_upload',
        },
        {
          name: 'inventory_upload',
          displayName: 'menu.inventory_upload',
        },
      ],
    },
    //data maintenance
    {
      name: 'data_maintenance',
      displayName: 'menu.data_maintenance',
      meta: {
        icon: 'folder_shared',
      },
      children: [
        {
          name: 'batch_lot_update',
          displayName: 'menu.batch_lot_update',
        },
        {
          name: 'batch_lock',
          displayName: 'menu.batch_lock',
        },
      ],
    },
    {
      name: 'users',
      displayName: 'menu.users',
      meta: {
        icon: 'group',
      },
    },
    {
      name: 'projects',
      displayName: 'menu.projects',
      meta: {
        icon: 'folder_shared',
      },
    },
    {
      name: 'payments',
      displayName: 'menu.payments',
      meta: {
        icon: 'credit_card',
      },
      children: [
        {
          name: 'payment-methods',
          displayName: 'menu.payment-methods',
        },
        {
          name: 'pricing-plans',
          displayName: 'menu.pricing-plans',
        },
        {
          name: 'billing',
          displayName: 'menu.billing',
        },
      ],
    },
    {
      name: 'reports',
      displayName: 'reports',
      meta: {
        icon: 'credit_card',
      },
      children: [
        {
          name: 'goods-received',
          displayName: 'goods-received',
        },
        {
          name: 'inventory-list',
          displayName: 'inventory-list',
        },
      ],
    },
    {
      name: 'auth',
      displayName: 'menu.auth',
      meta: {
        icon: 'login',
      },
      children: [
        {
          name: 'login',
          displayName: 'menu.login',
        },
        {
          name: 'signup',
          displayName: 'menu.signup',
        },
        {
          name: 'recover-password',
          displayName: 'menu.recover-password',
        },
      ],
    },

    {
      name: 'faq',
      displayName: 'menu.faq',
      meta: {
        icon: 'quiz',
      },
    },
    {
      name: '404',
      displayName: 'menu.404',
      meta: {
        icon: 'vuestic-iconset-files',
      },
    },
    {
      name: 'preferences',
      displayName: 'menu.preferences',
      meta: {
        icon: 'manage_accounts',
      },
    },
    {
      name: 'settings',
      displayName: 'menu.settings',
      meta: {
        icon: 'settings',
      },
    },
  ] as INavigationRoute[],
}
