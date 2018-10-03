<template>
  <div class="dropdowns-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('dropdown.default')">
          <div class="row btn-margin-row">
            <div class="col-sm-6 col-lg-6 col-xl-3 mb-4 d-flex justify-content-center"
                 v-for="(dropdown, index) in dropdowns"
                 :key="index"
            >
              <button
                type="button"
                class="btn btn-primary dropdown-toggle theme-toggle"
                slot="actuator"
              >
                {{ dropdown.text }}
                <i class="ion-ios-arrow-down arrow-down"></i>
                <vuestic-dropdown
                  v-model="dropdown.value"
                  :position="dropdown.position"
                >
                  <div class="q-popover__container">
                      <a
                        class="dropdown-item"
                        href="#"
                        v-for="(link, index) in links"
                        :key="index"
                      >{{ link }}</a>
                      <div class="col-lg-6"></div>
                  </div>
                </vuestic-dropdown>
              </button>
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
        'Something else here',
      ],
      dropdowns: [
        {
          text: 'top',
          value: false,
          position: 'top',
        },
        {
          text: 'right',
          value: false,
          position: 'right',
        },
        {
          text: 'bottom',
          value: false,
          position: 'bottom',
        },
        {
          text: 'left',
          value: false,
          position: 'left',
        },
      ],
    }
  },
}
</script>
