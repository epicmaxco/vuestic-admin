<script setup lang="ts">
import { PropType } from 'vue'
import { Project } from '../types'

defineProps({
  projects: {
    type: Array as PropType<Project[]>,
    required: true,
  },
})

const avatarColor = (userName: string) => {
  const colors = ['primary', '#FFD43A', '#ADFF00', '#262824', 'danger']
  const index = userName.charCodeAt(0) % colors.length
  return colors[index]
}

const chipColorMap: Record<Project['status'], string> = {
  wip: 'primary',
  archived: 'secondary',
  completed: 'success',
  important: 'warning',
}
</script>

<template>
  <div v-if="projects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <VaCard v-for="project in projects" :key="project.project_name" outlined>
      <VaCardContent>
        <div>{{ project.creation_date }}</div>
        <div class="flex flex-col justify-center items-center gap-4">
          <h4 class="va-h4">{{ project.project_name }}</h4>
          <p>
            <span class="text-[var(--va-secondary)]">Owner: </span>
            <span>{{ project.project_owner.fullname }}</span>
          </p>
          <VaAvatarGroup
            class="my-4"
            :options="
              project.team.map((user) => ({
                label: user.fullname,
                src: user.avatar,
                fallbackText: user.fullname[0],
                color: avatarColor(user.fullname),
              }))
            "
            :max="5"
          />

          <VaChip square :color="chipColorMap[project.status]" size="small">
            {{ project.status.toUpperCase() }}
          </VaChip>
        </div>
        <VaDivider class="my-6" />

        <div class="flex justify-between">
          <VaButton preset="secondary" icon="add" color="secondary" />
          <VaButton preset="secondary" icon="message" color="secondary" />
          <VaButton preset="secondary" icon="delete" color="danger" />
        </div>
      </VaCardContent>
    </VaCard>
  </div>
  <div v-else>No projects</div>
</template>
