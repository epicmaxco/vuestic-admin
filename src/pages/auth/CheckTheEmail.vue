<template>
  <div>
    <h1 class="font-semibold text-4xl mb-4">Check the email</h1>
    <p class="text-base mb-4 leading-5">
      Password reset instructions have been sent to your email. Check your inbox, including the spam folder if needed.
      For assistance, <span class="va-link">contact support</span>.
    </p>

    <div class="flex justify-center mt-4">
      <VaButton :to="{ name: 'login' }" class="w-full">Back to login</VaButton>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
