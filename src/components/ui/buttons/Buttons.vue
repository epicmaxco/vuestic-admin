<template>
  <div class="buttons-page">
    <div class="row">
      <vuestic-widget class="col-sm-12 primary-secondary-buttons larger-padding"
                      headerText="Primary & Secondary Buttons">
        <div class="row btn-margin-row">
          <div class="col-sm-6 d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-primary">
              BUTTON
            </button>
          </div>
          <div class="col-sm-6 d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-primary hover">
              HOVER
            </button>
          </div>
          <div class="col-sm-6 d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-primary focus">
              PRESSED
            </button>
          </div>
          <div class="col-sm-6 d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-primary" disabled>
              DISABLED
            </button>
          </div>
        </div>

        <div class="row btn-margin-row">
          <div class="col-sm-6 d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-secondary">
              BUTTON
            </button>
          </div>
          <div class="col-sm-6 d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-secondary hover">
              HOVER
            </button>
          </div>
          <div class="col-sm-6 d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-secondary focus">
              PRESSED
            </button>
          </div>
          <div class="col-sm-6 d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-secondary" disabled>
              DISABLED
            </button>
          </div>
        </div>

        <div class="row btn-margin-row">

          <div class="col-sm-6 d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-primary btn-sm">
              SMALL
            </button>
          </div>
          <div class="col-sm-6 d-flex justify-content-center align-items-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-primary btn-micro">
              MICRO
            </button>
          </div>
        </div>
      </vuestic-widget>
    </div>

    <div class="row">
      <vuestic-widget class="col-sm-12 color-buttons" headerText="Icons, Groups, Dropdowns">
        <div class="row">
          <div class="col-sm-6  d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-primary btn-with-icon">
              <div class="btn-with-icon-content">
                <i class="ion-android-close ion"></i>
                BUTTON
              </div>
            </button>
          </div>
          <div class="col-sm-6  d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <div class="dropdown d-inline-flex" v-dropdown>
              <button class="btn btn-primary dropdown-toggle theme-toggle " type="button" id="dropdownMenuButton"
                      data-toggle="dropdown">
                DROPDOWN
                <i class="ion-chevron-down arrow-down"></i>
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
                <i class="ion-android-close ion"></i>
              </div>
            </button>
          </div>
        </div>
      </vuestic-widget>
    </div>

    <div class="row">
      <vuestic-widget class="col-sm-12 color-buttons" headerText="Colors">
        <div class="row btn-margin-row">
          <div class="col-sm-6  d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-danger">
              BUTTON
            </button>
          </div>
          <div class="col-sm-6  d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-info">
              BUTTON
            </button>
          </div>
          <div class="col-sm-6  d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-dark">
              BUTTON
            </button>
          </div>
          <div class="col-sm-6  d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-warning">
              BUTTON
            </button>
          </div>
        </div>

        <div class="row btn-margin-row">
          <div class="col-sm-6  d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-success">
              BUTTON
            </button>
          </div>
          <div class="col-sm-6  d-flex justify-content-center"
               :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
            <button class="btn btn-pale">
              BUTTON
            </button>
          </div>
        </div>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Dropdown from '../../../directives/Dropdown'

  export default {
    name: 'buttons',
    directives: {
      Dropdown
    },
    computed: {
      ...mapGetters([
        'sidebarOpened'
      ])
    }
  }
</script>

<style lang="scss">
  @import "../../../../node_modules/bootstrap/scss/mixins/breakpoints";
  @import "../../../../node_modules/bootstrap/scss/variables";

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
