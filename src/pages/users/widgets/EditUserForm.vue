<script setup lang="ts">
import { PropType, ref, watch } from 'vue'
import { SelectOption, useForm } from 'vuestic-ui'
import { User, UserRole } from '../types'
import UserAvatar from './UserAvatar.vue'
import { useProjects } from '../../projects/composables/useProjects'
import { validators } from '../../../services/utils'

const props = defineProps({
  user: {
    type: Object as PropType<User | null>,
    default: null,
  },
})

const newUser = ref<User>({
  id: -1,
  avatar: '',
  fullname: '',
  role: 'user',
  username: '',
  notes: '',
  email: '',
  active: true,
  projects: [],
})

watch(
  () => props.user,
  () => {
    if (!props.user) {
      return
    }

    newUser.value = {
      ...props.user,
      avatar: props.user.avatar || '',
    }
  },
  { immediate: true },
)

const avatar = ref<File>()

const makeAvatarBlobUrl = (avatar: File) => {
  return URL.createObjectURL(avatar)
}

watch(avatar, (newAvatar) => {
  newUser.value.avatar = newAvatar ? makeAvatarBlobUrl(newAvatar) : ''
})

const form = useForm('add-user-form')

const emit = defineEmits(['close', 'save'])

const onSave = () => {
  if (form.validate()) {
    emit('close')
  }
  emit('save', newUser.value)
}

const roleSelectOptions: { text: Capitalize<UserRole>; value: UserRole }[] = [
  { text: 'Admin', value: 'admin' },
  { text: 'User', value: 'user' },
  { text: 'Owner', value: 'owner' },
]

const { projects } = useProjects()
</script>

<template>
  <VaForm v-slot="{ isValid }" ref="add-user-form" class="flex-col justify-start items-start gap-4 inline-flex w-full">
    <h1 class="va-h5">Add user</h1>
    <VaFileUpload
      v-model="avatar"
      type="single"
      hide-file-list
      class="self-stretch justify-start items-center gap-4 inline-flex"
    >
      <UserAvatar :user="newUser" size="large" />
      <VaButton preset="primary" size="small">Add image</VaButton>
      <VaButton
        v-if="avatar"
        preset="primary"
        color="danger"
        size="small"
        icon="delete"
        class="z-10"
        @click.stop="avatar = undefined"
      />
    </VaFileUpload>
    <div class="self-stretch flex-col justify-start items-start gap-4 flex">
      <VaInput v-model="newUser.fullname" label="Full name" class="w-full" :rules="[validators.required]" name="fullname" />
      <VaInput v-model="newUser.username" label="Username" class="w-full" :rules="[validators.required]" name="username" />
      <VaInput v-model="newUser.email" label="Email" class="w-full" :rules="[validators.required, validators.email]" name="email" />
      <VaSelect
        v-model="newUser.role"
        label="Role"
        class="w-full"
        :options="roleSelectOptions"
        :rules="[validators.required]"
        name="role"
        value-by="value"
      />
      <VaCheckbox v-model="newUser.active" label="Active" class="w-full" name="active" />

      <VaSelect
        v-model="newUser.projects"
        label="Projects"
        class="w-full"
        :options="projects"
        :rules="[validators.required]"
        name="projects"
        text-by="project_name"
        track-by="id"
        multiple
        :max-visible-options="3"
      />

      <VaTextarea v-model="newUser.notes" label="Notes" class="w-full" name="notes" />
      <div class="flex gap-2 flex-col-reverse items-stretch justify-end w-full sm:flex-row sm:items-center">
        <VaButton preset="secondary" @click="$emit('close')">Cancel</VaButton>
        <VaButton :disabled="!isValid" @click="onSave">Save</VaButton>
      </div>
    </div>
  </VaForm>
</template>
