<template>
  <VaCard class="mb-5 pr-4 flex justify-between">
    <div>
      <VaCardContent>
        <h5 class="va-h5">Got questions?</h5>
        <p class="text-base leading-5">Request a free demo to have all your questions answered by an expert.</p>
      </VaCardContent>
      <VaCardActions align="left">
        <VaButton @click="showModal = !showModal">Request a demo</VaButton>
      </VaCardActions>
    </div>
    <img src="../request-demo.svg" alt="Send a message" />
  </VaCard>
  <VaModal v-model="showModal" ok-text="Request demo" :before-ok="submit" close-button>
    <VaForm ref="form" class="sm:w-96" @submit.prevent="submit">
      <h3 class="va-h3">Request free demo</h3>
      <p class="text-base mb-4 leading-5">
        Claim your spot now and ignite innovation with our exceptional software solution! 🔥
      </p>
      <VaInput
        v-model="email"
        class="mb-4"
        type="email"
        label="Email"
        :rules="[(v) => !!v || 'Email field is required', (v) => /.+@.+\..+/.test(v) || 'Email should be valid']"
      />
    </VaForm>
  </VaModal>
</template>

<script setup>
  import { ref } from 'vue'

  import { useForm, useToast } from 'vuestic-ui'

  const showModal = ref(false)
  const email = ref('')
  const { validate } = useForm('form')
  const { init } = useToast()

  const submit = async () => {
    if (!validate()) {
      return
    }
    init({ title: 'Demo Request Submitted!', message: 'An expert will get in touch soon', color: 'success' })
    showModal.value = false
  }
</script>
