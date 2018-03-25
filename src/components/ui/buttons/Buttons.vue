<template>
  <div class="buttons-page">
    <div class="row">

      <div class="col-md-12">
        <vuestic-widget class="primary-secondary-buttons larger-padding"
                        :headerText="$t('buttons.main')">
          <div class="row btn-margin-row">
            <div class="col-sm-6 d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-primary">
                {{'buttons.button' | translate}}
              </button>
            </div>
            <div class="col-sm-6 d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-primary hover">
                {{'buttons.hover' | translate}}
              </button>
            </div>
            <div class="col-sm-6 d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-primary focus">
                {{'buttons.pressed' | translate}}
              </button>
            </div>
            <div class="col-sm-6 d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-primary" disabled>
                {{'buttons.disabled' | translate}}
              </button>
            </div>
          </div>

          <div class="row btn-margin-row">
            <div class="col-sm-6 d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-secondary">
                {{'buttons.button' | translate}}
              </button>
            </div>
            <div class="col-sm-6 d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-secondary hover">
                {{'buttons.hover' | translate}}
              </button>
            </div>
            <div class="col-sm-6 d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-secondary focus">
                {{'buttons.pressed' | translate}}
              </button>
            </div>
            <div class="col-sm-6 d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-secondary" disabled>
                {{'buttons.disabled' | translate}}
              </button>
            </div>
          </div>

          <div class="row btn-margin-row">

            <div class="col-sm-6 d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-primary btn-sm">
                {{'buttons.small' | translate}}
              </button>
            </div>
            <div class="col-sm-6 d-flex justify-content-center align-items-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-primary btn-micro">
                {{'buttons.micro' | translate}}
              </button>
            </div>
          </div>
        </vuestic-widget>
      </div>

      <div class="col-md-12">
        <vuestic-widget class="color-buttons" :headerText="$t('buttons.advanced')">
          <div class="row">
            <div class="col-sm-6  d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-primary btn-with-icon">
                <div class="btn-with-icon-content">
                  <i class="ion-md-close ion"></i>
                  {{'buttons.button' | translate}}
                </div>
              </button>
            </div>
            <div class="col-sm-6  d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <div class="dropdown d-inline-flex" v-dropdown>
                <button class="btn btn-primary dropdown-toggle theme-toggle " type="button" id="dropdownMenuButton"
                        data-toggle="dropdown">
                  DROPDOWN
                  <i class="ion-ios-arrow-down arrow-down"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div class="dropdown-menu-content">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6  d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-4' : sidebarOpened, 'col-lg-4' : !sidebarOpened }">
              <div class="btn-toolbar  d-inline-flex" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group" role="group" aria-label="First group">
                  <button type="button" class="btn btn-primary">1</button>
                  <button type="button" class="btn btn-primary focus">2</button>
                  <button type="button" class="btn btn-primary">3</button>
                  <button type="button" class="btn btn-primary">4</button>
                </div>
              </div>
            </div>
            <div class="col-sm-6  d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-2' : sidebarOpened, 'col-lg-2' : !sidebarOpened }">
              <button class="btn btn-primary btn-with-icon rounded-icon">
                <div class="btn-with-icon-content">
                  <i class="ion-md-close ion"></i>
                </div>
              </button>
            </div>
          </div>
        </vuestic-widget>
      </div>

      <div class="col-md-12">
        <vuestic-widget class="color-buttons" :headerText="$t('buttons.colors')">

          <div class="row btn-margin-row">
            <div class="col-sm-6  d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-danger">
                {{'buttons.button' | translate}}
              </button>
            </div>
            <div class="col-sm-6  d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-info">
                {{'buttons.button' | translate}}
              </button>
            </div>
            <div class="col-sm-6  d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-dark">
                {{'buttons.button' | translate}}
              </button>
            </div>
            <div class="col-sm-6  d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-warning">
                {{'buttons.button' | translate}}
              </button>
            </div>
          </div>

          <div class="row btn-margin-row">
            <div class="col-sm-6  d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-success">
                {{'buttons.button' | translate}}
              </button>
            </div>
            <div class="col-sm-6  d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-pale">
                {{'buttons.button' | translate}}
              </button>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'buttons',

    computed: {
      ...mapGetters([
        'sidebarOpened'
      ])
    }
  }
</script>

<style lang="scss">
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

  .buttons-page {
    @include media-breakpoint-only(xl) {
      .btn-margin-row {
        margin-right: -35px;
        margin-left: -40px;
      }
    }
    .btn, .btn-group {
      margin-bottom: 45px;
    }

    .btn-group .btn {
      margin-bottom: 0;
    }

    .dropdown-menu {
      margin-top: -43px;
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
