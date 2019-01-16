<template>
  <div class="buttons-page">
    <div class="row">
      <div class="col-12">
        <vuestic-widget class="larger-padding"
                        :headerText="$t('buttons.main')">
          <div class="row">
            <div class="col-3">
              <va-button> {{ $t('buttons.button') }} </va-button>
            </div>
            <div class="col-3">
              <va-button disabled> {{ $t('buttons.button') }} </va-button>
            </div>
            <div class="col-3">
              <va-button outline> {{ $t('buttons.button') }} </va-button>
            </div>
            <div class="col-3">
              <va-button outline disabled> {{ $t('buttons.button') }} </va-button>
            </div>
            <div class="col-3">
              <va-button flat> {{ $t('buttons.button') }} </va-button>
            </div>
            <div class="col-3">
              <va-button flat disabled> {{ $t('buttons.button') }} </va-button>
            </div>
          </div>
        </vuestic-widget>
      </div>

      <div class="col-12">
        <vuestic-widget class="larger-padding"
                        :headerText="$t('buttons.size')">
          <div class="row">
            <div class="col-3">
              <va-button small> {{ $t('buttons.small') }} </va-button>
            </div>
            <div class="col-3">
              <va-button large> {{ $t('buttons.large') }} </va-button>
            </div>
          </div>
        </vuestic-widget>
      </div>
      <div class="col-12">
        <vuestic-widget class="larger-padding"
                        :headerText="$t('buttons.advanced')">
          <div class="row">
            <div class="col-3">
              <va-button icon="ion-md-close ion"> {{ $t('buttons.button') }} </va-button>
            </div>
            <div class="col-3">
              <va-button icon-right="ion-ios-arrow-down arrow-down"> {{ $t('buttons.button') }} </va-button>
            </div>
            <div class="col-3">
              <va-button icon="ion-md-close ion"/>
            </div>
          </div>
          <div
            class="flex sm6 lg6 xl3 justify--center"
            :class="{'lg6 xl2' : sidebarOpened, 'lg2' : !sidebarOpened }">
            <button class="btn btn-primary btn-with-icon rounded-icon">
              <div class="btn-with-icon-content">
                <i class="ion-md-close ion"></i>
              </div>
            </button>
          </div>
        </vuestic-widget>
      </div>

      <div class="col-12">
        <vuestic-widget class="larger-padding"
                        :headerText="$t('buttons.colors')">
          <div class="row">
            <div class="col-3">
              <va-button color="danger"> {{ $t('buttons.button') }} </va-button>
            </div>
            <div class="col-3">
              <va-button color="info"> {{ $t('buttons.button') }} </va-button>
            </div>
            <div class="col-3">
              <va-button color="dark"> {{ $t('buttons.button') }} </va-button>
            </div>
            <div class="col-3">
              <va-button color="warning"> {{ $t('buttons.button') }} </va-button>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <va-button color="success"> {{ $t('buttons.button') }} </va-button>
            </div>
            <div class="col-3">
              <va-button color="gray"> {{ $t('buttons.button') }} </va-button>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import VaButton from '../../../vuestic-theme/vuestic-components/va-button/VaButton'

export default {
  name: 'buttons',
  components: {
    VaButton
  }
}
</script>

<style lang="scss">
.buttons-page {
  .widget .widget-body {
    padding-bottom: 0;
  }
}
</style>
