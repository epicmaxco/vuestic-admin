<template>
  <div class="pt-2">
    <div class="row">
      <div class="flex xs12 md6">
        <div class="title text-dark mb-3">
          {{ t("dashboard.tabs.bankDetails.detailsFields") }}
        </div>
        <va-input v-model="form.bankName" :label="t('dashboard.tabs.bankDetails.bankName')" />
        <va-input v-model="form.accountName" :label="t('dashboard.tabs.bankDetails.accountName')" />
        <va-input v-model="form.sortCode" :label="t('dashboard.tabs.bankDetails.sortCode')" />
      </div>
      <div class="flex xs12 md6">
        <va-input v-model="form.accountNumber" :label="t('dashboard.tabs.bankDetails.accountNumber')" />
        <va-input v-model="form.notes" :label="t('dashboard.tabs.bankDetails.notes')" />
      </div>
    </div>
    <div class="row justify--center">
      <va-button @click="sendDetails">
        {{ t("dashboard.tabs.bankDetails.sendDetails") }}
      </va-button>
    </div>
  </div>
</template>

<script>
  import { useGlobalConfig } from "vuestic-ui";

  export default {
    name: "BankDetailsTab",
    data() {
      return {
        form: {
          bankName: "Raiffeisen Bank",
          accountName: "GoalSaver",
          sortCode: "6558912",
          accountNumber: "000876432",
          notes: "",
        },
      };
    },
    computed: {
      theme() {
        return useGlobalConfig().getGlobalConfig().colors;
      },
    },
    methods: {
      sendDetails() {
        const color = this.theme.primary;
        this.$vaToast.init({ message: `Saved!`, color });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .va-input-wrapper {
    margin-bottom: 1rem;
  }
</style>
