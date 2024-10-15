<script setup lang="ts">
import { PropType } from 'vue'
import { BaseUser } from '../types'

const avatarColor = (userName: string) => {
  const colors = ['primary', '#FFD43A', '#ADFF00', '#262824', 'danger']
  const index = userName.charCodeAt(0) % colors.length
  return colors[index]
}

defineProps({
  user: {
    type: Object as PropType<BaseUser>,
    required: true,
  },
  size: {
    type: String,
    default: 'medium',
  },
})

const isUrl = (avatar: string) => {
  return avatar.startsWith('http') || avatar.startsWith('blob:')
}
</script>

<template>
  <VaAvatar
    :size="size"
    :src="isUrl(user.avatar) ? user.avatar : ''"
    :fallback-text="user.avatar || user.fullname[0]"
    :color="avatarColor(user.fullname)"
  />
</template>
