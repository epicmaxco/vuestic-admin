<template>
  <div class="pt-2">
    <div class="row">
      <div class="flex sm12 md6">
        <div class="title mb-3" :style="computedStylesTitle">
          {{ t("dashboard.tabs.billingAddress.personalInfo") }}
        </div>
        <va-input v-model="form.name" :label="t('dashboard.tabs.billingAddress.firstName')" />
        <va-input v-model="form.email" :label="t('dashboard.tabs.billingAddress.email')" />
        <va-input v-model="form.address" :label="t('dashboard.tabs.billingAddress.address')" />
      </div>
      <div class="flex sm12 md6">
        <div class="title mb-3" :style="computedStylesTitle">
          {{ t("dashboard.tabs.billingAddress.companyInfo") }}
        </div>
        <va-select
          v-model="form.country"
          :options="countriesList"
          :label="t('dashboard.tabs.billingAddress.country')"
          searchable
        />
        <va-select
          v-model="form.city"
          :label="t('dashboard.tabs.billingAddress.city')"
          :options="allowedCitiesList"
          key-by="text"
          track-by="text"
        />
        <va-checkbox v-model="form.connection" :label="t('dashboard.tabs.billingAddress.infiniteConnections')" />
      </div>
    </div>
    <div class="row justify--center">
      <va-button @click="submit">
        {{ t("dashboard.tabs.billingAddress.addConnection") }}
      </va-button>
    </div>
  </div>
</template>

<script>
  import countriesList from "../../../../data/CountriesList";
  import { getLineMapData } from "../../../../data/maps/LineMapData";
  import { useGlobalConfig } from "vuestic-ui";
  import { useI18n } from "vue-i18n";

  export default {
    name: "BillingAddressTab",
    emits: ["submit"],
    setup() {
      const { t } = useI18n();
      return { t };
    },
    data() {
      return {
        form: {
          name: "John Smith",
          email: "smith@gmail.com",
          address: "93  Guild Street",
          city: { text: "London" },
          country: "United Kingdom",
          connection: true,
        },
        allowedCountriesList: [],
        allowedCitiesList: [],
      };
    },
    computed: {
      theme() {
        return useGlobalConfig().getGlobalConfig().colors;
      },
      citiesList() {
        return getLineMapData(this.theme).cities.map(({ title, country }) => ({ text: title, country }));
      },
      countriesList() {
        return countriesList.filter((item) => this.citiesList.filter(({ country }) => country === item).length);
      },
      computedStylesTitle() {
        return {
          color: this.theme.dark,
        };
      },
    },
    watch: {
      "form.country"(value) {
        this.allowedCitiesList = value
          ? this.citiesList.filter(({ country }) => country === value)
          : [...this.citiesList];
      },
      "form.city": {
        deep: true,
        handler({ country }) {
          this.form.country = this.countriesList.find((item) => item === country);
        },
      },
    },
    mounted() {
      this.allowedCitiesList = [...this.citiesList];
    },
    methods: {
      submit() {
        this.$emit("submit", this.form);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .va-input-wrapper {
    margin-bottom: 1rem;
  }
</style>
