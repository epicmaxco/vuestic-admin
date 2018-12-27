<template>
  <div class="dropdowns-page">
    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget :headerText="$t('dropdown.default')">
          <div class="va-row btn-margin-row">
            <div
              class="flex sm6 lg6 xl3 mb4 justify--center"
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
                    <div class="flex lg6"></div>
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
