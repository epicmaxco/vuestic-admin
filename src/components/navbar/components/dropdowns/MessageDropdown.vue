<template>
  <va-dropdown class="message-dropdown" position="bottom" :offset="[13, 0]">
    <template #anchor>
      <va-icon-message class="message-dropdown__icon" :class="{ 'message-dropdown__icon--unread': !allRead }" />
    </template>

    <va-dropdown-content class="message-dropdown__content pl-4 pr-4 pt-2 pb-2">
      <div
        v-for="message in messagesProxy"
        :key="message.id"
        class="message-dropdown__item row pt-1 pb-1 mt-2 mb-2"
        :class="{ 'message-dropdown__item--unread': message.unread }"
        @click="message.unread = false"
      >
        <img :src="message.details.avatar" class="message-dropdown__item__avatar mr-2" />
        <span class="ellipsis" style="max-width: 85%">{{
          t(`messages.${message.name}`, { name: message.details.name })
        }}</span>
      </div>
      <div class="row justify--space-between mt-1">
        <va-button class="md6 mr-2" size="small">{{ t('messages.all') }}</va-button>
        <va-button class="md6" size="small" outline :disabled="allRead" @click="markAllAsRead">{{
          t('messages.mark_as_read')
        }}</va-button>
      </div>
    </va-dropdown-content>
  </va-dropdown>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  import VaIconMessage from '../../../icons/VaIconMessage.vue'

  const { t } = useI18n()

  interface IMessage {
    name: string
    details: {
      name: string
      avatar: string
    }
    unread: boolean
    id: number
  }

  const props = withDefaults(
    defineProps<{
      messages?: IMessage[]
    }>(),
    {
      messages: () => [
        {
          name: 'new',
          details: {
            name: 'Oleg M',
            avatar: 'https://picsum.photos/24?image=1083',
          },
          unread: true,
          id: 1,
        },
        {
          name: 'new',
          details: {
            name: 'Andrei H',
            avatar: 'https://picsum.photos/24?image=1025',
          },
          unread: true,
          id: 2,
        },
      ],
    },
  )

  const messagesProxy = ref<IMessage[]>([...props.messages])

  const allRead = computed(() => {
    return messagesProxy.value.every((message) => !message.unread)
  })

  function markAllAsRead() {
    messagesProxy.value = messagesProxy.value.map((message) => ({
      ...message,
      unread: false,
    }))
  }
</script>

<style lang="scss" scoped>
  .message-dropdown {
    cursor: pointer;

    .message-dropdown__icon {
      position: relative;
      display: flex;
      align-items: center;

      &--unread::before {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        top: -0.5rem;
        background-color: var(--va-danger);
        height: 0.375rem;
        width: 0.375rem;
        margin: 0 auto;
        border-radius: 0.187rem;
      }
    }

    &__item {
      cursor: pointer;
      margin-bottom: 0.75rem;
      position: relative;
      flex-wrap: nowrap;

      &--unread {
        color: var(--va-gray);

        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          height: 0.375rem;
          width: 0.375rem;
          background-color: var(--va-danger);
          margin: auto;
          border-radius: 0.187rem;
        }
      }

      &:hover {
        color: var(--va-primary);
      }

      &__avatar {
        border-radius: 50%;
        min-width: 1.5rem;
        height: 1.5rem;
      }
    }

    .va-dropdown__anchor {
      display: inline-block;
    }
  }
</style>
