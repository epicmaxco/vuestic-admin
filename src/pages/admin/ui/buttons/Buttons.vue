<template>
  <div class="buttons grid grid-cols-12 gap-3">
    <VaCard class="larger-padding col-span-12">
      <VaCardTitle>{{ t('buttons.types') }}</VaCardTitle>
      <VaCardContent class="my-3 flex flex-wrap items-center gap-2">
        <VaButton> {{ t('buttons.default') }}</VaButton>
        <VaButton disabled> {{ t('buttons.disabled') }}</VaButton>
        <VaButton preset="outline" border-color="primary" color="primary"> {{ t('buttons.outline') }}</VaButton>
        <VaButton preset="outline" border-color="primary" color="primary" disabled>
          {{ t('buttons.disabled') }}</VaButton
        >
        <VaButton preset="plain"> {{ t('buttons.flat') }}</VaButton>
        <VaButton preset="plain" disabled> {{ t('buttons.disabled') }}</VaButton>
      </VaCardContent>
    </VaCard>

    <VaCard class="larger-padding col-span-12">
      <VaCardTitle>{{ t('buttons.size') }}</VaCardTitle>
      <VaCardContent class="my-3 flex flex-wrap items-center gap-2">
        <VaButton size="small"> {{ t('buttons.small') }}</VaButton>
        <VaButton> {{ t('buttons.normal') }}</VaButton>
        <VaButton size="large"> {{ t('buttons.large') }}</VaButton>
      </VaCardContent>
    </VaCard>

    <VaCard class="larger-padding col-span-12">
      <VaCardTitle>{{ t('buttons.tags') }}</VaCardTitle>
      <VaCardContent class="my-3 flex flex-wrap items-center gap-2">
        <VaButton> {{ t('buttons.button') }}</VaButton>
        <VaButton href="http://epic-spinners.epicmax.co/">
          {{ t('buttons.a-link') }}
        </VaButton>
        <VaButton :to="{ name: 'charts' }">
          {{ t('buttons.router-link') }}
        </VaButton>
      </VaCardContent>
    </VaCard>

    <VaCard class="larger-padding col-span-12">
      <VaCardTitle>{{ t('buttons.advanced') }}</VaCardTitle>
      <VaCardContent class="my-3 flex flex-wrap items-center gap-2">
        <VaButton icon="md_close"> {{ t('buttons.button') }}</VaButton>
        <VaButton icon-right="expand_more"> {{ t('buttons.button') }}</VaButton>
        <VaButton icon="md_close" icon-right="expand_more">
          {{ t('buttons.button') }}
        </VaButton>
        <VaButton icon="md_close" />
      </VaCardContent>
    </VaCard>

    <VaCard class="larger-padding col-span-12">
      <VaCardTitle>{{ t('buttons.colors') }}</VaCardTitle>
      <VaCardContent>
        <div class="mb-6 my-3 flex flex-wrap items-center gap-2">
          <VaButton color="danger"> {{ t('buttons.danger') }}</VaButton>
          <VaButton color="info"> {{ t('buttons.info') }}</VaButton>
          <VaButton color="dark"> {{ t('buttons.dark') }}</VaButton>
          <VaButton color="warning"> {{ t('buttons.warning') }}</VaButton>
          <VaButton color="success"> {{ t('buttons.success') }}</VaButton>
          <VaButton color="gray"> {{ t('buttons.gray') }}</VaButton>
        </div>
        <div class="mb-6 my-3 flex flex-wrap items-center gap-2">
          <VaButton preset="outline" border-color="danger" color="danger"> {{ t('buttons.danger') }}</VaButton>
          <VaButton preset="outline" border-color="info" color="info"> {{ t('buttons.info') }}</VaButton>
          <VaButton preset="outline" border-color="dark" color="dark"> {{ t('buttons.dark') }}</VaButton>
          <VaButton preset="outline" border-color="warning" color="warning"> {{ t('buttons.warning') }}</VaButton>
          <VaButton preset="outline" border-color="success" color="success"> {{ t('buttons.success') }}</VaButton>
          <VaButton preset="outline" border-color="gray" color="gray"> {{ t('buttons.gray') }}</VaButton>
        </div>
        <div class="my-3 flex flex-wrap items-center gap-2">
          <VaButton preset="plain" color="danger"> {{ t('buttons.danger') }}</VaButton>
          <VaButton preset="plain" color="info"> {{ t('buttons.info') }}</VaButton>
          <VaButton preset="plain" color="dark"> {{ t('buttons.dark') }}</VaButton>
          <VaButton preset="plain" color="warning"> {{ t('buttons.warning') }}</VaButton>
          <VaButton preset="plain" color="success"> {{ t('buttons.success') }}</VaButton>
          <VaButton preset="plain" color="gray"> {{ t('buttons.gray') }}</VaButton>
        </div>
      </VaCardContent>
    </VaCard>

    <VaCard class="larger-padding col-span-12">
      <VaCardTitle>{{ t('buttons.buttonGroups') }}</VaCardTitle>
      <VaCardContent class="grid grid-cols-12 gap-6">
        <VaButtonGroup class="col-span-12 xl:col-span-6" color="secondary">
          <VaButton size="large"> One</VaButton>
          <VaButton size="large"> Two</VaButton>
          <VaButton size="large"> Three</VaButton>
        </VaButtonGroup>
        <VaButtonGroup class="col-span-12 xl:col-span-6" preset="outline" border-color="danger" color="danger">
          <VaButton icon="maki-art-gallery">One</VaButton>
          <VaButton>Two</VaButton>
          <VaButton>Three</VaButton>
        </VaButtonGroup>
        <VaButtonGroup class="col-span-12 xl:col-span-6" preset="plain" color="gray">
          <VaButton icon="ion-ios-mail">One</VaButton>
          <VaButton icon="entypo-user">Two</VaButton>
          <VaButton icon="ion-ios-alarm">Three</VaButton>
        </VaButtonGroup>
        <VaButtonGroup class="col-span-12 xl:col-span-6" color="dark">
          <VaButton> One</VaButton>
          <VaButton> Two</VaButton>
          <VaButton> Three</VaButton>
          <VaButton icon="ion-ios-arrow-down" />
        </VaButtonGroup>
        <VaButtonGroup
          class="col-span-12 xl:col-span-6"
          preset="outline"
          border-color="primary"
          color="primary"
          size="large"
        >
          <VaButton>First</VaButton>
          <VaButton icon-right="glyphicon-pencil">Second</VaButton>
          <VaButton>Third</VaButton>
        </VaButtonGroup>
        <VaButtonGroup class="col-span-12 xl:col-span-6" preset="plain" size="small" color="warning">
          <VaButton icon="glyphicon-envelope" />
          <VaButton icon="entypo-user" />
          <VaButton icon="ion-ios-alarm" />
        </VaButtonGroup>
      </VaCardContent>
    </VaCard>

    <VaCard class="larger-padding col-span-12">
      <VaCardTitle>{{ t('buttons.buttonToggles') }}</VaCardTitle>
      <VaCardContent class="grid grid-cols-12 gap-6">
        <VaButtonToggle v-model="model" class="col-span-12 lg:col-span-6" :options="options" />
        <VaButtonToggle
          v-model="model"
          class="col-span-12 lg:col-span-6"
          preset="outline"
          :options="options"
          border-color="danger"
          color="danger"
        />
        <VaButtonToggle
          v-model="model"
          class="col-span-12 lg:col-span-6"
          preset="plain"
          :options="options"
          color="gray"
        />
        <VaButtonToggle v-model="model" class="col-span-12 lg:col-span-6" :options="options" color="dark" />
        <VaButtonToggle
          v-model="model"
          class="col-span-12 lg:col-span-6"
          preset="outline"
          :options="options"
          border-color="info"
          color="info"
        />
        <VaButtonToggle
          v-model="model"
          class="col-span-12 lg:col-span-6"
          preset="plain"
          :options="options"
          color="warning"
        />
      </VaCardContent>
    </VaCard>

    <VaCard class="larger-padding col-span-12">
      <VaCardTitle>{{ t('buttons.pagination') }}</VaCardTitle>
      <VaCardContent class="grid grid-cols-12 gap-6">
        <VaPagination v-model="activePage" class="col-span-12 xl:col-span-6" :visible-pages="3" :pages="20" />
        <VaPagination
          v-model="activePage"
          class="col-span-12 xl:col-span-6"
          :visible-pages="3"
          :pages="15"
          color="danger"
        />
        <VaPagination v-model="activePage" class="col-span-12 xl:col-span-6" :pages="5" disabled />
        <VaPagination
          v-model="activePage"
          class="col-span-12 xl:col-span-6"
          :pages="10"
          :visible-pages="3"
          :icon="{ boundary: 'bell_slash', direction: 'volume_off' }"
          :icon-right="{ boundary: 'bell', direction: 'volume_up' }"
          color="success"
        />
      </VaCardContent>
    </VaCard>

    <VaCard class="larger-padding col-span-12">
      <VaCardTitle>{{ t('buttons.buttonsDropdown') }}</VaCardTitle>
      <VaCardContent class="my-3 flex flex-wrap items-center gap-2">
        <VaButtonDropdown :label="t('buttons.default')"> {{ t('buttons.content') }}</VaButtonDropdown>
        <VaButtonDropdown split :label="t('buttons.split')"> {{ t('buttons.content') }}</VaButtonDropdown>
        <VaButtonDropdown split split-to="/" :label="t('buttons.splitTo')">
          {{ t('buttons.content') }}</VaButtonDropdown
        >
        <VaButtonDropdown :label="t('buttons.customIcon')" icon="info" opened-icon="bell_slash">
          {{ t('buttons.content') }}
        </VaButtonDropdown>
        <VaButtonDropdown disabled :label="t('buttons.disabled')"> {{ t('buttons.content') }}</VaButtonDropdown>
        <VaButtonDropdown color="warning" :label="t('buttons.warning')"> {{ t('buttons.content') }}</VaButtonDropdown>
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const options = ref([
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' },
  ])
  const model = ref('three')
  const activePage = ref(4)
</script>

<style lang="scss">
  .va-card__content {
    & > .row {
      overflow-x: auto;
    }
  }

  .va-button-dropdown {
    display: inline-block;
  }
</style>
