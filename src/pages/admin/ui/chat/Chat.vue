<template>
  <div class="va-chat">
    <div
      v-sticky-scroll="{
        animate: true,
        duration: 500,
      }"
      class="va-chat__body"
      :style="{ height: height }"
    >
      <div
        v-for="(message, index) in modelValue"
        :key="index"
        class="va-chat__message"
        :style="{
          backgroundColor: message.yours ? colors.primary : undefined,
        }"
        :class="{ 'va-chat__message--yours': message.yours }"
      >
        <span class="va-chat__message-text">
          {{ message.text }}
        </span>
      </div>
    </div>
    <div class="va-chat__controls">
      <va-input
        v-model="inputMessage"
        placeholder="Type your message..."
        class="va-chat__input mr-2"
        @keypress.enter="sendMessage"
      />
      <va-button @click="sendMessage()">
        {{ t('chat.sendButton') }}
      </va-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import vStickyScroll from './StickyScroll'
  import { useColors } from 'vuestic-ui'
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { colors } = useColors()
  const { t } = useI18n()

  const props = withDefaults(
    defineProps<{
      modelValue?: { text: string; yours: boolean }[]
      height?: string
    }>(),
    {
      modelValue: () => [
        {
          text: 'Hello! So glad you liked my work. Do you want me to shoot you?',
          yours: false,
        },
        {
          text: 'Yeah, that would be cool. Maybe this Sunday at 3 pm?',
          yours: true,
        },
        {
          text: 'Sounds great! See you later!',
          yours: false,
        },
        {
          text: 'Should I bring a lightbox with me?',
          yours: true,
        },
        {
          text: 'No, thanks. There is no need. Can we set up a meeting earlier?',
          yours: false,
        },
        {
          text: "I'm working on Vuestic, so let's meet at 3pm. Thanks!",
          yours: true,
        },
      ],
      height: '20rem',
    },
  )

  const emit = defineEmits<{
    (e: 'update:modelValue', payload: { text: string; yours: boolean }[]): void
  }>()

  const inputMessage = ref('')

  function sendMessage() {
    if (!inputMessage.value) {
      return
    }

    emit('update:modelValue', props.modelValue.concat({ text: inputMessage.value, yours: true }))
    inputMessage.value = ''
  }
</script>

<style lang="scss" scoped>
  // .chat {
  //   &__content {
  //     @include va-justify-center();
  //   }
  // }

  $chat-message-br: 0.875rem;

  .va-chat {
    width: 100%;

    &__body {
      min-height: 18.75rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 1.5rem;
      overflow-y: auto;
    }

    &__message {
      position: relative;
      padding: 0.657rem 1.375rem;
      margin-bottom: 0.625rem;
      max-width: 70%;
      overflow-wrap: break-word;
      border-radius: 0.5rem;
      border-top-left-radius: 0;
      align-self: flex-start;
      // background-color: $light-gray2;

      &-text {
        display: block;
        transform: translateY(-2px);
      }

      &:last-child {
        margin-bottom: 0;
      }

      &--yours {
        color: white;
        align-self: flex-end;
        border-top-right-radius: 0;
        border-top-left-radius: 0.5rem;
      }
    }

    &__controls {
      display: flex;
      align-items: center;
    }

    &__input {
      flex-grow: 1;
      margin-bottom: 0;
    }
  }
</style>
