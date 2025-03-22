<template>
  <VaForm ref="form" @submit.prevent="submit">
    <h1 class="font-semibold text-4xl mb-4">Log in</h1>
    <p class="text-base mb-4 leading-5">
      New to Vuestic?
      <RouterLink :to="{ name: 'signup' }" class="font-semibold text-primary">Sign up</RouterLink>
    </p>
    <VaInput v-model="formData.username" class="mb-4" label="Email" type="email" />
    <VaValue v-slot="isPasswordVisible" :default-value="false">
      <VaInput
        v-model="formData.password"
        :rules="[validators.required]"
        :type="isPasswordVisible.value ? 'text' : 'password'"
        class="mb-4"
        label="Password"
        @clickAppendInner.stop="isPasswordVisible.value = !isPasswordVisible.value"
      >
        <template #appendInner>
          <VaIcon
            :name="isPasswordVisible.value ? 'mso-visibility_off' : 'mso-visibility'"
            class="cursor-pointer"
            color="secondary"
          />
        </template>
      </VaInput>
    </VaValue>

    <div class="auth-layout__options flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <VaCheckbox v-model="formData.keepLoggedIn" class="mb-2 sm:mb-0" label="Keep me signed in on this device" />
      <RouterLink :to="{ name: 'recover-password' }" class="mt-2 sm:mt-0 sm:ml-1 font-semibold text-primary">
        Forgot password?
      </RouterLink>
    </div>

    <div class="flex justify-center mt-4">
      <VaButton class="w-full" @click="submit"> Login</VaButton>
    </div>

    <div v-if="errorMessage" class="mb-4 text-sm text-red-600">
      {{ errorMessage }}
    </div>
  </VaForm>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm, useToast } from 'vuestic-ui'
import { validators } from '../../services/utils'
import { useAuthStore } from '../../../store/auth'

const isLoading = ref(false)
const errorMessage = ref('')
const { validate } = useForm('form')
const router = useRouter()
const authStore = useAuthStore()
const { init } = useToast()

const formData = reactive({
  username: '',
  password: '',
  keepLoggedIn: false,
})
const submit = () => {
  if (validate()) {
    isLoading.value = true
    errorMessage.value = ''
    try {
      authStore.login({
        username: formData.username,
        password: formData.password,
      })

      // Redirect to homepage after successful login
      router.push('/dashboard')
    } catch (error) {
      init({ message: 'Login failed', error, color: 'danger' })
    } finally {
      isLoading.value = false
    }
    //init({ message: "You've successfully logged in", color: 'success' })

    //push({ name: 'dashboard' })
  }
}
</script>
