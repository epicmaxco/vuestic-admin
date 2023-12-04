<template>
  <div class="flex flex-col p-4 bg-backgroundSecondary rounded-lg">
    <h3 class="h3 mb-6">Notifications you receive</h3>
    <div v-for="option of options" :key="option" class="group">
      <div class="flex items-center justify-between">
        <p class="text-lg leading-[26px]">
          {{ option.name }}
        </p>
        <VaSwitch v-model="option.isEnabled" size="small" @update:modelValue="update(options)" />
      </div>
      <VaDivider class="py-4 group-last:hidden" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { useNotificationsStore } from '../../../stores/notifications'

const { notifications, update } = useNotificationsStore()

const options = reactive(notifications)
</script>
