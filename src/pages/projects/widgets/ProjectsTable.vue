<script setup lang="ts">
import { PropType } from 'vue'
import { defineVaDataTableColumns } from 'vuestic-ui'
import { Project } from '../types'
import UserAvatar from '../../users/widgets/UserAvatar.vue'

const columns = defineVaDataTableColumns([
  { label: 'Project name', key: 'project_name', sortable: true },
  { label: 'Project owner', key: 'project_owner', sortable: true },
  { label: 'Team', key: 'team', sortable: true },
  { label: 'Status', key: 'status', sortable: true },
  { label: 'Creation Date', key: 'creation_date', sortable: true },
  { label: ' ', key: 'actions' },
])

defineProps({
  projects: {
    type: Array as PropType<Project[]>,
    required: true,
  },
})

defineEmits<{
  (event: 'edit', project: Project): void
  (event: 'delete', project: Project): void
}>()

const avatarColor = (userName: string) => {
  const colors = ['primary', '#FFD43A', '#ADFF00', '#262824', 'danger']
  const index = userName.charCodeAt(0) % colors.length
  return colors[index]
}

const chipColorMap: Record<Project['status'], string> = {
  'in progress': 'primary',
  archived: 'secondary',
  completed: 'success',
  important: 'warning',
}
</script>

<template>
  <VaDataTable v-if="projects.length > 0" :items="projects" :columns="columns">
    <template #cell(project_owner)="{ rowData }">
      <div class="flex items-center gap-2">
        <UserAvatar :user="rowData.project_owner" size="small" />
        {{ rowData.project_owner.fullname }}
      </div>
    </template>
    <template #cell(team)="{ rowData: project }">
      <VaAvatarGroup
        size="small"
        :options="
          (project as Project).team.map((user) => ({
            label: user.fullname,
            src: user.avatar,
            fallbackText: user.fullname[0],
            color: avatarColor(user.fullname),
          }))
        "
        :max="5"
      />
    </template>
    <template #cell(status)="{ rowData: project }">
      <VaChip square :color="chipColorMap[(project as Project).status]" size="small">
        {{ project.status.toUpperCase() }}
      </VaChip>
    </template>

    <template #cell(actions)="{ rowData: project }">
      <div class="flex gap-2 justify-end">
        <VaButton preset="primary" icon="edit" color="primary" size="small" @click="$emit('edit', project)" />
        <VaButton preset="primary" icon="delete" color="danger" size="small" @click="$emit('delete', project)" />
      </div>
    </template>
  </VaDataTable>
  <div v-else class="p-4 flex justify-center items-center text-[var(--va-secondary)]">No projects</div>
</template>
