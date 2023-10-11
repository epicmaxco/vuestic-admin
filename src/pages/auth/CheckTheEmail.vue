<template>
  <div>
    <h1 class="font-semibold text-4xl mb-4">Check the email</h1>
    <p class="text-base mb-4 leading-5">
      Password reset instructions have been sent to your email. Check your inbox, including the spam folder if needed.
      For assistance, <span class="va-link">contact support</span>.
    </p>

    <div class="flex justify-center mt-4">
      <va-button class="w-full" :to="{ name: 'login' }">Back to login</va-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const email = ref('')
</script>
