<template>
  <div class="dropdowns-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('dropdown.default')">
          <div class="row btn-margin-row">
            <div class="col-sm-6 d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }"
                 v-for="placement in placements"
            >
              <vuestic-dropdown :placement="placement">
                <button type="button" class="btn btn-primary dropdown-toggle theme-toggle"
                        slot="dropdown-button"
                >
                  {{ placement }}
                  <i class="ion-ios-arrow-down arrow-down"></i>
                </button>
                <template>
                  <a class="dropdown-item" href="#" v-for="link in links">{{ link }}</a>
                </template>
              </vuestic-dropdown>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('dropdown.withArrow')">
          <div class="row btn-margin-row">
            <div class="col-sm-6 d-flex justify-content-center"
                 :class="{'col-lg-6 col-xl-3' : sidebarOpened, 'col-lg-3' : !sidebarOpened }"
                 v-for="placement in placements"
            >
              <vuestic-dropdown :placement="placement" arrow>
                <button type="button" class="btn btn-primary dropdown-toggle theme-toggle"
                        slot="dropdown-button"
                >
                  {{ placement }}
                  <i class="ion-ios-arrow-down arrow-down"></i>
                </button>
                <template>
                  <a class="dropdown-item" href="#" v-for="link in links">{{ link }}</a>
                </template>
              </vuestic-dropdown>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dropdowns',
    data () {
      return {
        placements: [
          'top',
          'right',
          'bottom',
          'left',
        ],
        links: [
          'Action',
          'Another action',
          'Something else here'
        ]
      }
    }
  }
</script>
