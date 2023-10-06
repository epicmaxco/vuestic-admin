<template>
  <form @submit.prevent="onsubmit">
    <h1 class="font-semibold text-4xl leading-relaxed mb-2">Log in</h1>
    <p class="text-base mb-4">
      New to Vuestic? <router-link class="font-semibold text-primary" to="/sign-up">Sign up</router-link>
    </p>
    <va-input
      v-model="email"
      class="mb-4"
      type="email"
      :label="t('auth.email')"
      :error="!!emailErrors.length"
      :error-messages="emailErrors"
    />

    <va-value v-slot="isPasswordVisible" :default-value="false">
      <va-input
        v-model="password"
        class="mb-4"
        :type="isPasswordVisible.value ? 'text' : 'password'"
        label="Password"
        :error="!!passwordErrors.length"
        :error-messages="passwordErrors"
        @click-append-inner.stop="isPasswordVisible.value = !isPasswordVisible.value"
      >
        <template #appendInner>
          <va-icon
            class="cursor-pointer"
            :name="isPasswordVisible.value ? 'mso-visibility_off' : 'mso-visibility'"
            color="secondary"
          />
        </template>
      </va-input>
    </va-value>

    <div class="auth-layout__options flex items-center justify-between">
      <va-checkbox v-model="keepLoggedIn" class="mb-0" label="Keep me signed in on this device" />
      <router-link class="ml-1 va-link" :to="{ name: 'recover-password' }"> Forgot password? </router-link>
    </div>

    <div class="flex justify-center mt-4">
      <va-button class="w-full" @click="onsubmit">{{ t('auth.login') }}</va-button>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const email = ref('')
  const password = ref('')
  const keepLoggedIn = ref(false)
  const emailErrors = ref<string[]>([])
  const passwordErrors = ref<string[]>([])
  const router = useRouter()

  const formReady = computed(() => !emailErrors.value.length && !passwordErrors.value.length)

  function onsubmit() {
    if (!formReady.value) return

    emailErrors.value = email.value ? [] : ['Email is required']
    passwordErrors.value = password.value ? [] : ['Password is required']

    router.push({ name: 'dashboard' })
  }
</script>
