<template>
  <div class="buttons">
    <div class="row">
      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{ t('buttons.types') }}</va-card-title>
          <va-card-content class="row">
            <div class="flex">
              <va-button class="mr-2 mb-2"> {{ t('buttons.default') }}</va-button>
              <va-button class="mr-2 mb-2" disabled> {{ t('buttons.disabled') }}</va-button>
              <va-button class="mr-2 mb-2" preset="outline" border-color="primary" color="primary">
                {{ t('buttons.outline') }}</va-button
              >
              <va-button class="mr-2 mb-2" preset="outline" border-color="primary" color="primary" disabled>
                {{ t('buttons.disabled') }}</va-button
              >
              <va-button class="mr-2 mb-2" preset="plain"> {{ t('buttons.flat') }}</va-button>
              <va-button class="mr-2 mb-2" preset="plain" disabled> {{ t('buttons.disabled') }}</va-button>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{ t('buttons.size') }}</va-card-title>
          <va-card-content class="row">
            <div class="flex">
              <va-button class="mr-2 mb-2" size="small"> {{ t('buttons.small') }}</va-button>
              <va-button class="mr-2 mb-2"> {{ t('buttons.normal') }}</va-button>
              <va-button class="mr-2 mb-2" size="large"> {{ t('buttons.large') }}</va-button>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{ t('buttons.tags') }}</va-card-title>
          <va-card-content class="row">
            <div class="flex">
              <va-button class="mr-2 mb-2"> {{ t('buttons.button') }}</va-button>
              <va-button class="mr-2 mb-2" href="http://epic-spinners.epicmax.co/">
                {{ t('buttons.a-link') }}
              </va-button>
              <va-button class="mr-2 mb-2" :to="{ name: 'charts' }">
                {{ t('buttons.router-link') }}
              </va-button>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{ t('buttons.advanced') }}</va-card-title>
          <va-card-content class="row">
            <div class="flex">
              <va-button class="mr-2 mb-2" icon="md_close"> {{ t('buttons.button') }}</va-button>
              <va-button class="mr-2 mb-2" icon-right="expand_more"> {{ t('buttons.button') }}</va-button>
              <va-button class="mr-2 mb-2" icon="md_close" icon-right="expand_more">
                {{ t('buttons.button') }}
              </va-button>
              <va-button class="mr-2 mb-2" icon="md_close" />
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{ t('buttons.colors') }}</va-card-title>
          <va-card-content>
            <div class="row">
              <div class="flex">
                <va-button class="mr-2 mb-2" color="danger"> {{ t('buttons.danger') }}</va-button>
                <va-button class="mr-2 mb-2" color="info"> {{ t('buttons.info') }}</va-button>
                <va-button class="mr-2 mb-2" color="dark"> {{ t('buttons.dark') }}</va-button>
                <va-button class="mr-2 mb-2" color="warning"> {{ t('buttons.warning') }}</va-button>
                <va-button class="mr-2 mb-2" color="success"> {{ t('buttons.success') }}</va-button>
                <va-button class="mr-2 mb-2" color="gray"> {{ t('buttons.gray') }}</va-button>
              </div>
            </div>
            <div class="row">
              <div class="flex">
                <va-button class="mr-2 mb-2" preset="outline" border-color="danger" color="danger">
                  {{ t('buttons.danger') }}</va-button
                >
                <va-button class="mr-2 mb-2" preset="outline" border-color="info" color="info">
                  {{ t('buttons.info') }}</va-button
                >
                <va-button class="mr-2 mb-2" preset="outline" border-color="dark" color="dark">
                  {{ t('buttons.dark') }}</va-button
                >
                <va-button class="mr-2 mb-2" preset="outline" border-color="warning" color="warning">
                  {{ t('buttons.warning') }}</va-button
                >
                <va-button class="mr-2 mb-2" preset="outline" border-color="success" color="success">
                  {{ t('buttons.success') }}</va-button
                >
                <va-button class="mr-2 mb-2" preset="outline" border-color="gray" color="gray">
                  {{ t('buttons.gray') }}</va-button
                >
              </div>
            </div>
            <div class="row">
              <div class="flex">
                <va-button class="mr-2 mb-2" preset="plain" color="danger"> {{ t('buttons.danger') }}</va-button>
                <va-button class="mr-2 mb-2" preset="plain" color="info"> {{ t('buttons.info') }}</va-button>
                <va-button class="mr-2 mb-2" preset="plain" color="dark"> {{ t('buttons.dark') }}</va-button>
                <va-button class="mr-2 mb-2" preset="plain" color="warning"> {{ t('buttons.warning') }}</va-button>
                <va-button class="mr-2 mb-2" preset="plain" color="success"> {{ t('buttons.success') }}</va-button>
                <va-button class="mr-2 mb-2" preset="plain" color="gray"> {{ t('buttons.gray') }}</va-button>
              </div>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{ t('buttons.buttonGroups') }}</va-card-title>
          <va-card-content>
            <div class="row">
              <div class="flex xs12 xl6">
                <va-button-group color="secondary">
                  <va-button size="large"> One</va-button>
                  <va-button size="large"> Two</va-button>
                  <va-button size="large"> Three</va-button>
                </va-button-group>
              </div>
              <div class="flex xs12 xl6">
                <va-button-group preset="outline" border-color="danger" color="danger">
                  <va-button icon="maki-art-gallery">One</va-button>
                  <va-button>Two</va-button>
                  <va-button>Three</va-button>
                </va-button-group>
              </div>
              <div class="flex xs12 xl6">
                <va-button-group preset="plain" color="gray">
                  <va-button icon="ion-ios-mail">One</va-button>
                  <va-button icon="entypo-user">Two</va-button>
                  <va-button icon="ion-ios-alarm">Three</va-button>
                </va-button-group>
              </div>
              <div class="flex xs12 xl6">
                <va-button-group color="dark">
                  <va-button> One</va-button>
                  <va-button> Two</va-button>
                  <va-button> Three</va-button>
                  <va-button icon="ion-ios-arrow-down" />
                </va-button-group>
              </div>
              <div class="flex xs12 xl6">
                <va-button-group preset="outline" border-color="primary" color="primary" size="large">
                  <va-button>First</va-button>
                  <va-button icon-right="glyphicon-pencil">Second</va-button>
                  <va-button>Third</va-button>
                </va-button-group>
              </div>
              <div class="flex xs12 xl6">
                <va-button-group preset="plain" size="small" color="warning">
                  <va-button icon="glyphicon-envelope" />
                  <va-button icon="entypo-user" />
                  <va-button icon="ion-ios-alarm" />
                </va-button-group>
              </div>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{ t('buttons.buttonToggles') }}</va-card-title>
          <va-card-content>
            <div class="row">
              <div class="flex xs12 lg6">
                <va-button-toggle v-model="model" :options="options" />
              </div>
              <div class="flex xs12 lg6">
                <va-button-toggle
                  v-model="model"
                  preset="outline"
                  :options="options"
                  border-color="danger"
                  color="danger"
                />
              </div>
              <div class="flex xs12 lg6">
                <va-button-toggle v-model="model" preset="plain" :options="options" color="gray" />
              </div>
              <div class="flex xs12 lg6">
                <va-button-toggle v-model="model" :options="options" color="dark" />
              </div>
              <div class="flex xs12 lg6">
                <va-button-toggle
                  v-model="model"
                  preset="outline"
                  :options="options"
                  border-color="info"
                  color="info"
                />
              </div>
              <div class="flex xs12 lg6">
                <va-button-toggle v-model="model" preset="plain" :options="options" color="warning" />
              </div>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{ t('buttons.pagination') }}</va-card-title>
          <va-card-content>
            <div class="row">
              <div class="flex xs12 xl6">
                <va-pagination v-model="activePage" :visible-pages="3" :pages="20" />
              </div>
              <div class="flex xs12 xl6">
                <va-pagination v-model="activePage" :visible-pages="4" :pages="15" color="danger" />
              </div>
              <div class="flex xs12 xl6">
                <va-pagination v-model="activePage" :pages="5" disabled />
              </div>
              <div class="flex xs12 xl6">
                <va-pagination
                  v-model="activePage"
                  :pages="10"
                  :visible-pages="3"
                  :icon="{ boundary: 'bell_slash', direction: 'volume_off' }"
                  :icon-right="{ boundary: 'bell', direction: 'volume_up' }"
                  color="success"
                />
              </div>
            </div>
          </va-card-content>
        </va-card>
      </div>
      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{ t('buttons.buttonsDropdown') }}</va-card-title>
          <va-card-content>
            <div class="row">
              <div class="flex">
                <va-button-dropdown class="mr-2 mb-2" :label="t('buttons.default')">
                  {{ t('buttons.content') }}</va-button-dropdown
                >
                <va-button-dropdown class="mr-2 mb-2" split :label="t('buttons.split')">
                  {{ t('buttons.content') }}</va-button-dropdown
                >
                <va-button-dropdown class="mr-2 mb-2" split split-to="/" :label="t('buttons.splitTo')">
                  {{ t('buttons.content') }}</va-button-dropdown
                >
                <va-button-dropdown
                  class="mr-2 mb-2"
                  :label="t('buttons.customIcon')"
                  icon="info"
                  opened-icon="bell_slash"
                >
                  {{ t('buttons.content') }}
                </va-button-dropdown>
                <va-button-dropdown class="mr-2 mb-2" disabled :label="t('buttons.disabled')">
                  {{ t('buttons.content') }}</va-button-dropdown
                >
                <va-button-dropdown class="mr-2 mb-2" color="warning" :label="t('buttons.warning')">
                  {{ t('buttons.content') }}</va-button-dropdown
                >
              </div>
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
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
