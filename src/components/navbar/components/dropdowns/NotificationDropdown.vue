<template>
  <va-dropdown class="notification-dropdown" position="bottom" :offset="[13, 0]">
    <template #anchor>
      <va-icon-notification
        class="notification-dropdown__icon"
        :class="{ 'notification-dropdown__icon--unread': !allRead }"
      />
    </template>
    <va-dropdown-content class="notification-dropdown__content pl-4 pt-4 pt-2 pb-2">
      <div
        v-for="notification in notificationsProxy"
        :key="notification.id"
        class="notification-dropdown__item flex flex-1 flex-wrap pt-1 pb-1 mt-2 mb-2"
        :class="{ 'notification-dropdown__item--unread': notification.unread }"
        @click="notification.unread = false"
      >
        <img
          v-if="notification.details.avatar"
          class="mr-2 notification-dropdown__item__avatar"
          :src="notification.details.avatar"
          alt=""
        />
        <span class="ellipsis" style="max-width: 85%">
          <span v-if="notification.details.name" class="font-bold">{{ notification.details.name }}</span>
          {{ t(`notifications.${notification.name}`, { type: notification.details.type }) }}
        </span>
      </div>
      <div class="grid grid-cols-12 justify-between mt-1">
        <va-button class="md:col-span-6 mr-2" size="small">{{ t('notifications.all') }}</va-button>
        <va-button
          class="md:col-span-6"
          size="small"
          preset="outline"
          border-color="primary"
          :disabled="allRead"
          @click="markAllAsRead"
          >{{ t('notifications.mark_as_read') }}</va-button
        >
      </div>
    </va-dropdown-content>
  </va-dropdown>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import VaIconNotification from '../../../icons/VaIconNotification.vue'

  const { t } = useI18n()

  interface INotification {
    name: string
    details: {
      name: string
      avatar: string
      type?: string
    }
    unread: boolean
    id: number
  }

  const props = withDefaults(
    defineProps<{
      notifications?: INotification[]
    }>(),
    {
      notifications: () => [
        {
          name: 'sentMessage',
          details: { name: 'Vasily S', avatar: 'https://picsum.photos/123' },
          unread: true,
          id: 1,
        },
        {
          name: 'uploadedZip',
          details: {
            name: 'Oleg M',
            avatar: 'https://picsum.photos/100',
            type: 'typography component',
          },
          unread: true,
          id: 2,
        },
        {
          name: 'startedTopic',
          details: { name: 'Andrei H', avatar: 'https://picsum.photos/24' },
          unread: true,
          id: 3,
        },
      ],
    },
  )
  const notificationsProxy = ref<INotification[]>([...props.notifications])

  const allRead = computed(() => {
    return notificationsProxy.value.every((notification) => !notification.unread)
  })

  function markAllAsRead() {
    notificationsProxy.value = notificationsProxy.value.map((notification) => ({
      ...notification,
      unread: false,
    }))
  }
</script>

<style lang="scss" scoped>
  .notification-dropdown {
    cursor: pointer;

    .notification-dropdown__icon {
      position: relative;
      display: flex;
      align-items: center;

      &--unread::before {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        top: -0.5rem;
        // background-color: $brand-danger;
        height: 0.375rem;
        width: 0.375rem;
        margin: 0 auto;
        border-radius: 0.187rem;
      }
    }

    &__content {
      max-width: 20rem;
    }

    &__item {
      cursor: pointer;
      margin-bottom: 0.75rem;
      flex-wrap: nowrap;
      position: relative;

      &--unread {
        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          height: 0.375rem;
          width: 0.375rem;
          margin: auto;
          border-radius: 0.187rem;
        }
      }

      &:hover {
        color: var(--va-primary);
      }

      &__avatar {
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        min-width: 1.5rem;
      }
    }

    .va-dropdown__anchor {
      display: inline-block;
    }
  }
</style>
