<script setup lang="ts">
  import { PropType, ref, watch } from 'vue'
  import { SelectOption, useForm } from 'vuestic-ui'
  import { User, UserRole } from '../types'
  import UserAvatar from './UserAvatar.vue'

  const props = defineProps({
    user: {
      type: Object as PropType<User | null>,
      default: null,
    },
  })

  const newUser = ref<User>({
    avatar: '',
    fullname: '',
    role: 'user',
    username: '',
    notes: '',
    email: '',
    // TODO: Not sure if project must be here
    projects: 0,
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

  const required = (v: string | SelectOption) => !!v || 'This field is required'

  const form = useForm('add-user-form')

  const emit = defineEmits(['close', 'save'])

  const onSave = () => {
    if (form.validate()) {
      emit('close')
    }
  }

  const roleSelectOptions: { text: Capitalize<UserRole>; value: UserRole }[] = [
    { text: 'Admin', value: 'admin' },
    { text: 'User', value: 'user' },
    { text: 'Owner', value: 'owner' },
  ]
</script>

<template>
  <va-form v-slot="{ isValid }" ref="add-user-form" class="flex-col justify-start items-start gap-4 inline-flex w-full">
    <h1 class="va-h5">Add user</h1>
    <va-file-upload
      v-model="avatar"
      type="single"
      hide-file-list
      class="self-stretch justify-start items-center gap-4 inline-flex"
    >
      <user-avatar :user="newUser" size="large" />
      <va-button preset="primary" size="small">Add image</va-button>
      <va-button
        v-if="avatar"
        preset="primary"
        color="danger"
        size="small"
        icon="delete"
        class="z-10"
        @click.stop="avatar = undefined"
      />
    </va-file-upload>
    <va-input class="hidden-input" :rules="[required]" :model-value="newUser.avatar === 'none' ? '' : newUser.avatar" />
    <div class="self-stretch flex-col justify-start items-start gap-4 flex">
      <va-input v-model="newUser.fullname" label="Full name" class="w-full" :rules="[required]" name="fullname" />

      <va-select
        v-model="newUser.role"
        label="Role"
        class="w-full"
        :options="roleSelectOptions"
        :rules="[required]"
        name="role"
        value-by="value"
      />

      <va-input v-model="newUser.username" label="Username" class="w-full" :rules="[required]" name="username" />

      <va-textarea v-model="newUser.notes" label="Notes" class="w-full" name="notes" />
      <div class="flex gap-2 flex-col-reverse items-stretch justify-end w-full sm:flex-row sm:items-center">
        <va-button preset="secondary" @click="$emit('close')">Cancel</va-button>
        <va-button :disabled="!isValid" @click="onSave">Save</va-button>
      </div>
    </div>
  </va-form>
</template>

<style lang="scss" scoped>
  .hidden-input {
    &:deep(.va-input-wrapper__container) {
      display: none;
    }
  }
</style>
