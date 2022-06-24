<template>
  <form @submit.prevent="onsubmit()">
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
      <va-checkbox
        v-model="agreedToTerms"
        class="mb-0"
        :error="!!agreedToTermsErrors.length"
        :error-messages="agreedToTermsErrors"
      >
        <template #label>
          <span class="ml-1">
            {{ t("auth.agree") }}
            <span class="link">{{ t("auth.termsOfUse") }}</span>
          </span>
        </template>
      </va-checkbox>
      <router-link class="ml-1 link" :to="{ name: 'recover-password' }">
        {{ t("auth.recover_password") }}
      </router-link>
    </div>

    <div class="d-flex justify--center mt-3">
      <va-button class="my-0" @click="onsubmit">{{ t("auth.sign_up") }}</va-button>
    </div>
  </form>
</template>

<script>
  export default {
    name: "Signup",
    data() {
      return {
        email: "",
        password: "",
        agreedToTerms: false,
        emailErrors: [],
        passwordErrors: [],
        agreedToTermsErrors: [],
      };
    },
    computed: {
      formReady() {
        return !(this.emailErrors.length || this.passwordErrors.length || this.agreedToTermsErrors.length);
      },
    },
    methods: {
      onsubmit() {
        this.emailErrors = this.email ? [] : ["Email is required"];
        this.passwordErrors = this.password ? [] : ["Password is required"];
        this.agreedToTermsErrors = this.agreedToTerms ? [] : ["You must agree to the terms of use to continue"];
        if (!this.formReady) {
          return;
        }
        this.$router.push({ name: "dashboard" });
      },
    },
  };
</script>

<style lang="scss"></style>
