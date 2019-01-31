<template>
  <div class="buttons-page">
    <div class="va-row">
      <div class="flex md12 xl12">
        <vuestic-widget class="larger-padding"
                        :headerText="$t('buttons.types')">
          <div class="va-row">
            <div class="flex">
              <va-button> {{ $t('buttons.default') }} </va-button>
              <va-button disabled> {{ $t('buttons.disabled') }} </va-button>
              <va-button outline> {{ $t('buttons.outline') }} </va-button>
              <va-button outline disabled> {{ $t('buttons.disabled') }} </va-button>
              <va-button flat> {{ $t('buttons.flat') }} </va-button>
              <va-button flat disabled> {{ $t('buttons.disabled') }} </va-button>
            </div>
          </div>
        </vuestic-widget>
      </div>

      <div class="flex md12">
        <vuestic-widget class="larger-padding"
                        :headerText="$t('buttons.size')">
          <div class="va-row">
            <div class="flex">
              <va-button small> {{ $t('buttons.small') }} </va-button>
              <va-button> {{ $t('buttons.normal') }} </va-button>
              <va-button large> {{ $t('buttons.large') }} </va-button>
            </div>
          </div>
        </vuestic-widget>
      </div>
      <div class="flex md12">
        <vuestic-widget class="larger-padding"
                        :headerText="$t('buttons.tags')">
          <div class="va-row">
            <div class="flex">
              <va-button> {{ $t('buttons.button') }} </va-button>
              <va-button
                href="http://epic-spinners.epicmax.co/"
              >
                {{ $t('buttons.a-link') }}
              </va-button>
              <va-button
                :to="{ name: 'charts' }"
              >
                {{ $t('buttons.router-link') }}
              </va-button>
            </div>
          </div>
        </vuestic-widget>
      </div>
      <div class="flex md12">
        <vuestic-widget class="larger-padding"
                        :headerText="$t('buttons.advanced')">
          <div class="va-row">
            <div class="flex">
              <va-button icon="ion-md-close ion"> {{ $t('buttons.button') }} </va-button>
              <va-button icon-right="ion-ios-arrow-down arrow-down"> {{ $t('buttons.button') }} </va-button>
              <va-button
                icon="ion-md-close ion"
                icon-right="ion-ios-arrow-down arrow-down">
                {{ $t('buttons.button') }}
              </va-button>
              <va-button icon="ion-md-close ion"/>
            </div>
          </div>
        </vuestic-widget>
      </div>

      <div class="flex md12">
        <vuestic-widget class="larger-padding"
                        :headerText="$t('buttons.colors')">
          <div class="va-row">
            <div class="flex">
              <va-button color="danger"> {{ $t('buttons.danger') }} </va-button>
              <va-button color="info"> {{ $t('buttons.info') }} </va-button>
              <va-button color="dark"> {{ $t('buttons.dark') }} </va-button>
              <va-button color="warning"> {{ $t('buttons.warning') }} </va-button>
              <va-button color="success"> {{ $t('buttons.success') }} </va-button>
              <va-button color="gray"> {{ $t('buttons.gray') }} </va-button>
            </div>
          </div>
          <div class="va-row">
            <div class="flex">
              <va-button outline color="danger"> {{ $t('buttons.danger') }} </va-button>
              <va-button outline color="info"> {{ $t('buttons.info') }} </va-button>
              <va-button outline color="dark"> {{ $t('buttons.dark') }} </va-button>
              <va-button outline color="warning"> {{ $t('buttons.warning') }} </va-button>
              <va-button outline color="success"> {{ $t('buttons.success') }} </va-button>
              <va-button outline color="gray"> {{ $t('buttons.gray') }} </va-button>
            </div>
          </div>
          <div class="va-row">
            <div class="flex">
              <va-button flat color="danger"> {{ $t('buttons.danger') }} </va-button>
              <va-button flat color="info"> {{ $t('buttons.info') }} </va-button>
              <va-button flat color="dark"> {{ $t('buttons.dark') }} </va-button>
              <va-button flat color="warning"> {{ $t('buttons.warning') }} </va-button>
              <va-button flat color="success"> {{ $t('buttons.success') }} </va-button>
              <va-button flat color="gray"> {{ $t('buttons.gray') }} </va-button>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttons'
}
</script>

<style lang="scss">
.buttons-page {
  .widget .widget-body {
    padding-bottom: 0;
  }
}
</style>
