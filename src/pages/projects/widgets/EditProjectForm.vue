<script setup lang="ts">
import { ref, watch } from 'vue'
import { EmptyProject, Project } from '../types'
import { SelectOption } from 'vuestic-ui'
import { useUsers } from '../../users/composables/useUsers'

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

const teamFilters = ref({
  search: '',
  isActive: true,
  pagination: {
    page: 1,
    perPage: 10,
    total: 20,
  },
})

const ownerFilters = ref({
  search: '',
  isActive: true,
  pagination: {
    page: 1,
    perPage: 10,
    total: 20,
  },
})

const { users: teamUsers } = useUsers(teamFilters)
const { users: ownerUsers } = useUsers(ownerFilters)

const avatarColor = (userName: string) => {
  const colors = ['primary', '#FFD43A', '#ADFF00', '#262824', 'danger']
  const index = userName.charCodeAt(0) % colors.length
  return colors[index]
}
</script>

<template>
  <VaForm v-slot="{ isValid, validate }" class="flex flex-col gap-2">
    <VaInput v-model="newProject.project_name" label="Project name" :rules="[required]" />
    <VaSelect
      v-model="newProject.project_owner"
      v-model:search="ownerFilters.search"
      autocomplete
      label="Owner"
      text-by="fullname"
      :rules="[required]"
      :options="ownerUsers"
    >
      <template #content="{ value }">
        <div v-if="value[0]" class="flex items-center">
          <VaAvatar
            :src="value[0].avatar"
            :fallback-text="value[0].fullname[0]"
            :color="avatarColor(value[0].fullname)"
            size="small"
          />
        </div>
      </template>
    </VaSelect>
    <VaSelect
      v-model="newProject.team"
      v-model:search="teamFilters.search"
      autocomplete
      label="Team"
      text-by="fullname"
      multiple
      :rules="[(v: any) => ('length' in v && v.length > 0) || 'This field is required']"
      :options="teamUsers"
    >
      <template #content="{ value }">
        <VaPopover v-for="(user, index) in value" :key="user.id" class="flex items-center" :message="user.fullname">
          <VaAvatar
            :class="{ '-ml-4': index !== 0 }"
            :src="user.avatar"
            :fallback-text="user.fullname[0]"
            :color="avatarColor(user.fullname)"
            size="small"
          />
        </VaPopover>
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
        <VaChip size="small">
          {{ valueString }}
        </VaChip>
      </template>
    </VaSelect>
    <div class="flex justify-end flex-col sm:flex-row mt-4 gap-2">
      <VaButton preset="secondary" @click="$emit('close')">Cancel</VaButton>
      <VaButton :disabled="!isValid" @click="validate() && $emit('save', newProject as Project)">Save</VaButton>
    </div>
  </VaForm>
</template>

<style lang="scss">
.va-select-content__autocomplete {
  flex: 1;
}
</style>
