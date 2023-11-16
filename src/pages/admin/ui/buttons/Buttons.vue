<template>
  <div class="buttons grid grid-cols-12 gap-3">
    <VaCard class="larger-padding col-span-12">
      <VaCardTitle>{{ t('buttons.types') }}</VaCardTitle>
      <VaCardContent class="my-3 flex flex-wrap items-center gap-2">
        <VaButton> {{ t('buttons.default') }}</VaButton>
        <VaButton disabled> {{ t('buttons.disabled') }}</VaButton>
        <VaButton border-color="primary" color="primary" preset="outline"> {{ t('buttons.outline') }}</VaButton>
        <VaButton border-color="primary" color="primary" disabled preset="outline">
          {{ t('buttons.disabled') }}
        </VaButton>
        <VaButton preset="plain"> {{ t('buttons.flat') }}</VaButton>
        <VaButton disabled preset="plain"> {{ t('buttons.disabled') }}</VaButton>
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
          <VaButton border-color="danger" color="danger" preset="outline"> {{ t('buttons.danger') }}</VaButton>
          <VaButton border-color="info" color="info" preset="outline"> {{ t('buttons.info') }}</VaButton>
          <VaButton border-color="dark" color="dark" preset="outline"> {{ t('buttons.dark') }}</VaButton>
          <VaButton border-color="warning" color="warning" preset="outline"> {{ t('buttons.warning') }}</VaButton>
          <VaButton border-color="success" color="success" preset="outline"> {{ t('buttons.success') }}</VaButton>
          <VaButton border-color="gray" color="gray" preset="outline"> {{ t('buttons.gray') }}</VaButton>
        </div>
        <div class="my-3 flex flex-wrap items-center gap-2">
          <VaButton color="danger" preset="plain"> {{ t('buttons.danger') }}</VaButton>
          <VaButton color="info" preset="plain"> {{ t('buttons.info') }}</VaButton>
          <VaButton color="dark" preset="plain"> {{ t('buttons.dark') }}</VaButton>
          <VaButton color="warning" preset="plain"> {{ t('buttons.warning') }}</VaButton>
          <VaButton color="success" preset="plain"> {{ t('buttons.success') }}</VaButton>
          <VaButton color="gray" preset="plain"> {{ t('buttons.gray') }}</VaButton>
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
        <VaButtonGroup border-color="danger" class="col-span-12 xl:col-span-6" color="danger" preset="outline">
          <VaButton icon="maki-art-gallery">One</VaButton>
          <VaButton>Two</VaButton>
          <VaButton>Three</VaButton>
        </VaButtonGroup>
        <VaButtonGroup class="col-span-12 xl:col-span-6" color="gray" preset="plain">
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
          border-color="primary"
          class="col-span-12 xl:col-span-6"
          color="primary"
          preset="outline"
          size="large"
        >
          <VaButton>First</VaButton>
          <VaButton icon-right="glyphicon-pencil">Second</VaButton>
          <VaButton>Third</VaButton>
        </VaButtonGroup>
        <VaButtonGroup class="col-span-12 xl:col-span-6" color="warning" preset="plain" size="small">
          <VaButton icon="glyphicon-envelope" />
          <VaButton icon="entypo-user" />
          <VaButton icon="ion-ios-alarm" />
        </VaButtonGroup>
      </VaCardContent>
    </VaCard>

    <VaCard class="larger-padding col-span-12">
      <VaCardTitle>{{ t('buttons.buttonToggles') }}</VaCardTitle>
      <VaCardContent class="grid grid-cols-12 gap-6">
        <VaButtonToggle v-model="model" :options="options" class="col-span-12 lg:col-span-6" />
        <VaButtonToggle
          v-model="model"
          :options="options"
          border-color="danger"
          class="col-span-12 lg:col-span-6"
          color="danger"
          preset="outline"
        />
        <VaButtonToggle
          v-model="model"
          :options="options"
          class="col-span-12 lg:col-span-6"
          color="gray"
          preset="plain"
        />
        <VaButtonToggle v-model="model" :options="options" class="col-span-12 lg:col-span-6" color="dark" />
        <VaButtonToggle
          v-model="model"
          :options="options"
          border-color="info"
          class="col-span-12 lg:col-span-6"
          color="info"
          preset="outline"
        />
        <VaButtonToggle
          v-model="model"
          :options="options"
          class="col-span-12 lg:col-span-6"
          color="warning"
          preset="plain"
        />
      </VaCardContent>
    </VaCard>

    <VaCard class="larger-padding col-span-12">
      <VaCardTitle>{{ t('buttons.pagination') }}</VaCardTitle>
      <VaCardContent class="grid grid-cols-12 gap-6">
        <VaPagination v-model="activePage" :pages="20" :visible-pages="3" class="col-span-12 xl:col-span-6" />
        <VaPagination
          v-model="activePage"
          :pages="15"
          :visible-pages="3"
          class="col-span-12 xl:col-span-6"
          color="danger"
        />
        <VaPagination v-model="activePage" :pages="5" class="col-span-12 xl:col-span-6" disabled />
        <VaPagination
          v-model="activePage"
          :icon="{ boundary: 'bell_slash', direction: 'volume_off' }"
          :icon-right="{ boundary: 'bell', direction: 'volume_up' }"
          :pages="10"
          :visible-pages="3"
          class="col-span-12 xl:col-span-6"
          color="success"
        />
      </VaCardContent>
    </VaCard>

    <VaCard class="larger-padding col-span-12">
      <VaCardTitle>{{ t('buttons.buttonsDropdown') }}</VaCardTitle>
      <VaCardContent class="my-3 flex flex-wrap items-center gap-2">
        <VaButtonDropdown :label="t('buttons.default')"> {{ t('buttons.content') }}</VaButtonDropdown>
        <VaButtonDropdown :label="t('buttons.split')" split> {{ t('buttons.content') }}</VaButtonDropdown>
        <VaButtonDropdown :label="t('buttons.splitTo')" split split-to="/">
          {{ t('buttons.content') }}
        </VaButtonDropdown>
        <VaButtonDropdown :label="t('buttons.customIcon')" icon="info" opened-icon="bell_slash">
          {{ t('buttons.content') }}
        </VaButtonDropdown>
        <VaButtonDropdown :label="t('buttons.disabled')" disabled> {{ t('buttons.content') }}</VaButtonDropdown>
        <VaButtonDropdown :label="t('buttons.warning')" color="warning"> {{ t('buttons.content') }}</VaButtonDropdown>
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script lang="ts" setup>
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
