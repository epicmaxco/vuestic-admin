<template>
  <va-navbar class="relative w-screen p-4 md:pr-4 md:pl-6 md:py-2">
    <template #left>
      <div class="flex flex-col items-start md:items-center md:flex-row">
        <div class="flex w-64 py-4 md:p-0">
          <div class="flex items-center h-6">
            <router-link to="/">
              <VuesticAdminLogo />
            </router-link>
          </div>
          <va-icon
            v-show="isOptionsMenuVisible"
            class="absolute right-4 top-8"
            size="24px"
            color="primary"
            name="menu"
          />
        </div>
        <div class="flex items-center md:ml-4 h-5">
          <va-icon-menu
            v-show="isOptionsListVisible"
            :is-sidebar-visible="isSidebarVisible"
            @toggle-sidebar="toggleSidebar"
          />
          <va-breadcrumbs class="space-x-1 md:ml-2">
            <va-breadcrumbs-item label="Home" to="/" />
            <va-breadcrumbs-item label="Users" to="/" />
            <va-breadcrumbs-item :label="currentPage" />
          </va-breadcrumbs>
        </div>
      </div>
    </template>
    <template #right>
      <div v-show="isOptionsListVisible" class="flex items-center space-x-6 h-9">
        <router-link class="font-bold" to="/"> Help & support </router-link>
        <va-icon-github />
        <va-icon size="small" name="search" />
        <va-badge text="2" :offset="[-3, 3]" overlap>
          <va-icon name="notifications_active" />
        </va-badge>
        <va-avatar size="small" />
      </div>
    </template>
  </va-navbar>
</template>
<script lang="ts">
  import { defineComponent, ref, watch, onMounted } from 'vue'
  import { useBreakpoint } from 'vuestic-ui'
  import { useRoute } from 'vue-router'

  import VaIconMenu from './icons/VaIconMenu.vue'
  import VaIconGithub from './icons/VaIconGithub.vue'
  import VuesticAdminLogo from './icons/VuesticAdminLogo.vue'

  export default defineComponent({
    name: 'Navbar',
    components: { VuesticAdminLogo, VaIconMenu, VaIconGithub },
    props: {
      isSidebarVisible: {
        type: Boolean,
        default: false,
      },
      isOptionsVisible: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:isSidebarVisible', 'update:isOptionsVisible'],

    setup(props, { emit }) {
      const route = useRoute()
      const currentPage = (route.name as string).replace('-', ' ') || 'admins'

      const breakpoints = useBreakpoint()

      const isOptionsMenuVisible = ref(false)
      const isOptionsListVisible = ref(false)

      watch(
        () => breakpoints.smDown,
        (newValue: boolean) => {
          isOptionsMenuVisible.value = newValue
          isOptionsListVisible.value = !newValue
        },
      )

      onMounted(() => {
        isOptionsMenuVisible.value = breakpoints.smDown
        isOptionsListVisible.value = !breakpoints.smDown
      })

      return {
        toggleSidebar: () => emit('update:isSidebarVisible', !props.isSidebarVisible),
        isOptionsListVisible,
        isOptionsMenuVisible,
        currentPage: currentPage[0].toUpperCase() + currentPage.slice(1),
      }
    },
  })
</script>
