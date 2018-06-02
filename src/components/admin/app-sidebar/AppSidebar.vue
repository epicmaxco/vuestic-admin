<template>
  <vuestic-sidebar :hidden="this.opened"
                   :toggleWithoutAnimation="toggleWithoutAnimation"
                   :items="menuItems"
                   @toggle-item="toggleMenuItem($event)"/>
</template>

<script>

  import VuesticSidebar from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
  import {mapGetters} from 'vuex'

  export default {
    name: 'app-sidebar',
    components: {
      VuesticSidebar
    },
    props: {
      opened: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      toggleMenuItem (item) {
        item.meta.expanded = !item.meta.expanded
      }
    },
    watch: {
      $route (route) {
        let parent = _findMatchingParentMenuItem.call(this, route.name) || {}
        this.menuItems.forEach((item) => {
          this.$store.dispatch('toggleExpandMenuItem', {
            menuItem: item,
            expand: parent.name === item.name
          })
        })
      }
    },
    data () {
      return {
        show: false
      }
    },
    computed: {
      ...mapGetters([
        'toggleWithoutAnimation'
      ]),
      menuItems () {
        return [
          {
            path: '/admin/dashboard',
            meta: {
              title: 'menu.dashboard',
              iconClass: 'vuestic-icon vuestic-icon-dashboard'
            }
          },
          {
            meta: {
              expanded: false,
              title: 'menu.statistics',
              iconClass: 'vuestic-icon vuestic-icon-statistics'
            },
            children: [
              {
                path: '/admin/statistics/charts',
                meta: {
                  title: 'menu.charts'
                }
              },
              {
                path: '/admin/statistics/progress-bars',
                meta: {
                  title: 'menu.progressBars'
                }
              }
            ]
          },
          {
            meta: {
              expanded: false,
              title: 'menu.forms',
              iconClass: 'vuestic-icon vuestic-icon-forms'
            },
            children: [
              {
                path: '/admin/forms/form-elements',
                meta: {
                  title: 'menu.formElements'
                }
              },
              {
                path: '/admin/forms/form-wizard',
                meta: {
                  title: 'menu.formWizards'
                }
              },
              {
                path: '/admin/forms/medium-editor',
                meta: {
                  title: 'Medium Editor'
                }
              }
            ]
          },
          {
            meta: {
              title: 'menu.tables',
              iconClass: 'vuestic-icon vuestic-icon-tables'
            },
            path: '/tables'
          },
          {
            name: 'ui',
            meta: {
              expanded: false,
              title: 'menu.uiElements',
              iconClass: 'vuestic-icon vuestic-icon-ui-elements'
            },
            children: [
              {
                path: '/admin/ui/typography',
                meta: {
                  title: 'menu.typography'
                }
              },
              {
                path: '/admin/ui/buttons',
                meta: {
                  title: 'menu.buttons'
                }
              },
              {
                path: '/admin/ui/notifications',
                meta: {
                  title: 'menu.notifications'
                }
              },
              {
                path: '/admin/ui/icons',
                meta: {
                  title: 'menu.icons'
                },
                children: [
                  {
                    path: '', // Default route
                    meta: {
                      title: 'menu.icons'
                    }
                  },
                  {
                    path: ':name',
                    props: true,
                    meta: {
                      title: 'Set'
                    }
                  }
                ]
              },
              {
                path: '/admin/ui/spinners',
                meta: {
                  title: 'menu.spinners'
                }
              },
              {
                path: '/admin/ui/grid',
                meta: {
                  title: 'menu.grid'
                }
              },
              {
                path: '/admin/ui/modals',
                meta: {
                  title: 'menu.modals'
                }
              },
              {
                path: '/admin/ui/tree-view',
                meta: {
                  title: 'menu.treeView'
                }
              },
            ]
          },
          {
            path: '/admin/extra',
            meta: {
              title: 'menu.extra',
              iconClass: 'vuestic-icon vuestic-icon-extras',
              expanded: false
            }
          },
          {
            meta: {
              expanded: false,
              title: 'menu.auth',
              iconClass: 'vuestic-icon vuestic-icon-auth'
            },
            children: [
              {
                path: '/admin/auth/login',
                meta: {
                  title: 'menu.login',
                  newWindow: true
                }
              },
              {
                path: '/admin/auth/signup',
                meta: {
                  title: 'menu.signUp',
                  newWindow: true
                }
              }
            ]
          },
          {
            meta: {
              expanded: false,
              title: 'menu.maps',
              iconClass: 'vuestic-icon vuestic-icon-maps'
            },
            children: [
              {
                path: '/admin/maps/google-maps',
                meta: {
                  title: 'Google Maps'
                }
              },
              {
                path: '/admin/maps/yandex-maps',
                meta: {
                  title: 'Yandex Maps'
                }
              },
              {
                path: '/admin/maps/leaflet-maps',
                meta: {
                  title: 'Leaflet Maps'
                }
              },
              {
                path: '/admin/maps/bubble-maps',
                meta: {
                  title: 'Bubble Maps'
                }
              },
              {
                path: '/admin/maps/line-maps',
                meta: {
                  title: 'Line Maps'
                }
              }
            ]
          }
        ]
      }
    }
  }

  function _findMatchingParentMenuItem (itemName) {
    let parentItem
    this.menuItems.forEach((item) => {
      parentItem = (item.children && item.children.find((child) => child.name === itemName)) ? item : parentItem
    })
    return parentItem
  }
</script>
