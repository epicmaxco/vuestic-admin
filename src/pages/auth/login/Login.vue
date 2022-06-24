<template>
  <form @submit.prevent="onsubmit">
    <va-input
      v-model="email"
      class="mb-3"
      type="email"
      :label="t('auth.email')"
      :error="!!emailErrors.length"
      :error-messages="emailErrors"
    />

    <va-input
      v-model="password"
      class="mb-3"
      type="password"
      :label="t('auth.password')"
      :error="!!passwordErrors.length"
      :error-messages="passwordErrors"
    />

    <div class="auth-layout__options d-flex align--center justify--space-between">
      <va-checkbox v-model="keepLoggedIn" class="mb-0" :label="t('auth.keep_logged_in')" />
      <router-link class="ml-1 link" :to="{ name: 'recover-password' }">{{ t("auth.recover_password") }}</router-link>
    </div>

    <div class="d-flex justify--center mt-3">
      <va-button class="my-0" @click="onsubmit">{{ t("auth.login") }}</va-button>
    </div>
  </form>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
        keepLoggedIn: false,
        emailErrors: [],
        passwordErrors: [],
      };
    },
    computed: {
      formReady() {
        return !this.emailErrors.length && !this.passwordErrors.length;
      },
    },
    methods: {
      onsubmit() {
        this.emailErrors = this.email ? [] : ["Email is required"];
        this.passwordErrors = this.password ? [] : ["Password is required"];
        if (!this.formReady) {
          return;
        }
        this.$router.push({ name: "dashboard" });
      },
    },
  };
</script>
