<script setup lang="ts">
import { PropType } from 'vue'
import { defineVaDataTableColumns } from 'vuestic-ui'
import { Project } from '../types'
import UserAvatar from '../../users/widgets/UserAvatar.vue'
import ProjectStatusBadge from '../components/ProjectStatusBadge.vue'

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
  loading: {
    type: Boolean,
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
</script>

<template>
  <VaDataTable v-if="projects.length > 0" :items="projects" :columns="columns" :loading="loading">
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
      <ProjectStatusBadge :status="project.status" />
    </template>

    <template #cell(actions)="{ rowData: project }">
      <div class="flex gap-2 justify-end">
        <VaButton preset="primary" icon="mso-edit" color="primary" @click="$emit('edit', project)" />
        <VaButton preset="primary" icon="mso-delete" color="danger" @click="$emit('delete', project)" />
      </div>
    </template>
  </VaDataTable>
  <div v-else class="p-4 flex justify-center items-center text-[var(--va-secondary)]">No projects</div>
</template>
