<template>
  <va-card class="mb-5 pr-4 flex justify-between">
    <div>
      <va-card-title class="text-large CTA__title"> Got questions? </va-card-title>
      <va-card-content>
        Request a free demo to have all your questions about Semrush answered by an expert.
      </va-card-content>
      <va-card-actions align="left">
        <va-button @click="showModal = !showModal">Request a demo</va-button>
      </va-card-actions>
    </div>
    <img :src="messageSent" alt="Send a message" />
  </va-card>
  <va-modal
    v-model="showModal"
    ok-text="Request demo"
    :before-ok="sendFakeRequest"
    close-button
    :hide-default-actions="requestStatus === 'loading' || requestStatus === 'success'"
  >
    <div class="h-48 w-96 flex flex-col justify-center">
      <div v-if="requestStatus === 'success'" class="text-center">Please check your email to redeem demo access</div>
      <div v-else-if="requestStatus === 'loading'"><va-inner-loading loading :size="60" /></div>
      <div v-else>
        <h3 class="va-h3">Request free demo</h3>
        <p class="mb-4">Claim your spot now and ignite innovation with our exceptional software solution! 🔥</p>
        <form class="flex flex-col items-center" @submit="sendFakeRequest">
          <va-input v-model="emailValue" label="Email" class="mb-4" type="email" placeholder="your@email.com" />
        </form>
      </div>
    </div>
  </va-modal>
</template>

<script setup>
  import { ref } from 'vue'

  import { wait } from '../../lib/utils'
  import messageSent from '../../lib/message-sent.svg'

  const showModal = ref(false)
  const emailValue = ref('')
  const requestStatus = ref('idle')

  async function sendFakeRequest() {
    if (emailValue.value.trim().length > 0) {
      requestStatus.value = 'loading'
      await wait()
      requestStatus.value = 'success'
      await wait(2000)
      requestStatus.value = 'idle'
      showModal.value = false
    }
  }
</script>

<style lang="scss" scoped>
  .CTA {
    &__title {
      font-size: 1.125rem;
      text-transform: initial;
      padding-bottom: 0.5rem;
      line-height: 1.4;
    }
  }
</style>
