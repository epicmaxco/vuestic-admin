<template>
  <div class="buttons-page">
    <div class="row">
      <widget class="col-sm-12 primary-secondary-buttons" header-text="Primary & Secondary Buttons">
        <div class="row btn-margin-row">
          <div class="col-sm-3">
            <button class="btn btn-primary">
              BUTTON
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-primary hover">
              HOVER
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-primary focus">
              PRESSED
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-primary" disabled>
              DISABLED
            </button>
          </div>
        </div>

        <div class="row btn-margin-row">
          <div class="col-sm-3">
            <button class="btn btn-secondary">
              BUTTON
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-secondary hover">
              HOVER
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-secondary focus">
              PRESSED
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-secondary" disabled>
              DISABLED
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 smaller-buttons">
            <button class="btn btn-primary btn-sm">
              SMALL
            </button>
            <button class="btn btn-primary btn-micro">
              MICRO
            </button>
          </div>
        </div>
      </widget>
    </div>

    <div class="row">
      <widget class="col-sm-12 color-buttons" header-text="Icons, Groups, Dropdowns">
        <div class="row">
          <div class="col-sm-3">
            <button class="btn btn-primary btn-with-icon">
              <div class="btn-with-icon-content">
                <i class="ion-android-close ion"></i>
                BUTTON
              </div>
            </button>
          </div>
          <div class="col-sm-3">
            <div class="dropdown" v-dropdown>
              <button class="btn btn-primary dropdown-toggle theme-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown">
                BUTTON
                <i class="ion-chevron-down arrow-down"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-primary">1</button>
                <button type="button" class="btn btn-primary focus">2</button>
                <button type="button" class="btn btn-primary">3</button>
                <button type="button" class="btn btn-primary">4</button>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-primary btn-with-icon rounded-icon">
              <div class="btn-with-icon-content">
                <i class="ion-android-close ion"></i>
              </div>
            </button>
          </div>
        </div>
      </widget>
    </div>

    <div class="row">
      <widget class="col-sm-12 color-buttons" header-text="Colors">
        <div class="row btn-margin-row">
          <div class="col-sm-3">
            <button class="btn btn-danger">
              BUTTON
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-info">
              BUTTON
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-dark">
              BUTTON
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-warning">
              BUTTON
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-3">
            <button class="btn btn-success">
              BUTTON
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-pale">
              BUTTON
            </button>
          </div>
        </div>
      </widget>
    </div>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'
  import Dropdown from 'directives/Dropdown'

  export default {
    name: 'buttons',
    components: {
      Widget
    },
    directives: {
      Dropdown
    }
  }
</script>

<style lang="scss">
  .buttons-page {

    .btn-margin-row .btn {
      margin-bottom: 45px;
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
      padding-top: 47px;
      padding-bottom: 47px;
    }
  }
</style>
