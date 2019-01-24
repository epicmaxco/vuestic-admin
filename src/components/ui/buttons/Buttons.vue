<template>
  <div class="buttons-page">
    <div class="va-row">
      <div class="flex md12 xl12">
        <vuestic-widget class="larger-padding"
                        :headerText="$t('buttons.main')">
          <div class="va-row">
            <div class="flex">
              <va-button> {{ $t('buttons.button') }} </va-button>
              <va-button disabled> {{ $t('buttons.button') }} </va-button>
              <va-button outline> {{ $t('buttons.button') }} </va-button>
              <va-button outline disabled> {{ $t('buttons.button') }} </va-button>
              <va-button flat> {{ $t('buttons.button') }} </va-button>
              <va-button flat disabled> {{ $t('buttons.button') }} </va-button>
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
              <va-button large> {{ $t('buttons.large') }} </va-button>
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
              <va-button color="danger"> {{ $t('buttons.button') }} </va-button>
              <va-button color="info"> {{ $t('buttons.button') }} </va-button>
              <va-button color="dark"> {{ $t('buttons.button') }} </va-button>
              <va-button color="warning"> {{ $t('buttons.button') }} </va-button>
              <va-button color="success"> {{ $t('buttons.button') }} </va-button>
              <va-button color="gray"> {{ $t('buttons.button') }} </va-button>
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
