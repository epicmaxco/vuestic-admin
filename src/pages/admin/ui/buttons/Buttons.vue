<template>
  <div class="buttons grid grid-cols-12 gap-3">
    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('buttons.types') }}</va-card-title>
      <va-card-content class="my-3 flex flex-wrap items-center gap-2">
        <va-button> {{ t('buttons.default') }}</va-button>
        <va-button disabled> {{ t('buttons.disabled') }}</va-button>
        <va-button preset="outline" border-color="primary" color="primary"> {{ t('buttons.outline') }}</va-button>
        <va-button preset="outline" border-color="primary" color="primary" disabled>
          {{ t('buttons.disabled') }}</va-button
        >
        <va-button preset="plain"> {{ t('buttons.flat') }}</va-button>
        <va-button preset="plain" disabled> {{ t('buttons.disabled') }}</va-button>
      </va-card-content>
    </va-card>

    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('buttons.size') }}</va-card-title>
      <va-card-content class="my-3 flex flex-wrap items-center gap-2">
        <va-button size="small"> {{ t('buttons.small') }}</va-button>
        <va-button> {{ t('buttons.normal') }}</va-button>
        <va-button size="large"> {{ t('buttons.large') }}</va-button>
      </va-card-content>
    </va-card>

    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('buttons.tags') }}</va-card-title>
      <va-card-content class="my-3 flex flex-wrap items-center gap-2">
        <va-button> {{ t('buttons.button') }}</va-button>
        <va-button href="http://epic-spinners.epicmax.co/">
          {{ t('buttons.a-link') }}
        </va-button>
        <va-button :to="{ name: 'charts' }">
          {{ t('buttons.router-link') }}
        </va-button>
      </va-card-content>
    </va-card>

    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('buttons.advanced') }}</va-card-title>
      <va-card-content class="my-3 flex flex-wrap items-center gap-2">
        <va-button icon="md_close"> {{ t('buttons.button') }}</va-button>
        <va-button icon-right="expand_more"> {{ t('buttons.button') }}</va-button>
        <va-button icon="md_close" icon-right="expand_more">
          {{ t('buttons.button') }}
        </va-button>
        <va-button icon="md_close" />
      </va-card-content>
    </va-card>

    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('buttons.colors') }}</va-card-title>
      <va-card-content>
        <div class="mb-6 my-3 flex flex-wrap items-center gap-2">
          <va-button color="danger"> {{ t('buttons.danger') }}</va-button>
          <va-button color="info"> {{ t('buttons.info') }}</va-button>
          <va-button color="dark"> {{ t('buttons.dark') }}</va-button>
          <va-button color="warning"> {{ t('buttons.warning') }}</va-button>
          <va-button color="success"> {{ t('buttons.success') }}</va-button>
          <va-button color="gray"> {{ t('buttons.gray') }}</va-button>
        </div>
        <div class="mb-6 my-3 flex flex-wrap items-center gap-2">
          <va-button preset="outline" border-color="danger" color="danger"> {{ t('buttons.danger') }}</va-button>
          <va-button preset="outline" border-color="info" color="info"> {{ t('buttons.info') }}</va-button>
          <va-button preset="outline" border-color="dark" color="dark"> {{ t('buttons.dark') }}</va-button>
          <va-button preset="outline" border-color="warning" color="warning"> {{ t('buttons.warning') }}</va-button>
          <va-button preset="outline" border-color="success" color="success"> {{ t('buttons.success') }}</va-button>
          <va-button preset="outline" border-color="gray" color="gray"> {{ t('buttons.gray') }}</va-button>
        </div>
        <div class="my-3 flex flex-wrap items-center gap-2">
          <va-button preset="plain" color="danger"> {{ t('buttons.danger') }}</va-button>
          <va-button preset="plain" color="info"> {{ t('buttons.info') }}</va-button>
          <va-button preset="plain" color="dark"> {{ t('buttons.dark') }}</va-button>
          <va-button preset="plain" color="warning"> {{ t('buttons.warning') }}</va-button>
          <va-button preset="plain" color="success"> {{ t('buttons.success') }}</va-button>
          <va-button preset="plain" color="gray"> {{ t('buttons.gray') }}</va-button>
        </div>
      </va-card-content>
    </va-card>

    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('buttons.buttonGroups') }}</va-card-title>
      <va-card-content class="grid grid-cols-12 gap-6">
        <va-button-group class="col-span-12 xl:col-span-6" color="secondary">
          <va-button size="large"> One</va-button>
          <va-button size="large"> Two</va-button>
          <va-button size="large"> Three</va-button>
        </va-button-group>
        <va-button-group class="col-span-12 xl:col-span-6" preset="outline" border-color="danger" color="danger">
          <va-button icon="maki-art-gallery">One</va-button>
          <va-button>Two</va-button>
          <va-button>Three</va-button>
        </va-button-group>
        <va-button-group class="col-span-12 xl:col-span-6" preset="plain" color="gray">
          <va-button icon="ion-ios-mail">One</va-button>
          <va-button icon="entypo-user">Two</va-button>
          <va-button icon="ion-ios-alarm">Three</va-button>
        </va-button-group>
        <va-button-group class="col-span-12 xl:col-span-6" color="dark">
          <va-button> One</va-button>
          <va-button> Two</va-button>
          <va-button> Three</va-button>
          <va-button icon="ion-ios-arrow-down" />
        </va-button-group>
        <va-button-group
          class="col-span-12 xl:col-span-6"
          preset="outline"
          border-color="primary"
          color="primary"
          size="large"
        >
          <va-button>First</va-button>
          <va-button icon-right="glyphicon-pencil">Second</va-button>
          <va-button>Third</va-button>
        </va-button-group>
        <va-button-group class="col-span-12 xl:col-span-6" preset="plain" size="small" color="warning">
          <va-button icon="glyphicon-envelope" />
          <va-button icon="entypo-user" />
          <va-button icon="ion-ios-alarm" />
        </va-button-group>
      </va-card-content>
    </va-card>

    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('buttons.buttonToggles') }}</va-card-title>
      <va-card-content class="grid grid-cols-12 gap-6">
        <va-button-toggle v-model="model" class="col-span-12 lg:col-span-6" :options="options" />
        <va-button-toggle
          v-model="model"
          class="col-span-12 lg:col-span-6"
          preset="outline"
          :options="options"
          border-color="danger"
          color="danger"
        />
        <va-button-toggle
          v-model="model"
          class="col-span-12 lg:col-span-6"
          preset="plain"
          :options="options"
          color="gray"
        />
        <va-button-toggle v-model="model" class="col-span-12 lg:col-span-6" :options="options" color="dark" />
        <va-button-toggle
          v-model="model"
          class="col-span-12 lg:col-span-6"
          preset="outline"
          :options="options"
          border-color="info"
          color="info"
        />
        <va-button-toggle
          v-model="model"
          class="col-span-12 lg:col-span-6"
          preset="plain"
          :options="options"
          color="warning"
        />
      </va-card-content>
    </va-card>

    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('buttons.pagination') }}</va-card-title>
      <va-card-content class="grid grid-cols-12 gap-6">
        <va-pagination v-model="activePage" class="col-span-12 xl:col-span-6" :visible-pages="3" :pages="20" />
        <va-pagination
          v-model="activePage"
          class="col-span-12 xl:col-span-6"
          :visible-pages="3"
          :pages="15"
          color="danger"
        />
        <va-pagination v-model="activePage" class="col-span-12 xl:col-span-6" :pages="5" disabled />
        <va-pagination
          v-model="activePage"
          class="col-span-12 xl:col-span-6"
          :pages="10"
          :visible-pages="3"
          :icon="{ boundary: 'bell_slash', direction: 'volume_off' }"
          :icon-right="{ boundary: 'bell', direction: 'volume_up' }"
          color="success"
        />
      </va-card-content>
    </va-card>

    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('buttons.buttonsDropdown') }}</va-card-title>
      <va-card-content class="my-3 flex flex-wrap items-center gap-2">
        <va-button-dropdown :label="t('buttons.default')"> {{ t('buttons.content') }}</va-button-dropdown>
        <va-button-dropdown split :label="t('buttons.split')"> {{ t('buttons.content') }}</va-button-dropdown>
        <va-button-dropdown split split-to="/" :label="t('buttons.splitTo')">
          {{ t('buttons.content') }}</va-button-dropdown
        >
        <va-button-dropdown :label="t('buttons.customIcon')" icon="info" opened-icon="bell_slash">
          {{ t('buttons.content') }}
        </va-button-dropdown>
        <va-button-dropdown disabled :label="t('buttons.disabled')"> {{ t('buttons.content') }}</va-button-dropdown>
        <va-button-dropdown color="warning" :label="t('buttons.warning')">
          {{ t('buttons.content') }}</va-button-dropdown
        >
      </va-card-content>
    </va-card>
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
