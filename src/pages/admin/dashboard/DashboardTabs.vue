<template>
  <va-card>
    <va-card-title>
      {{ t("dashboard.setupRemoteConnections") }}
    </va-card-title>
    <va-card-content>
      <va-tabs v-model="activeTabName" grow>
        <template #tabs>
          <va-tab name="OverviewTab">
            {{ t("dashboard.tabs.overview.title") }}
          </va-tab>
          <va-tab name="BillingAddressTab">
            {{ t("dashboard.tabs.billingAddress.title") }}
          </va-tab>
          <va-tab name="BankDetailsTab">
            {{ t("dashboard.tabs.bankDetails.title") }}
          </va-tab>
        </template>
      </va-tabs>
      <va-separator />
      <component :is="activeTabName" @submit="submit" />
    </va-card-content>
  </va-card>
</template>

<script>
  import OverviewTab from "./dashboard-tabs/OverviewTab.vue";
  import BillingAddressTab from "./dashboard-tabs/BillingAddressTab.vue";
  import BankDetailsTab from "./dashboard-tabs/BankDetailsTab.vue";
  import { useI18n } from "vue-i18n";

  export default {
    name: "DashboardTabs",
    components: {
      OverviewTab,
      BillingAddressTab,
      BankDetailsTab,
    },
    setup() {
      const { t } = useI18n();
      return { t };
    },
    data() {
      return {
        activeTabName: "BillingAddressTab",
        tabs: ["OverviewTab", "BillingAddressTab", "BankDetailsTab"],
      };
    },
    methods: {
      submit(data) {
        this.$emit("submit", data);
      },
    },
  };
</script>

<style lang="scss">
  .va-tabs__tabs {
    height: 100%;
  }
</style>
