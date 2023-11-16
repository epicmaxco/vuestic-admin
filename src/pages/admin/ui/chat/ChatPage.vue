<template>
  <VaCard class="chat w-full">
    <VaCardTitle>{{ t('chat.title') }}</VaCardTitle>
    <VaCardContent>
      <Chat v-model="chatMessages" />
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
import Chat from './Chat.vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

const chatMessages = ref([
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
])
</script>
