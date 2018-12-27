<template>
  <div class="buttons-page">
    <div class="flex md12">
      <vuestic-widget class="primary-secondary-buttons larger-padding"
                      :headerText="$t('buttons.main')">
        <div class="va-row btn-margin-row">
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-primary">
              {{'buttons.button' | translate}}
            </button>
          </div>
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-primary hover">
              {{'buttons.hover' | translate}}
            </button>
          </div>
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-primary focus">
              {{'buttons.pressed' | translate}}
            </button>
          </div>
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-primary" disabled>
              {{'buttons.disabled' | translate}}
            </button>
          </div>
        </div>

        <div class="va-row btn-margin-row">
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-secondary">
              {{'buttons.button' | translate}}
            </button>
          </div>
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-secondary hover">
              {{'buttons.hover' | translate}}
            </button>
          </div>
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-secondary focus">
              {{'buttons.pressed' | translate}}
            </button>
          </div>
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-secondary" disabled>
              {{'buttons.disabled' | translate}}
            </button>
          </div>
        </div>

        <div class="va-row btn-margin-row">
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-primary btn-sm">
              {{'buttons.small' | translate}}
            </button>
          </div>
          <div
            class="flex sm6 lg6 xl3 justify--center align--center">
            <button class="btn btn-primary btn-micro">
              {{'buttons.micro' | translate}}
            </button>
          </div>
        </div>
      </vuestic-widget>
    </div>

    <div class="flex md12">
      <vuestic-widget class="color-buttons"
                      :headerText="$t('buttons.advanced')">
        <div class="va-row">
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-primary btn-with-icon">
              <div class="btn-with-icon-content">
                <i class="ion-md-close ion"></i>
                {{'buttons.button' | translate}}
              </div>
            </button>
          </div>
          <div class="flex sm6 lg6 xl3">
            <button
              class="btn btn-primary dropdown-toggle theme-toggle"
              type="button"
            >
              DROPDOWN
              <i class="ion-ios-arrow-down arrow-down"></i>
              <vuestic-dropdown position="bottom">
                <template>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </template>
              </vuestic-dropdown>
            </button>
          </div>
          <div
            class="flex sm6 lg6 xl3 justify--center"
            :class="{'lg6 xl4' : sidebarOpened, 'lg4' : !sidebarOpened }">
            <div class="btn-toolbar  d-inline-flex" role="toolbar"
                 aria-label="Toolbar with button groups">
              <div class="btn-group" role="group" aria-label="First group">
                <button type="button" class="btn btn-primary">1</button>
                <button type="button" class="btn btn-primary focus">2</button>
                <button type="button" class="btn btn-primary">3</button>
                <button type="button" class="btn btn-primary">4</button>
              </div>
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
        </div>
      </vuestic-widget>
    </div>

    <div class="flex md12">
      <vuestic-widget class="color-buttons"
                      :headerText="$t('buttons.colors')">
        <div class="va-row btn-margin-row">
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-danger">
              {{'buttons.button' | translate}}
            </button>
          </div>
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-info">
              {{'buttons.button' | translate}}
            </button>
          </div>
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-dark">
              {{'buttons.button' | translate}}
            </button>
          </div>
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-warning">
              {{'buttons.button' | translate}}
            </button>
          </div>
        </div>

        <div class="va-row btn-margin-row">
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-success">
              {{'buttons.button' | translate}}
            </button>
          </div>
          <div
            class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-pale">
              {{'buttons.button' | translate}}
            </button>
          </div>
        </div>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'buttons',

  computed: {
    ...mapGetters([
      'sidebarOpened',
    ]),
  },
}
</script>

<style lang="scss">
.buttons-page {
  @include media-breakpoint-only(xl) {
    .btn-margin-row {
      margin-right: -35px;
      margin-left: -40px;
    }
  }
  .btn, .btn-group, .dropdown {
    margin-bottom: 45px;
  }

  .btn-group .btn {
    margin-bottom: 0;
  }

  .dropdown-toggle {
    margin-bottom: 0;
  }

  .smaller-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;

    .btn-micro {
      margin-left: 20px;
    }
  }

  .widget .widget-body {
    padding-bottom: 0;
  }
}
</style>
