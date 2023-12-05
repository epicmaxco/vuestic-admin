<script setup lang="ts">
import { ref, watch } from 'vue'
import { EmptyProject, Project } from '../types'
import { SelectOption } from 'vuestic-ui'
import { useUsers } from '../../users/composables/useUsers'
import ProjectStatusBadge from '../components/ProjectStatusBadge.vue'
import UserAvatar from '../../users/widgets/UserAvatar.vue'

const props = defineProps<{
  project: Project | null
}>()

defineEmits<{
  (event: 'save', project: Project): void
  (event: 'close'): void
}>()

const newProject = ref<EmptyProject>({
  project_name: '',
  project_owner: undefined,
  team: [],
  status: 'in progress',
})

watch(
  () => props.project,
  () => {
    if (!props.project) {
      return
    }

    newProject.value = {
      ...props.project,
      project_owner: props.project.project_owner,
    }
  },
  { immediate: true },
)

const required = (v: string | SelectOption) => !!v || 'This field is required'

const { users: teamUsers, filters: teamFilters } = useUsers({ pagination: ref({ page: 1, perPage: 100, total: 10 }) })
const { users: ownerUsers, filters: ownerFilters } = useUsers({ pagination: ref({ page: 1, perPage: 100, total: 10 }) })
</script>

<template>
  <VaForm v-slot="{ validate }" class="flex flex-col gap-2">
    <VaInput v-model="newProject.project_name" label="Project name" :rules="[required]" />
    <VaSelect
      v-model="newProject.project_owner"
      v-model:search="ownerFilters.search"
      searchable
      label="Owner"
      text-by="fullname"
      track-by="id"
      :rules="[required]"
      :options="ownerUsers"
    >
      <template #content="{ value: users }">
        <div v-if="users[0]" :key="users[0].id" class="flex items-center gap-1 mr-4">
          <UserAvatar :user="users[0]" size="18px" />
          {{ users[0].fullname }}
        </div>
      </template>
    </VaSelect>
    <VaSelect
      v-model="newProject.team"
      v-model:search="teamFilters.search"
      label="Team"
      text-by="fullname"
      track-by="id"
      multiple
      :rules="[(v: any) => ('length' in v && v.length > 0) || 'This field is required']"
      :options="teamUsers"
      :max-visible-options="3"
    >
      <template #content="{ value }">
        <div v-for="(user, index) in value" :key="user.id" class="flex items-center gap-1 mr-4">
          <UserAvatar :user="user" size="18px" />
          {{ user.fullname }}{{ index < value.length - 1 ? ',' : '' }}
        </div>
      </template>
    </VaSelect>
    <VaSelect
      v-model="newProject.status"
      label="Status"
      :rules="[required]"
      :options="[
        { text: 'In progress', value: 'in progress' },
        { text: 'Archived', value: 'archived' },
        { text: 'Completed', value: 'completed' },
        { text: 'Important', value: 'important' },
      ]"
    >
      <template #content="{ valueString }">
        <ProjectStatusBadge :status="valueString" />
      </template>
    </VaSelect>
    <div class="flex justify-end flex-col sm:flex-row mt-4 gap-2">
      <VaButton preset="secondary" @click="$emit('close')">Cancel</VaButton>
      <VaButton @click="validate() && $emit('save', newProject as Project)">Save</VaButton>
    </div>
  </VaForm>
</template>

<style lang="scss">
.va-select-content__autocomplete {
  flex: 1;
}
</style>
