<template>
  <div class="flex items-center space-x-2">
    <VaButton preset="plain" @click="store.toggleSidebar">
      <VaIcon :class="{ 'scale-x-[-1]': store.isSidebarMinimized }" :component="VaIconHideSidebar" size="20px" />
    </VaButton>
    <VaBreadcrumbs class="leading-5" :style="{ '--va-breadcrumbs-separator-padding': '0px 4px' }">
      <VaBreadcrumbsItem :label="t('breadcrumbs.home')" to="dashboard"/>
      <VaBreadcrumbsItem :label="t('breadcrumbs.users')" to="users"/>
    </VaBreadcrumbs>
  </div>
</template>
<script lang="ts" setup>
import VaIconHideSidebar from '../../../components/icons/VaIconHideSidebar.vue'

import { useI18n } from 'vue-i18n'

import { useGlobalStore } from '../../../stores/global-store'

const { t } = useI18n()

const store = useGlobalStore()
</script>