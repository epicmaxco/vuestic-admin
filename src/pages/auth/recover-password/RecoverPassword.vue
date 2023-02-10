<template>
  <form class="login" @submit.prevent="onsubmit">
    <va-input
      v-model="email"
      class="mb-4"
      type="email"
      :label="t('auth.email')"
      :error="!!emailErrors.length"
      :error-messages="emailErrors"
    />

    <div class="flex justify-center mt-4">
      <va-button type="submit" class="my-0">{{ t('auth.reset_password') }}</va-button>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const email = ref('')
  const emailErrors = ref<string[]>([])

  function onsubmit() {
    if (!email.value) {
      emailErrors.value = ['Email is required']
    } else {
      useRouter().push('/')
    }
  }
</script>
